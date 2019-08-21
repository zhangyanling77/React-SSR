import axios from 'axios';
//创建一个axios的实例, 配置baseURL的基准路径
//客户端应该访问300
export default axios.create({
    baseURL:'/'
});
