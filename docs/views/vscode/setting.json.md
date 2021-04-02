 
https://www.jb51.net/article/186209.htm











{// 是否允许自定义的snippet片段提示
 "editor.snippetSuggestions": "top",
 // vscode默认启用了根据文件类型自动设置tabsize的选项
 "editor.detectIndentation": false,
 // 重新设定tabsize
 "editor.tabSize": 2,
 // #每次保存的时候自动格式化 
 "editor.formatOnSave": false,
 // #每次保存的时候将代码按eslint格式进行修复
 "eslint.autoFixOnSave": true,
 "editor.fontWeight": "400",
 "editor.formatOnType": false,
 "workbench.iconTheme": "material-icon-theme",
 "git.confirmSync": false,
 "team.showWelcomeMessage": false,
 "window.zoomLevel": 0,
 "editor.renderWhitespace": "boundary",
 "editor.cursorBlinking": "smooth",
 "editor.minimap.enabled": true,
 "editor.minimap.renderCharacters": false,
 "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
 "editor.codeLens": true,
 //eslint 代码自动检查相关配置
 "eslint.enable": true,
 "eslint.run": "onType",
 "eslint.options": {
 "extensions": [
  ".js",
  ".vue"
 ]
 },
 // 添加 vue 支持
 "eslint.validate": [
 "javascriptreact",
 "vue",
 "javascript",
 {
  "language": "vue",
  "autoFix": true
 },
 "html",
 {
  "language": "html",
  "autoFix": true
 }
 ],
 // #让prettier使用eslint的代码格式进行校验 
 "prettier.eslintIntegration": true,
 // #去掉代码结尾的分号 
 "prettier.semi": false,
 // #使用带引号替代双引号 
 "prettier.singleQuote": true,
 // #让函数(名)和后面的括号之间加个空格
 "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
 // #这个按用户自身习惯选择 
 "vetur.format.defaultFormatter.html": "js-beautify-html",
 // #让vue中的js按编辑器自带的ts格式进行格式化 
 "vetur.format.defaultFormatter.js": "vscode-typescript",
 "explorer.confirmDelete": false,
 "vetur.format.defaultFormatterOptions": {
 "js-beautify-html": {
  "wrap_attributes": "force-aligned"
  // #vue组件中html代码格式化样式
 }
 },
 // 格式化stylus, 需安装Manta's Stylus Supremacy插件
 "stylusSupremacy.insertColons": false, // 是否插入冒号
 "stylusSupremacy.insertSemicolons": false, // 是否插入分好
 "stylusSupremacy.insertBraces": false, // 是否插入大括号
 "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
 "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
 "files.associations": {
 "*.cjson": "jsonc",
 "*.wxss": "css",
 "*.wxs": "javascript"
 },
 "emmet.includeLanguages": {
 "wxml": "html"
 },
 "minapp-vscode.disableAutoConfig": true,
 "window.menuBarVisibility": "visible",
 "git.enableSmartCommit": true,
 "git.autofetch": true,
 "liveServer.settings.donotShowInfoMsg": true,
 "[html]": {
 "editor.defaultFormatter": "vscode.html-language-features"
 },
 "javascript.updateImportsOnFileMove.enabled": "always",
 "workbench.colorTheme": "SynthWave '84",
 "editor.fontSize": 18,
 "search.followSymlinks": false,
 "workbench.sideBar.location": "right",
 "vscode_custom_css.policy": true,
 "vscode_custom_css.imports": [
 "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/synthwave84.css",
 "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/toolbar.css",
 "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/vscode-vibrancy-style.css",
 "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/enable-electron-vibrancy.js",
 ],
 // 高亮的颜色，emm暂时只支持这样写
 "wxmlConfig.activeColor": {
 "color": "#e5c07b"
 },
 // 是否禁用高亮组件
 "wxmlConfig.activeDisable": false,
 // 是否开启保存自动格式化
 "wxmlConfig.onSaveFormat": false,
 "wxmlConfig.format": {
 "brace_style": "collapse",
 "end_with_newline": false,
 "indent_char": "",
 "indent_handlebars": false,
 "indent_inner_html": false,
 "indent_scripts": "keep",
 "indent_size": 2,
 "indent_with_tabs": true,
 "max_preserve_newlines": 1,
 "preserve_newlines": true,
 "wrap_attributes": "force-expand-multiline"
 },
 // 高亮所忽略的组件数组
 "wxmlConfig.tagNoActiveArr": [
 "view",
 "button",
 "text",
 "icon",
 "image",
 "navigator",
 "block",
 "input",
 "template",
 "form",
 "camera",
 "textarea"
 ],
 "zenMode.restore": true,
 "breadcrumbs.enabled": true,
 "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
 "[wxml]": {
 "editor.defaultFormatter": "qiu8310.minapp-vscode"
 },
 "gitlens.advanced.messages": {
 "suppressLineUncommittedWarning": true
 },
 "javascript.format.placeOpenBraceOnNewLineForControlBlocks": true,
 "editor.formatOnPaste": false,
 "vsicons.presets.hideFolders": true,
 "editor.cursorStyle": "line-thin"
}











