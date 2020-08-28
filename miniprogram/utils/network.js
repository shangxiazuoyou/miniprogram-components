import { baseURL, timeout } from './configs.js'

let requestTimes = 0;

function request(options) {
  requestTimes++;
  wx.showLoading({
    title: '加载中',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      data: options.data,
      success: function (res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        requestTimes--;
        if (requestTimes === 0) {
          wx.hideLoading()
        }
      }
    })
  })
}

export default request;