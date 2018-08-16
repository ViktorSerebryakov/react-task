import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledInput,
  InputWrapper
} from './style';

class Input extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  state = {
    value: this.props.value
  };

  // inputNode = React.createRef();

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      value
    });
    this.props.onChange({ id: this.props.id, value });
  };

  render() {
    const { type, placeholder } = this.props;
    return(
      <InputWrapper>
        <StyledInput
          type={type}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </InputWrapper>
    )
  }
}

export default Input;