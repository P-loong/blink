// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type: Boolean, // 必填值
      value: false,  // value(选填值) 默认值为 false
      observer:function(){ // 选填函数

      }
    },
    count: {
      type: Number // 默认值为 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // lick: false,
    // count: 9,
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;
      
      count = like?count-1:count+1;
      this.setData({
        count: count,
        like: !like
      })
      // 激活
      let behavior = this.properties.like?"like":"cancel";
      this.triggerEvent('like',{
        behavior
      },{})
    }
  }
})
