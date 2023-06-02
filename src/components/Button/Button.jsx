import React, { Component } from 'react';
import { LoadButton } from './Button.styled';
import PropTypes from 'prop-types';
import {AiFillFileImage} from 'react-icons/ai';

class Button extends Component {
    state = {  } 

    static propTypes = {
        LoadMore: PropTypes.func
    }
    render() { 
        return (
            <>
            <LoadButton type="button" onClick={this.props.loadMore}>Load more <AiFillFileImage/></LoadButton>
            </>
        );
    }
}
 
export default Button;