import { combineReducers } from 'redux-immutable';
import { application } from './application/reducers';
import { routing } from './application/reducers/routing';

export default function createReducer(injectedReducers) {

  return combineReducers({
    routing,
    application,
    ...injectedReducers
  });
}
