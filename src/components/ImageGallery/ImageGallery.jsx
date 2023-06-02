import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
    state = {  } 

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchValue !== this.props.searchValue) {
            //
        }
    }
    render() { 
        return (
            <Gallery>
            {this.props.children}
          </Gallery>
      );
    }
}
 
export default ImageGallery;