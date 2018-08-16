import { createSelector } from 'reselect';
import { CHART_LABELS } from './constants';

const listSelector = state => state.getIn(['homeReducer', 'list']);

const chartsDataCreateSelector = createSelector(
  listSelector,
  list => {
    list = list.sort((a, b) => ( a['date'] > b['date']));
    const dates = list.map(item => item.get('date')).toJS();
    const receipts = list.map(item => item.get('receipts')).toJS();
    const price = list.map(item => item.get('price')).toJS();
    const index = list.map(item => item.get('index')).toJS();

    return {
      charts: [
        {
          label: CHART_LABELS.receipts,
          title: 'receipts',
          values: receipts
        },
        {
          label: CHART_LABELS.price,
          title: 'price',
          values: price
        },
        {
          label: CHART_LABELS.index,
          title: 'index',
          values: index
        }
      ],
      dates
    };
  }
);

const mapStateToProps = state => ({
  chartsData: chartsDataCreateSelector(state)
});

export default mapStateToProps;