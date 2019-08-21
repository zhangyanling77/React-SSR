let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
  saveUninitialized:true,
  resave:true,
  secret:'zfpx'
}));
let users = [{id:1,name:'zfjg1'},{id:2,name:'zfjg2'}];
app.get('/api/users',function(req,res){
  res.json(users);
});
app.post('/api/login',function(req,res){
  let user = req.body;
  req.session.user = user;
  res.json({
    code:0,
    data:{
      user,
      success:'登录成功!'
    }
  });
});
app.get('/api/logout',function(req,res){
  req.session.user = null;
  res.json({
    code:0,
    data:{
      success:'退出成功!'
    }
  });
});
app.get('/api/user',function(req,res){
  let user = req.session.user;
  if(user){
    res.json({
      code:0,
      data:{
        success:'获取用户信息成功!',
        user
      }
    });
  }else{
    res.json({
      code:1,
      data:{
        error:'用户未登录!'
      }
    });
  }
 
});
app.listen(4000);