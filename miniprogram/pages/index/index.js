const db = wx.cloud.database();
const applyList = db.collection("applyInterview");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    interviewList: []
  },
  onLoad: function (options) {
    applyList.get().then(res => {
      this.setData({
        interviewList: res.data
      })
    })
    .catch(error => [
      console.log(error)
    ])
  },
  toRefuse(event){
    wx.navigateTo({
      url: '../refuse/refuse?interviewId=' + event.target.dataset.interviewid,
    })
  },
  toPublish(event){
    wx.navigateTo({
      url: '../publish/publish',
    })
  }
})