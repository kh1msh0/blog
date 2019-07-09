import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'outstated';
import { FetchStrings, GetTopBlogs, GetBlogList, ChangeColor, ShowSearch} from './components/store';


const lang = ['ka', 'en'].includes(localStorage.getItem('language')) ? localStorage.getItem('language') : 'ka';
localStorage.setItem('language', lang);
axios.defaults.headers['Accept-Language'] = lang;



ReactDOM.render(
    <Provider stores={[FetchStrings, GetTopBlogs, GetBlogList, ChangeColor, ShowSearch]}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