{
 // 換行
 "editor.wordWrap": "on",
 // 是否允许自定义的snippet片段提示
 "editor.snippetSuggestions": "top",
 // vscode默认启用了根据文件类型自动设置tabsize的选项 不檢查縮進，保存后統一按設置項來設置
 "editor.detectIndentation": false,
 // 重新设定tabsize 代码缩进修改成4个空格
 "editor.tabSize": 2,
 // #每次保存的时候自动格式化
 "editor.formatOnSave": false,
 // #每次保存的时候将代码按eslint格式进行修复 使用eslint 風格使用standard 進行代碼規則限制
 "editor.fontWeight": "200",
 "editor.formatOnType": false,
 "workbench.iconTheme": "material-icon-theme",
 "git.confirmSync": false,
 "team.showWelcomeMessage": false,
 "window.zoomLevel": 0,
 "editor.renderWhitespace": "boundary",
 "editor.cursorBlinking": "smooth",
 "editor.minimap.enabled": true,
 "editor.minimap.renderCharacters": false,
 "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
 "editor.codeLens": true,
 //eslint 代码自动检查相关配置
 "eslint.enable": true,
 "eslint.run": "onType",
 "eslint.options": {
 "configFile": "D:/.eslintrc.js",
 "plugins": ["html"],
 "extensions": [
  ".js",
  ".vue"
 ]
 },
 "eslint.validate": [
 "javascript",
 "javascriptreact",
 "html",
 "vue"
],
 // #让prettier使用eslint的代码格式进行校验
 "prettier.eslintIntegration": true,
 // #去掉代码结尾的分号
 "prettier.semi": true,
 // #使用带引号替代双引号
 "prettier.singleQuote": true,
 // #让函数(名)和后面的括号之间加个空格
 "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
 // #这个按用户自身习惯选择 html格式化
 "vetur.format.defaultFormatter.html": "js-beautify-html",
 // #让vue中的js按编辑器自带的ts格式进行格式化
 "vetur.format.defaultFormatter.js": "vscode-typescript",
 "explorer.confirmDelete": false,
 "vetur.format.defaultFormatterOptions": {
 "js-beautify-html": {
  "wrap_attributes": "force-aligned"
  // #vue组件中html代码格式化样式
 }
 },
 // 格式化stylus, 需安装Manta's Stylus Supremacy插件
 "stylusSupremacy.insertColons": false, // 是否插入冒号
 "stylusSupremacy.insertSemicolons": false, // 是否插入分好
 "stylusSupremacy.insertBraces": false, // 是否插入大括号
 "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
 "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
 "files.associations": {
 "*.cjson": "jsonc",
 "*.wxss": "css",
 "*.wxs": "javascript"
 },
 "emmet.includeLanguages": {
 "wxml": "html"
 },
 "minapp-vscode.disableAutoConfig": true,
 "window.menuBarVisibility": "visible",
 "git.enableSmartCommit": true,
 "git.autofetch": true,
 "liveServer.settings.donotShowInfoMsg": true,
 "[html]": {
 "editor.defaultFormatter": "vscode.html-language-features"
 },
 "javascript.updateImportsOnFileMove.enabled": "always",
 "workbench.colorTheme": "Default Dark+",
 // 字體大小
 "editor.fontSize": 15,
 // 設置行高
 "editor.lineHeight": 20,
 "search.followSymlinks": false,
 "workbench.sideBar.location": "right",
 "vscode_custom_css.policy": true,
 "vscode_custom_css.imports": [
 "file:///C:/vscode-transparent-glow/synthwave84.css",
 "file:///C:/vscode-transparent-glow/toolbar.css",
 "file:///C:/vscode-transparent-glow/vscode-vibrancy-style.css",
 "file:///C:/vscode-transparent-glow/enable-electron-vibrancy.js"
 ],
 // 高亮的颜色，emm暂时只支持这样写
 "wxmlConfig.activeColor": {
 "color": "#e5c07b"
 },
 // 是否禁用高亮组件
 "wxmlConfig.activeDisable": false,
 // 是否开启保存自动格式化
 "wxmlConfig.onSaveFormat": false,
 "wxmlConfig.format": {
 "brace_style": "collapse",
 "end_with_newline": false,
 "indent_char": "",
 "indent_handlebars": false,
 "indent_inner_html": false,
 "indent_scripts": "keep",
 "indent_size": 2,
 "indent_with_tabs": false,
 "max_preserve_newlines": 1,
 "preserve_newlines": false,
 "wrap_attributes": "force-expand-multiline"
 },
 // 高亮所忽略的组件数组
 "wxmlConfig.tagNoActiveArr": [
 "view",
 "button",
 "text",
 "icon",
 "image",
 "navigator",
 "block",
 "input",
 "template",
 "form",
 "camera",
 "textarea"
 ],
 "zenMode.restore": true,
 "breadcrumbs.enabled": true,
 "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
 "[wxml]": {
 "editor.defaultFormatter": "qiu8310.minapp-vscode"
 },
 "gitlens.advanced.messages": {
 "suppressLineUncommittedWarning": true
 },
 "javascript.format.placeOpenBraceOnNewLineForControlBlocks": true,
 "editor.formatOnPaste": false,
 "vsicons.presets.hideFolders": true,
 "editor.cursorStyle": "line-thin",
 "editor.suggestSelection": "first",
 "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
 "editor.codeActionsOnSave": {
 "source.fixAll.eslint": true
 },
 "terminal.integrated.rendererType": "dom",
 "vscode_vibrancy.opacity": 0.5
}






