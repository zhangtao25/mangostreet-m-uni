let serviceHostConfig = {
  // 在这里可以像在vue.config.js里配置代理一样配置，可以配置重写规则，域名地址
  // 注：target应为host地址+端口，不应该带路由
  '/api': {
    target: 'http://localhost:8000',
    ws: false,
    changeOrigin: true,
    pathRewrite: {
      '/api': ''
    }
  }
}


function handleUrl(url, serviceHostConfig) {
  function handle(url) {
    for (let key in serviceHostConfig) {
      if (url.includes(key)) {
        return serviceHostConfig[key]['target'] + url.replace(key, serviceHostConfig[key]['pathRewrite'][key])
      }
    }
  }

  if (handle(url) === undefined) {
    return url
  } else {
    return handle(url)
  }
}


const unirequest = (option) => {
  option.url = handleUrl(option.url, serviceHostConfig)
  uni.request(option)
}

function request(option) {
  return new Promise((resolve, reject) => {
    unirequest({
      ...option,
      ...{
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      }
    })
  })
}

export default request


