# [html2canvas + jspdf 实现 html 转 pdf](https://www.cnblogs.com/cmyoung/p/11609996.html)

在前端开发中， html 转 pdf 是最常见的需求，实现这块需求的开发 html2canvas 和 jspdf 是最常用的两个插件，插件都是现成的，但是有时候用不好，也不出现很多头疼问题：

\1. 生成的 pdf 清晰度不高，比较模糊；

2.多页 pdf 会出现把内容给分割的情况，特别是文字被分割时，体验很不友好；

3.页面较宽或较长时，或出现生成的 pdf 内容不全的情况。

 

如果你在项目中出现以上情况，那么不着急，往下看就对了，下面的代码统统为你解决了

话不多说，直接上代码：

 

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
/*
 * @Description: html 转为 pdf 并下载
 * @Author: cmyoung
 * @Date: 2018-08-10 19:07:32
 * @LastEditTime: 2019-08-23 16:34:18
 */

/**
 * @param html { String } DOM树
 * @param isOne { Boolean }  是否为单页 默认 否(false)
 * @return 文件 {pdf格式}
 */

'use strict'
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default async (html, isOne) => {
  let contentWidth = html.clientWidth // 获得该容器的宽
  let contentHeight = html.clientHeight // 获得该容器的高
  let canvas = document.createElement('canvas')
  let scale = 2  // 解决清晰度问题，先放大 2倍

  canvas.width = contentWidth * scale // 将画布宽&&高放大两倍
  canvas.height = contentHeight * scale
  canvas.getContext('2d').scale(scale, scale)

  let opts = {
    scale: scale,
    canvas: canvas,
    width: contentWidth,
    height: contentHeight,
    useCORS: true
  }

  return html2canvas(html, opts).then(canvas => {
    let pageData = canvas.toDataURL('image/jpeg', 1.0) // 清晰度 0 - 1
    let pdf

    if (isOne) {
      // 单页
      console.log(contentWidth, 'contentWidth')
      console.log(contentHeight, 'contentHeight')

      // jspdf.js 插件对单页面的最大宽高限制 为 14400
      let limit = 14400

      if (contentHeight > limit) {
        let contentScale = limit / contentHeight
        contentHeight = limit
        contentWidth = contentScale * contentWidth
      }

      let orientation = 'p'
      // 在 jspdf 源码里，如果是 orientation = 'p' 且 width > height 时， 会把 width 和 height 值交换，
      // 类似于 把 orientation 的值修改为 'l' , 反之亦同。
      if (contentWidth > contentHeight) {
        orientation = 'l'
      }

      // orientation Possible values are "portrait" or "landscape" (or shortcuts "p" or "l")
      pdf = new jsPDF(orientation, 'pt', [contentWidth, contentHeight]) // 下载尺寸 a4 纸 比例

      // pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置
      pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight)
    } else {
      //一页 pdf 显示 html 页面生成的 canvas高度
      let pageHeight = (contentWidth / 552.28) * 841.89
      //未生成 pdf 的 html页面高度
      let leftHeight = contentHeight
      //页面偏移
      let position = 0
      //a4纸的尺寸[595.28,841.89]，html 页面生成的 canvas 在pdf中图片的宽高
      let imgWidth = 555.28
      let imgHeight = (imgWidth / contentWidth) * contentHeight

      pdf = new jsPDF('', 'pt', 'a4') // 下载尺寸 a4 纸 比例
      //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      //当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
      } else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
          leftHeight -= pageHeight
          position -= 841.89
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage()
          }
        }
      }
    }
    return pdf
  })
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

 

以上方法支持，生成的 pdf 为 单页或多页可选，如果不是需求必须是多页的，建议都选择生成 单页的，为什么呢？

因为单页不会出现内容或文字分割的情况。

但是，如果内容过长超过 14400 的话，那么你会发现 14400 之外的内容获取不到了，这是为什么呢？看来 jspdf 的源码之后找到答案，源码里面有限制：

 ![img](https://img2018.cnblogs.com/blog/1057407/201909/1057407-20190929204322414-1180600295.png)

 

 不过，我的代码里已经解决过长的问题（宽度一般不会超过，特殊场景暂不考虑），超过 14400 时，按照高度就为 14400 来算缩放比例，宽度按比例缩放好像就行了，这就完事了？

不不不，好像还有坑，就是 orientation ，有两个值 "portrait" or "landscape"，默认是 'p', 当 orientation = 'p' 且 width > height 时， 他默认会把 width 和 height 值交换，如果你不想要他交换，那么当你的 width > height 时，你把 orientation 动态改为 'l' 即可，反之亦然。

 

![img](https://img2018.cnblogs.com/blog/1057407/201909/1057407-20190929205457859-1507713517.png)

 

 

以上希望对你有用，谢谢！