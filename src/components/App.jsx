import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './Container/Container';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isShowModal: false,
    searchText: '',
    largeImage: ''
  }

  handleSearch = (searchText) => {
    this.setState({
      searchText: searchText
    })
  }

  openModal = (url) => {
    this.setState({largeImage: url, isShowModal: true})
  }

  closeModal = e => {
    this.setState({largeImage: null, isShowModal: false})
  }

  render() {
    const {searchText, isShowModal, largeImage} = this.state
    
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        <Container>
          <ImageGallery query={searchText} openLarge={this.openModal}/>
        </Container>
        {isShowModal && <Modal closeModal={this.closeModal} largeImage={largeImage}/>}
      </>
    );
  }
}

export default App;
