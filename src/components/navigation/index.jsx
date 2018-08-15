import React, { Component } from 'react';
import PropTypes from 'prop-types';
import immutablePropTypes from 'react-immutable-proptypes';
import {
  NavigationWrapper,
  ItemBox,
  BurgerBox
} from './style';

class Navigation extends Component {
  static propTypes = {
    items: immutablePropTypes.list.isRequired
  };

  state = {
    active: false
  };

  render() {
    const { items } = this.props;
    const buttons = items.map(item => <ItemBox key={item.get('id')}>{item.get('title')}</ItemBox>);
    return(
      <NavigationWrapper>
        <BurgerBox>Open menu</BurgerBox>
        {buttons}
      </NavigationWrapper>
    )
  }
}

export default Navigation;