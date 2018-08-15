const listSelector = state => state.getIn(['homeReducer', 'list']);

const mapStateToProps = state => ({
  list: listSelector(state)
});

export default mapStateToProps;