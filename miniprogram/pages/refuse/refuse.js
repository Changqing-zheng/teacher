const db = wx.cloud.database();
const applyList = db.collection("applyInterview");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
    thisId: "",
    reason: ''
  },
  onLoad: function (options) {
    this.setData({
      thisId: options.interviewId
    })
    applyList.where({
      _id: options.interviewId
    }).get()
    .then(res => {
      this.setData({
        detail: res.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  refuse(event){
    applyList.doc(this.data.thisId).update({
      data: {
        state: "已拒绝",
        reason: this.data.reason
      }
    })
    .then(res => {
      wx.showToast({
        title: '修改成功',
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  agree(event){
    applyList.doc(this.data.thisId).update({
      data: {
        state: "已同意"
      }
    })
    .then(res => {
      wx.showToast({
        title: '修改成功',
      })
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  },
  getReason(event){
    this.setData({
      reason: event.detail
    })
  }
})