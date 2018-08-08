// 数据的提交

import {HTTP} from '../util/http.js';
class ClassicModel extends HTTP{
  // 
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      success: (res) => {
        // 把请求到的数据放入 getLatest 参数里的 sCallback 函数中
        sCallback(res)
      }
    })
  }
}

export {
  ClassicModel
}