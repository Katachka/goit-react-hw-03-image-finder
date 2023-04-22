import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Form, FormButton, FormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

class Searchbar extends Component {
  state = {
    inputData: '',
  };
  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputData);
    this.setState({ inputData: '' });
  };

  render() {
    const { inputData } = this.state.inputData;
    return (
      <Header >
        <Form  onSubmit={this.handleSubmit}>
          <FormButton type="submit" >
            <ImSearch size={25} />
          </FormButton>

          <FormInput
           name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};