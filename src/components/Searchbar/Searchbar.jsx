import React, { Component } from 'react';
import { Header, SearchBtn, SearchForm, SearchInput } from './Searchbar.styled';
import {BsFillSearchHeartFill} from 'react-icons/bs'

const INITIAL_STATE = {
    searchValue: ''
}

class Searchbar extends Component {
    state = {
        ...INITIAL_STATE
    }
    handleSubmit = e => {
        e.preventDefault();
        this.reset();
    }
    handleChange = ({target: {value}}) => {
        this.setState({
            searchValue: value
        })
    }
    reset = () => {
        this.setState({...INITIAL_STATE})
    }
    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.searchValue}
                    />
                    <SearchBtn type="submit">
                        <BsFillSearchHeartFill/>
                    </SearchBtn>
                </SearchForm>
            </Header>
        );
    }
}

export default Searchbar;