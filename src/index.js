import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConfigProvider locale={zh_CN}><App /></ConfigProvider>, document.getElementById('root'));

serviceWorker.register();
