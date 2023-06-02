import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';
import { getImages } from 'helpers/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
    state = {
        photos: null,
        status: 'idle',
        currentPage: 0,
        maxPage: 0,
    }

    async componentDidUpdate(prevProps, _) {
        console.log(this.state);
        const prevQuery = prevProps.query;
        const newQuery = this.props.query;
        if (prevQuery !== newQuery) {
            this.setState({ status: 'pending' })
            try {
                const images = await getImages(newQuery);
                this.setState(prevState => {
                    return {
                        photos: images.hits,
                        status: 'resolved',
                        maxPage: images.totalHits,
                        currentPage: 1}
                }
                )
            } catch (e) {
                this.setState({ status: 'rejected' })
            }
        }
    }

    loadMore = () => {

    }

    render() {
        const { photos } = this.state
        return (
            <Gallery>
                {photos && photos.map((photo) =>
                    <ImageGalleryItem key={photo.id} link={photo.webformatURL} large={photo.largeImageURL}/>
                )}
            </Gallery>
        );
    }
}

export default ImageGallery;