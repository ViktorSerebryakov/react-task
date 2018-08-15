import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import immutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import routes from '../routes';
import * as Actions from './actions';
import mapStateToProps from './selectors';
import Navigation from '../components/navigation';

class Application extends Component {
  static propTypes = {
    isInitialized: PropTypes.bool,
    menuItems: immutablePropTypes.list.isRequired
  };

  render() {
    const { isInitialized, menuItems } = this.props;
    return(
      <div>
        {isInitialized && 'application here'}
        <Switch>
          {routes.map((route, i) =>
            <Route {...route} key={i} />
          )}
        </Switch>
        <Navigation items={menuItems} />
      </div>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Application));