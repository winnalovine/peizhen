const options = [
    {
      text: '广州市',
      value: '330000',
      children: [{ text: '番禺区', value: '330100' },
      { text: '荔湾区', value: '330200' },
      { text: '越秀区', value: '330200' },
      { text: '海珠区', value: '330200' },
      { text: '天河区', value: '330200' },
      { text: '黄埔区', value: '330200' },
      { text: '花都区', value: '330200' },
      { text: '南沙区', value: '330200' },
      { text: '从化区', value: '330200' },
      { text: '南沙区', value: '330200' },
      { text: '增城区', value: '330200' },
      { text: '白云区', value: '330300' }],
      
    },
  ];
  
Page({
    data: {
      fieldshow: false,
      options,
      fieldValue: '',
      cascaderValue: '',
      date: '',
      dateshow: false,
    },
  
    onDisplay() {
      this.setData({ dateshow: true });
    },
    onClose() {
      this.setData({ dateshow: false });
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
      this.setData({
        dateshow: false,
        date: this.formatDate(event.detail),
      });
    },
    onClick() {
        this.setData({
          fieldshow: true,
        });
      },
      onClose() {
        this.setData({
            fieldshowshow: false,
        });
      },
    
      onFinish(e) {
        const { selectedOptions, value } = e.detail;
        const fieldValue = selectedOptions
            .map((option) => option.text || option.name)
            .join('/');
        this.setData({
          fieldValue,
          cascaderValue: value,
        })
        this.setData({fieldshow:false});
      },
  });

  

  