const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack:config=>{
    config.plugin('html').tap(args=>{
      args[0].title='My Communication';
      return args;
    });
  },
  pluginOptions:{
    electronBuilder:{
      // webSecurity: false,
      // enableRemoteModule: true,
      // nodeIntegrationInSubFrames: true,
      // contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline';",
      // customFileProtocol: "./",
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      webviewTag: true,
      externals:[
        "axios",
     "core-js",
     "element-ui",
     "textrank-node",
     "vue",
     "vue-chat-scroll",
      ],
      builderOptions:{
        asar:true,
        "productName":"My Communication",
        "appId":"com.Communication_tools.Software",
        "copyright":"vvvVvv",
        "directories":{
          "output":"ChatGpt",
        },
        win:{
          icon:"./src/assets/xiaoxi(1).png",
          "target":[
            {
              "target":"nsis",
            }
          ]
        },
        nsis:{
          perMachine:true,
          allowToChangeInstallationDirectory:true,
          oneClick:false,
          installerIcon:"./src/assets/icon.ico",
          installerHeaderIcon:"./src/assets/icon.ico",
          uninstallerIcon:"./src/assets/icon.ico",
          shortcutName:"My Communication"
        }
      }
    }
  }
})
