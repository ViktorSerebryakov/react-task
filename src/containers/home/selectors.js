import { createSelector } from  'reselect';
import { getFormattedAmount } from '../../utils';
import { LIST_HEADERS } from './constants';

const listSelector = state => state.getIn(['homeReducer', 'list']);
const sortBySelector = state => state.getIn(['homeReducer', 'sortBy']);
const formSelector = state => state.getIn(['homeReducer', 'form']);

const listCreateSelector = createSelector(
  listSelector,
  sortBySelector,
  (list, id) => {
    let newList = list.map(item => ({
      date: item.get('date'),
      receipts: getFormattedAmount(item.get('receipts')),
      price: getFormattedAmount(item.get('price')),
      index: getFormattedAmount(item.get('index'))
    }));

    if(id) {
      newList = newList.sort((a, b) => ( a[id] > b[id]));
    }

    return newList;
  }
);

const csvDataCreateSelector = createSelector(
  listSelector,
  list => {
    const dates = list.map(item => item.get('date')).toJS();
    const receipts = list.map(item => item.get('receipts')).toJS();
    const prices = list.map(item => item.get('price')).toJS();
    const index = list.map(item => item.get('index')).toJS();

    return [
      LIST_HEADERS,
      dates,
      receipts,
      prices,
      index
    ];
  }
);

const mapStateToProps = state => ({
  list: listCreateSelector(state),
  form: formSelector(state),
  csvData: csvDataCreateSelector(state)
});

export default mapStateToProps;