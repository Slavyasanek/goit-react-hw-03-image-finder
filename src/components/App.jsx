import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './Container/Container';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    isShowModal: false,
    searchText: ''
  }

  handleSearch = (searchText) => {
    this.setState({
      searchText: searchText
    })
  }
  render() {
    const {searchText} = this.state
    
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <Container>
          <ImageGallery query={searchText}>

          </ImageGallery>
        </Container>
      </>
    );
  }
}

export default App;
