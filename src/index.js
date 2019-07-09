import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'outstated';
import { FetchStrings, GetTopBlogs, GetBlogList, ChangeColor, ShowSearch} from './components/store';



ReactDOM.render(
    <Provider stores={[FetchStrings, GetTopBlogs, GetBlogList, ChangeColor, ShowSearch]}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
