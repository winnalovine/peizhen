Page({
    data: {
      tasks: [{
        id: 1,
        title:"活动1",
        gender:"男",
        location:"番禺区",
        age:"65",
        desc: "任务描述:陪诊是指在就医过程中，有人陪伴患者，给予情感支持和帮助。"
      },{
        id: 2,
        title:"活动2",
        gender:"男",
        location:"天河区",
        age:"65",
        desc: "任务描述:陪诊是指在就医过程中，有人陪伴患者，给予情感支持和帮助。"
      },{
        id: 3,
        title:"活动3",
        gender:"男",
        location:"白云区",
        age:"65",
        desc: "任务描述:陪诊是指在就医过程中，有人陪伴患者，给予情感支持和帮助。"
      },{id: 4,
        title:"活动4",
        gender:"男",
        location:"白云区",
        age:"65",
        desc: "任务描述:陪诊是指在就医过程中，有人陪伴患者，给予情感支持和帮助。"
      },{id: 5,
        title:"活动5",
        gender:"男",
        location:"白云区",
        age:"65",
        desc: "任务描述:陪诊是指在就医过程中，有人陪伴患者，给予情感支持和帮助。"
      }]
    },
    goToDetail: function(e) {
      const index = e.currentTarget.dataset.index;
      const task = this.data.tasks[index];
      wx.navigateTo({
        url: `/pages/task_detail/task_detail?id=${task.id}`,
      });
    }
  });
  