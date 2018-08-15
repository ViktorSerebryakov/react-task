import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter as ReduxRouter } from 'react-router-redux';
import Application from './application';
import history from './history';
import store from './store';

function initApp() {
  renderApp();
}

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ReduxRouter history={history}>
          <Application />
        </ReduxRouter>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#Application')
  );
}

window.__INIT_APPLICATION__ = () => {
  initApp();
};

document.addEventListener('DOMContentLoaded', window.__INIT_APPLICATION__);
