const themeConfig = require('./config/theme/')

module.exports = {
  title: "面朝大海，春暖花开",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'docs/.vuepress/dist',  // 设置输出目录
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  