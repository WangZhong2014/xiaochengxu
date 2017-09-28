
Page({
  data: {
    act:['摄影','转让'],
    actIndex: ''
    },
  bindPickerChange: function (e) {
    this.setData({
      actIndex: e.detail.value
    })
  },
  "backgroundColor": "#eaebed",

})