import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import immutablePropTypes from 'react-immutable-proptypes';
import {
  NavigationWrapper,
  ItemBox,
  HeadButtonBox
} from './style';

class Navigation extends Component {
  static propTypes = {
    items: immutablePropTypes.list.isRequired
  };

  state = {
    active: false
  };

  onToggleMenu = () => {
    this.setState({
      active: !this.state.active
    })
  };

  render() {
    const { items } = this.props;
    const { active } = this.state;
    const buttons = items.map(item =>
      <ItemBox onClick={this.onToggleMenu} key={item.get('id')}>
        <Link to={item.get('route')}>{item.get('title')}</Link>
        </ItemBox>);
    return(
      <NavigationWrapper active={active}>
        <HeadButtonBox active={active} onClick={this.onToggleMenu} />
        {buttons}
      </NavigationWrapper>
    )
  }
}

export default Navigation;