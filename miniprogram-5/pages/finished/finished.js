Page({
    data: {
      volunteers: [
        {time: '2023-11-05', hospital: '广州医科大学附属第一医院', volunteerName: '张三'},
        {time: '2023-11-06', hospital: '广州市第六人民医院', volunteerName: '李四'},
        {time: '2023-11-07', hospital: '广州市第三人民医院', volunteerName: '王五'},
        {time: '2023-11-07', hospital: '广州市第三人民医院', volunteerName: '赵六'}
      ]
    },
    onLoad() {
      this.sortVolunteers();
    },
    sortVolunteers() {
      const volunteers = this.data.volunteers;
      volunteers.sort((a, b) => {
        return a.time.localeCompare(b.time);
      });
      this.setData({volunteers});
    }
  })