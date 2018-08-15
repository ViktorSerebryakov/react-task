const initSelector = state => state.getIn(['application', 'isInitialized']);
const menuItemsSelector = state => state.getIn(['application', 'menuItems']);

const mapStateToProps = state => ({
  isInitialized: initSelector(state),
  menuItems: menuItemsSelector(state)
});

export default mapStateToProps;