import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './vendor/normalize.css';
import './vendor/fonts.css'
import './index.sass';
import { HashRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* HashRouter использован для корректного отображения в ghpage */}
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
