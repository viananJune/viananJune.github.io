const themeConfig = require("./config/theme/")

module.exports = {
  base: "/blog/",
  title: "欢迎来到七叶的世界",
  description:
    "一叶是希望,二叶是信念，三叶是祈求，四叶是幸福，五叶是幸运，六叶是浪漫，七叶是爱情",
  dest: "docs/.vuepress/dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],

    // add jquert and fancybox
    [
      "script",
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js",
      },
    ],
    [
      "script",
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css",
      },
    ],
  ],
  theme: "reco",
  themeConfig,
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    "@vuepress/medium-zoom",
    "flowchart",
    "@vuepress-reco/vuepress-plugin-loading-page",
    // 看板娘
    // [
    //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    //   {
    //     theme: ["z16"],
    //     clean: true,
    //     modelStyle: {
    //       position: "fixed",
    //       right: "0px",
    //       bottom: "0px",
    //       opacity: "0.9",
    //       zIndex: 99999
    //     }
    //   }
    // ],
    // 鼠标点击特效
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: ["circle"], // shape of the particle, default: 'star'， 可选'circle'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],

    // // 动态标题
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)老板好！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)快快回来！",
        recoverTime: 2000,
      },
    ],
    // ['@vuepress-reco/comments', {
    //   solution: 'valine',
    //   options: {
    //     appId: 'vcfdlxv9vEKeHDQT1bEaLVaG-gzGzoHsz',// your appId
    //     appKey: 'E0Ae8xnQUmiCUesRH42CA48H', // your appKey
    //   }
    // }],
    [
      "@vuepress-reco/vuepress-plugin-bulletin-popover",
      {
        // width: '300px', // 默认 260px
        title: "个人微信:18603853618",
        body: [
          // {
          //   type: 'title',
          //   content: '',
          //   style: 'text-aligin: center;'
          // },
          {
            type: "image",
            src: "/wechat.jpg",
          },
        ],
        // footer: [
        //   {
        //     type: 'button',
        //     text: '微信',
        //     link: '/wechat.jpeg'
        //   },
        //   {
        //     type: 'button',
        //     text: '支付宝',
        //     link: '/alipay.jpeg'
        //   }
        // ]
      },
    ],
  ],
}
