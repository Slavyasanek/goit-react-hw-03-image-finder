import React, { Component } from 'react';

class ImageGalleryItem extends Component {
    state = {}
    render() {
        return (
            <li>
                <img src={this.props.link} alt={this.props.title} />
            </li>
        );
    }
}

export default ImageGalleryItem;