{
  // 是否允许自定义的snippet片段提示
  // "editor.snippetSuggestions": "top",
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化 
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  "editor.fontWeight": "400",
  "editor.formatOnType": false,
  "workbench.iconTheme": "material-icon-theme",
  "git.confirmSync": false,
  "team.showWelcomeMessage": false,
  "window.zoomLevel": 0,
  // "editor.renderWhitespace": "boundary",//代码前面空格加...
  "editor.cursorBlinking": "smooth",
  "editor.minimap.enabled": true,
  "editor.minimap.renderCharacters": false,
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  "editor.codeLens": true,
  //eslint 代码自动检查相关配置
  "eslint.enable": false,
  "eslint.run": "onType",
  "eslint.options": {
    "extensions": [
      ".js",
      ".vue"
    ]
  },
  // 添加 vue 支持
  "eslint.validate": [
    "javascriptreact",
    "vue",
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "html",
    {
      "language": "html",
      "autoFix": true
    }
  ],
  //  #让prettier使用eslint的代码格式进行校验 
  "prettier.eslintIntegration": false,
  //  #去掉代码结尾的分号 
  "prettier.semi": false,
  //  #使用带引号替代双引号 
  "prettier.singleQuote": false,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择 
  // "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化 
  // "vetur.format.defaultFormatter.js": "vscode-typescript",
  "explorer.confirmDelete": false,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_line_length": 120,
      "wrap_attributes": "auto",
      "end_with_newline": false
    }
  },
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分好
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    // "*.vue": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "window.menuBarVisibility": "visible",
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.colorTheme": "SynthWave '84",
  "search.followSymlinks": false,
  // "workbench.sideBar.location": "right",
  "vscode_custom_css.policy": true,
  "vscode_custom_css.imports": [
    "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/synthwave84.css",
    "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/toolbar.css",
    "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/vscode-vibrancy-style.css",
    "file:///C:/Users/wongseedling/Desktop/vscode-transparent-glow/enable-electron-vibrancy.js",
  ],
  // 高亮的颜色，emm暂时只支持这样写
  "wxmlConfig.activeColor": {
    "color": "#e5c07b"
  },
  // 是否禁用高亮组件
  "wxmlConfig.activeDisable": false,
  // 是否开启保存自动格式化
  "wxmlConfig.onSaveFormat": false,
  "wxmlConfig.format": {
    "brace_style": "collapse",
    "end_with_newline": false,
    "indent_char": "",
    "indent_handlebars": false,
    "indent_inner_html": false,
    "indent_scripts": "keep",
    "indent_size": 2,
    "indent_with_tabs": true,
    "max_preserve_newlines": 1,
    "preserve_newlines": true,
    "wrap_attributes": "force-expand-multiline"
  },
  // 高亮所忽略的组件数组
  "wxmlConfig.tagNoActiveArr": [
    "view",
    "button",
    "text",
    "icon",
    "image",
    "navigator",
    "block",
    "input",
    "template",
    "form",
    "camera",
    "textarea"
  ],
  "emmet.showAbbreviationSuggestions": true,
  "emmet.showExpandedAbbreviation": "always",
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "wxml": "html",
    "vue-html": "html",
    "vue": "html"
  },
  "zenMode.restore": true,
  "breadcrumbs.enabled": true,
  "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "[wxml]": {
    "editor.defaultFormatter": "qiu8310.minapp-vscode"
  },
  "gitlens.advanced.messages": {
    "suppressLineUncommittedWarning": true
  },
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": true,
  "editor.formatOnPaste": false,
  "vsicons.presets.hideFolders": true,
  "editor.cursorStyle": "line-thin",
   "background.enabled": true,
"background.useDefault": false,
"background.customImages": [
"file:///D:/images/ff.jpg"
],
"background.style": {
"content": "''",
"pointer-events": "none",
"position": "absolute",
"z-index": "99999",
"width": "100%",
"height": "100%",
"background-position": "center",
"background-repeat": "no-repeat",
"background-size": "100%,100%",
"opacity": 0.1
},
}```



