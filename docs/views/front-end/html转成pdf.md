---
title: 前端实现 HTML 转 PDF 下载的两种方式
date: 2021-03-18 12:00:00
tags:
  - html pdf
categories:
  - front-end
---

# 前端实现 HTML 转 PDF 下载的两种方式

> 将 HTML 页面转化为 PDF 下载是前端经常会遇到的需求，下面就列举两种方式进行实现。以下两种方式默认都是在 Vue 项目环境下，其他框架项目自行灵活运用。

# 方式一：使用 html2canvas 和 jspdf 插件实现

该方式是通过`html2canvas`将 HTML 页面转换成图片，然后再通过`jspdf`将图片的 base64 生成为 pdf 文件。实现步骤如下：

## 1,下载插件模块

```undefined
npm install html2canvas jspdf --save
```

## 2,定义功能实现方法

在项目工具方法存放文件夹 utils 中创建`htmlToPdf.js`文件，代码如下：

```javascript
// 导出页面为PDF格式
import html2Canvas from "html2canvas"
import JsPDF from "jspdf"
export default {
  install(Vue, options) {
    Vue.prototype.getPdf = function() {
      var title = this.htmlTitle
      html2Canvas(document.querySelector("#pdfDom"), {
        allowTaint: true,
      }).then(function(canvas) {
        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = (contentWidth / 592.28) * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = (592.28 / contentWidth) * contentHeight
        let pageData = canvas.toDataURL("image/jpeg", 1.0)
        let PDF = new JsPDF("", "pt", "a4")
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + ".pdf")
      })
    }
  },
}
```

## 3, 全局引入实现方法

在项目主文件`main.js`中引入定义好的实现方法，并注册。

```jsx
import htmlToPdf from "@/components/utils/htmlToPdf"
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)
```

## 4, 在相关要导出的页面中，点击时调用绑定在 Vue 原型上的 getPdf 方法，传入 id 即可

```jsx
//html
 <div id="pdfDom">
   <!-- 要下载的HTML页面,页面是由后台返回 -->
  <div v-html="pageData"></div>
</div>
<el-button type="primary" size="small" @click="getPdf('#pdfDom')">点击下载</el-button>

//js
export default {
  data () {
      return {
      htmlTitle: '页面导出PDF文件名'
      }
  }
 }
```

# 方式二：读取后台返回文件流，利用 HTML5 中 a 标签的 download 属性实现下载

> 该方法需要先请求后台，后台会返回一个文件流，然后解析文件流，再通过 HTML5 中`<a>`标签的`download`属性实现下载功能。步骤如下：

## 1,发送请求，获取到后台返回的文件流及文件信息

- 前端发送请求获取下载文件信息：

```javascript
// 引入下载方法
import { download } from "utils"
export default {
  methods: {
    async downloadFile() {
      let res = await axios.get(
        (url: "xxxx/xxxx"),
        (method: "GET"),
        // 设置返回数据类型，这里一定要设置，否则下载下来的pdf会是空白,也可以是`arraybuffer`
        (responseType: "blob"),
        (params: {
          id: "xxxxxx",
        })
      )
      // 获取在response headers中返回的下载文件类型
      let type = JSON.parse(res.headers)["content-type"]

      /*获取在response headers中返回的下载文件名
        因为返回文件名是通过encodeURIComponent()函数进行了编码，因此需要通过decodeURIComponent()函数解码
      */
      let fileName = decodeURIComponent(JSON.parse(res.headers)["file-name"])
      // 调用封装好的下载函数
      download(res, type, fileName)
    },
  },
}
```

- 后台返回的文件流格式：

  ![img](https:////upload-images.jianshu.io/upload_images/4921980-a44fa0f4b6c88c3f.png?imageMogr2/auto-orient/strip|imageView2/2/w/1035/format/webp)

  文件流.png

## 2, 封装下载方法 - 解析文件流，创建 a 标签并设置下载相关属性。

```javascript
// utils.js
export const download = (res, type, filename) => {
  // 创建blob对象，解析流数据
  const blob = new Blob([res], {
    // 如何后端没返回下载文件类型，则需要手动设置：type: 'application/pdf;chartset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
    type: type,
  })
  const a = document.createElement("a")
  // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
  const URL = window.URL || window.webkitURL
  // 根据解析后的blob对象创建URL 对象
  const herf = URL.createObjectURL(blob)
  // 下载链接
  a.href = herf
  // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  // 在内存中移除URL 对象
  window.URL.revokeObjectURL(herf)
}
```

## 3，点击下载按钮，调用下载方法

```xml
 <div id="pdfDom">
    <!-- 要下载的页面 -->
    <div v-html="pageData"></div>
</div>
<el-button type="primary" size="small" @click="downloadFile">点击下载</el-button>
```

# 总结

以上两种实现方式各有优劣，方式一是纯前端实现，需要引入第三方插件，可能会导致项目体积增加。方式二虽然更加简洁，但`a`标签的`download`属性为 HTML5 新增属性，可能存在兼容性问题。如果有需要，可以根据自己情况来选择。

作者：桃花谷主 V
链接：https://www.jianshu.com/p/56680ce1cc97
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
