// plugin/components/wx-swiper-tab/wx-swiper-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [
        "流行", "新款", "精选"
      ]
    },
    currentTab: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchNav: function (e) {
      var that = this;
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
    },
    bindChange: function (e) {
      var that = this;
      that.setData({ currentTab: e.detail.current });
    }
  }
})
