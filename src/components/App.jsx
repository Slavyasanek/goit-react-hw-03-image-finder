import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './Container/Container';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {}
  render() {
    return (
      <>
        <Searchbar />
        <Container>
          <ImageGallery>

          </ImageGallery>
        </Container>
      </>
    );
  }
}

export default App;
