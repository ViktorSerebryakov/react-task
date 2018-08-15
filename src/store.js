import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import applicationSagas from './sagas';
import createReducer from './reducers';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
  sagaMiddleware
];

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  const createLogger = require('redux-logger').createLogger; // eslint-disable-line global-require
  const logger = createLogger({
    level: 'log',
    collapsed: true,
    timestamp: false,
    stateTransformer: state => state && state.toJS(),
    colors: {
      title: ({ type }) => {
        if (/_FAIL$/.test(type)) return '#CC0000';
        return '#007586';
      },
      prevState: () => '#9E9E9E',
      action: () => '#03A9F4',
      nextState: () => '#4CAF50',
      error: () => '#F20404'
    }
  });
  middlewares.push(logger);
}

const finalCreateStore = compose(
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)(createStore);

const configuredStore = finalCreateStore(createReducer({}));

configuredStore.runSaga = sagaMiddleware.run;
configuredStore.injectedReducers = {}; // Async reducer registry
configuredStore.injectedSagas = {}; //Saga registry
configuredStore.runSaga(applicationSagas);

export default configuredStore;