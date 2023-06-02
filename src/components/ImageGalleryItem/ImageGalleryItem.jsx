import React, { Component } from 'react';
import { Item } from './ImageGalleryItem.styled';
import { ImageWrapper, Image } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
    state = {}
    render() {
        return (
            <Item>
                <ImageWrapper>
                    <Image src={this.props.link} alt={this.props.title} data-large={this.props.large} />
                </ImageWrapper>
            </Item>
        );
    }
}

export default ImageGalleryItem;