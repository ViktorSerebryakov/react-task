import React, { Component, Fragment } from 'react';
import immutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {CSVLink, CSVDownload} from 'react-csv';
import * as Actions from './actions';
import mapStateToProps from './selectors';
import Input from '../../components/input';
import {
  Wrapper,
  Row,
  Cell,
  CellHeader,
  FormWrapper,
  Button,
  ButtonWrapper
} from './style';

class Home extends Component {
  static propTypes = {
    list: immutablePropTypes.list.isRequired,
    form: immutablePropTypes.map.isRequired,
    csvData: PropTypes.array.isRequired,

    mountAction: PropTypes.func.isRequired,
    sortAction: PropTypes.func.isRequired,
    onChangeAction: PropTypes.func.isRequired,
    addDataAction: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.mountAction();
  }

  sortTable = (id) => {
    this.props.sortAction(id);
  };

  renderTable = () => {
    const { list } = this.props;

    const rows = list.map(item => <Row>
      <Cell width="25%">{item.date}</Cell>
      <Cell width="25%">{item.receipts}</Cell>
      <Cell width="25%">{item.price}</Cell>
      <Cell width="25%">{item.index}</Cell>
    </Row>);
    return(
      <Fragment>
        <Row>
          <CellHeader width="25%" onClick={() => (this.sortTable('date'))}>Дата</CellHeader>
          <CellHeader width="25%" onClick={() => (this.sortTable('receipts'))}>Выручка</CellHeader>
          <CellHeader width="25%" onClick={() => (this.sortTable('price'))}>серебро руб</CellHeader>
          <CellHeader width="25%" onClick={() => (this.sortTable('index'))}>Индекс ММВБ</CellHeader>
        </Row>
        {rows}
      </Fragment>
    )
  };

  renderForm = () => {
    const { form, addDataAction, csvData } = this.props;
    return(
      <FormWrapper>
        <Row>
          <CellHeader width="25%">Дата</CellHeader>
          <CellHeader width="25%">Выручка</CellHeader>
          <CellHeader width="25%">серебро руб</CellHeader>
          <CellHeader width="25%">Индекс ММВБ</CellHeader>
        </Row>
        <Row>
          <Cell width="25%">
            <Input id="date" value={form.get('date')} type="date" onChange={this.props.onChangeAction} />
          </Cell>
          <Cell width="25%">
            <Input id="receipts" value={form.get('receipts')} type="number" onChange={this.props.onChangeAction} />
          </Cell>
          <Cell width="25%">
            <Input id="price" value={form.get('price')} type="number" onChange={this.props.onChangeAction} />
          </Cell>
          <Cell width="25%">
            <Input id="index" value={form.get('index')} type="number" onChange={this.props.onChangeAction} />
          </Cell>
        </Row>
        <ButtonWrapper>
            <Button onClick={addDataAction}>Добавить</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button>
            <CSVLink data={csvData}>Скачать в csv</CSVLink>
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    )
  };

  render() {

    return(
      <Wrapper>
        {this.renderForm()}
        {this.renderTable()}
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
