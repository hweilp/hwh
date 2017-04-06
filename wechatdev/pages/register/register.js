// pages/register/register.js
Page({
  data:{
    username:"",
    password:"",
    repPwd:"",    
    tipUser:false,
    tipsUser : false,
    tipDataBase:false,
    tipPwd : false,
    tipsPwd : false,
    tipRepPwd:false
  },
  userChange:function(e){
    var username = e.detail.value;
    this.setData({
      username:username
    })
  },
  pwdChange:function(e){
    var password = e.detail.value;
    this.setData({
      password:password
    })
  },
  repPwdChange:function(e){
    var repPwd = e.detail.value;
    this.setData({
      repPwd:repPwd
    })
  },
  registerCheck:function(){
    var username = this.data.username;
    var password = this.data.password;
    var repPwd = this.data.repPwd;
    if(username == ""){
        this.setData({
            tipUser:false,
            tipsUser : true,
            tipDataBase:false,
            tipPwd : false,
            tipsPwd : false,
            tipRepPwd:false
        })
        return;
    }
    if(password == ""){
        this.setData({
            tipUser:false,
            tipsUser : false,
            tipDataBase:false,
            tipPwd : true,
            tipsPwd : false,
            tipRepPwd:false
        })
        return;        
    }
    if(repPwd == ""){
        this.setData({
            tipUser:false,
            tipsUser : false,
            tipDataBase:false,
            tipPwd : false,
            tipsPwd : true,
            tipRepPwd:false
        })
        return;        
    }
    var that = this;    
    if(password==repPwd){
      this.setData({
        tipRepPwd:false
      })
      wx.request({
        url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
        data: {
          status:"register",
          userID:username,
          password:password
        },
        success: function(res) {
          if(res.data==0){
            that.setData({
                tipUser:true,
                tipsUser : false,
                tipDataBase:false,
                tipPwd : false,
                tipsPwd : true,
                tipRepPwd:false
            })
          }else if(res.data==1){
            that.setData({
                tipUser:false,
                tipsUser : false,
                tipDataBase:false,
                tipPwd : false,
                tipsPwd : false,
                tipRepPwd:false
            })
            wx.showToast({
                title : "注册成功",
                icon : "success",
                duration :1500,
                mask : true
            })     
            wx.navigateBack({
              delta: 1
            })
          }else{
            that.setData({
                tipUser:false,
                tipsUser : false,
                tipDataBase:true,
                tipPwd : false,
                tipsPwd : false,
                tipRepPwd:false
            })           
          }
        }
      })
    }else{
      this.setData({
        tipRepPwd:true
      })
    }
  }
})