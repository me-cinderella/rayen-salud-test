import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Routes from 'routes';
import rootReducer from 'reducers';
import getTutorials from 'actions/fetchActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/main.css';

rootReducer.dispatch(getTutorials())

ReactDOM.render(
  <Provider store={rootReducer}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
