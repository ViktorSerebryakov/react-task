const initSelector = state => state.getIn(['application', 'isInitialized']);

const mapStateToProps = state => ({
  isInitialized: initSelector(state)
});

export default mapStateToProps;