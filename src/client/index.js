import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from '../components/Header';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
//renderRoutes 渲染多级路由的 matchRoutes 实现路由匹配
import {renderRoutes,matchRoutes} from 'react-router-config';
//hydrate就是表示把服务器端渲染未完成的工作完成，比如说绑定事件。
ReactDOM.hydrate(
  <Provider store={getClientStore()}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>

    ,document.getElementById('root'));