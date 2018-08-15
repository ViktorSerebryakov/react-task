import { combineReducers } from 'redux-immutable';
import { application } from './application/reducers';
import { routing } from './application/reducers/routing';
import { homeReducer } from './containers/home/reducer';

export default function createReducer(injectedReducers) {

  return combineReducers({
    routing,
    application,
    homeReducer,
    ...injectedReducers
  });
}
