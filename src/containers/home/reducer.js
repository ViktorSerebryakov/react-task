import { fromJS } from 'immutable';
import { ACTIONS } from './constants';

const initialState = fromJS({
  list: [
    {
      date: '09.01.2017',
      receipts: 2861629595.04,
      price: 31.32,
      index: 2211.25
    },
    {
      date: '10.01.2017',
      receipts: 2922007211.53,
      price: 31.68,
      index: 2237.49
    }
    ,{
      date: '11.01.2017',
      receipts: 2900994328.22,
      price: 31.84,
      index: 2218.61
    },
    {
      date: '12.01.2017',
      receipts: 2884689528.14,
      price: 32.23,
      index: 2212
    },
    {
      date: '13.01.2017',
      receipts: 2874244614.66,
      price: 32.12,
      index: 2195.19
    },
  ],
  isMounted: false
});

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.HOME_CONTAINER_MOUNT:
      return state.set('isMounted', true);

    case ACTIONS.HOME_CONTAINER_UNMOUNT:
      return state.set('isMounted', false);

    default:
      return state;
  }
}
