const db = wx.cloud.database();
const proList = db.collection("projectList");

Page({
  data: {
    name: "",
    msg: "",
    skill: ""
  },
  getName(event){
    this.setData({
      name: event.detail
    })
  },
  getMsg(event){
    this.setData({
      msg: event.detail
    })
  },
  getSkill(event){
    this.setData({
      skill: event.detail
    })
  },
  publish(event){
    proList.add({
      data: {
        name: this.data.name,
        msg: this.data.msg,
        skill: this.data.skill
      }
    })
    .then(res => {
      wx.showToast({
        title: '发布成功',
      })
      this.setData({
        name: "",
        msg: '',
        skill: ''
      })
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }
})