import * as types from '../action-types';
import axios from 'axios';
export default {
    getHomeList(){
      //返回的一个函数 store.dispatch(action);
      //redux-thunk 中间件 
      return function(dispatch,getState,request){
        //如果是服务器端读数据，则直接访问API服务 器4000
        //如果是客户端，则要访问3000的node服务 器，让node服务 器帮我们访问4000服务器
        return request.get('/api/users').then(function(result){
           let list  = result.data;
           dispatch({
               type:types.SET_HOME_LIST,
               payload:list
           });
        });
      }
    }
}