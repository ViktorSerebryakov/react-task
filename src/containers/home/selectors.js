import { createSelector } from  'reselect';
import { getFormattedAmount } from '../../utils';

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

const mapStateToProps = state => ({
  list: listCreateSelector(state),
  form: formSelector(state)
});

export default mapStateToProps;