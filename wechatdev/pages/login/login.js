Page({
    data : {
        username : "",
        password : "",
        tipUser : false,
        tipsUser : false,
        tipPwd : false,
        tipsPwd : false
    },
    toReg : function(){
        console.log("register");
        wx.navigateTo({
            url : '../register/register'
        })
    },
    userChange : function(e){
        var username = e.detail.value;
        this.setData({
            username : username
        })
    },
    pwdChange : function(e){
        var password = e.detail.value;
        this.setData({
            password : password
        })
    },
    loginCheck : function(){
        var that = this;
        var username = this.data.username;
        var pwd = this.data.password;
        var tipUser = this.data.tipUser;
        var tipPwd = this.data.tipPwd;
        var tipsUser = this.data.tipsUser;
        var tipsPwd = this.data.tipsPwd;
        if(username == ""){
           this.setData({
                tipUser : false,
                tipsUser : true,
                tipPwd  : false,
                tipsPwd  : false
           })        
            return;
        }
        if(pwd == ""){
            this.setData({
                tipUser : false,
                tipsUser : false,
                tipPwd  : false,
                tipsPwd  : true
            })           
            return;
        }
        wx.request({
          url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
          data: {
              status : "login",
              userID : username,
              password : pwd
          },
          success: function(res){
              console.log(res);
            if(res.data == 2){
                that.setData({
                    tipPwd : true,
                    tipUser : false,
                    tipsUser : false,
                    tipsPwd  : false
                })
            }else if(res.data == 0){
                that.setData({
                    tipPwd : false,
                    tipsUser : false,
                    tipsPwd  : false,
                    tipUser : true
                })
            }else{
                that.setData({
                    tipUser : false,
                    tipPwd : false,
                    tipsUser : false, 
                    tipsPwd  : false
                    
                })
                var appInstance = getApp();
                appInstance.globalData.username = username;
                wx.showToast({
                    title : "登陆成功",
                    icon : "success",
                    duration :1500,
                    mask : true,
                    success : function(){
                        setTimeout(function(){
                            wx.switchTab({
                                url: '../home/home'
                            }) 
                        },1500)
                        
                    }
                })                 
            }
          }
        })
    }
})