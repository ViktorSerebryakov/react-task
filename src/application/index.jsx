import React, { Component } from 'react';
import PropTypes from 'prop-types';
import immutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import routes from '../routes';
import * as Actions from './actions';
import mapStateToProps from './selectors';
import Navigation from '../components/navigation';
import { Layout, Content } from './style';

class Application extends Component {
  static propTypes = {
    isInitialized: PropTypes.bool,
    menuItems: immutablePropTypes.list.isRequired
  };

  render() {
    const { isInitialized, menuItems } = this.props;
    return(
      <Layout>
        <Content>
        <Switch>
          {routes.map((route, i) =>
            <Route {...route} key={i} />
          )}
        </Switch>
        </Content>
        <Navigation items={menuItems} />
      </Layout>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Application));