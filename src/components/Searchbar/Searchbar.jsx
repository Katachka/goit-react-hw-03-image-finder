import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Header, Form, FormButton, FormInput } from './Searchbar.styled';

export const Searchbar = class Searchbar extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    state = {
        query: '',
    };

    onChangeInput = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase() });
    };

    onSubmitForm = e => {
        e.preventDefault();

        const { onSubmit } = this.props;
        const { query } = this.state;

        if (query.trim() === '') {
        toast.error('Enter a search term.');
        return;
        }

        onSubmit(query);
    };

    render() {
        const { query } = this.state;

        return (
            <Header>
                <Form onSubmit={this.onSubmitForm}>
                <FormButton type="submit">
                    <ImSearch size={25} />
                </FormButton>

                <FormInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={this.onChangeInput}
                />
                </Form>
            </Header>
        );
    }
}