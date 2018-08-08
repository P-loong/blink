// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      // 千万不要在 observer 使用 setData 修改自身数据
      // 因为 observer 是更新数据再调用自身数据会使本事与组件使用陷入无限递归，造成内存泄漏
      observer:function(newVal, oldVal, changedPath){
        // console.log(arguments);
        // 第一种方法
        // let val = newVal < 10?0+newVal:newVal;
        // this.setData({
        //   _index: val
        // })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月"
    ],
    year: 0,
    mouth: '',
    _index: ''
  },

  // 组件生命周期函数，在组件实例进入页面节点树时执行
  attached:function(){
    // console.log(this.properties)
    // console.log(this.data)
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    this.setData({
      year: year,
      mouth: this.data.months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
