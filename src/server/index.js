import render from './render';
let express = require('express');
import proxy from 'express-http-proxy';
let app = express();
app.use(express.static('public'));
//如果说访问的路径是以/api开头的，会交给代理服务器处理
// /api/users => http://127.0.0.1:4000/api/users
app.use('/api',proxy('http://127.0.0.1:4000',{
  proxyReqPathResolver(req){
    return `/api${req.url}`;
  }
}));
// /api/users
app.get('*',function(req,res){
  render(req,res);
});
app.listen(3000,function(){
    console.log('server started at port 3000');
});