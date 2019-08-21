import axios from 'axios';
//创建一个axios的实例, 配置baseURL的基准路径
//服务 器端访问的话是访问的 4000
export default (req)=>axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        cookie:req.get('cookie')||''
    }
});
