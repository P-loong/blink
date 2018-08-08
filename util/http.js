import {
  config
} from '../config.js';

const tips = {
  1: '抱歉，出现了一个错误',
  404: '请求的资源不存在',
  1007: '资源路径不存在或请求的资源不存在',
  1005: '不正确的开发者key'
}

class HTTP {
  // params 传入类方法的对象
  request(params) {
    if (!params.method) {
      params.method = 'GET';
    }
    wx: wx.request({
      // 常用值：url,data,method,
      // 传入 url 后半段需要改变的值：params.url
      url: config.api_base_url + params.url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      method: params.method,
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // 4 开头的异常，在 success 中处理
        let code = String(res.statusCode);
        // startsWith
        // endsWith
        
        if (code.startsWith('2')) {
          params.success && params.success(res.data);
        } else {
          // 服务器异常
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        // api 调用失败
        this._show_error(1);
      },
      complete: function(res) {},
    })
  }

  _show_error(error_code) {
    if(!error_code){
      error_code = 1;
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }

}

export {
  HTTP
}