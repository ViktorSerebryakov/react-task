import React, { Component } from 'react';
import immutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from './actions';
import mapStateToProps from './selectors';
import { Wrapper, Row, Cell } from './style';

class Home extends Component {
  static propTypes = {
    list: immutablePropTypes.list.isRequired,

    mountAction: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.mountAction();
  }

  render() {
    const { list } = this.props;
    const rows = list.map(item => <Row>
      <Cell width="25%">{item.get('date')}</Cell>
      <Cell width="25%">{item.get('receipts')}</Cell>
      <Cell width="25%">{item.get('price')}</Cell>
      <Cell width="25%">{item.get('index')}</Cell>
    </Row>);
    return(
      <Wrapper>
        {rows}
      </Wrapper>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    ...Actions,
  }
)(Home);
