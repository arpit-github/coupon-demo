
import 'promise-polyfill/src/polyfill';
import 'antd/dist/antd.less';
import React from 'react';
import Modal from 'react-modal';
import { render } from 'react-dom';

import './css/main.scss?global';
import App from './js/components/app/app';
import { configureToast } from './js/toast';

configureToast();
Modal.setAppElement('#root');
render(<App />, document.getElementById('root'));
