import React, { Component } from 'react';
import { ModalImage, ModalWrapper, Overlay } from './Modal.styled';

class Modal extends Component {
    state = {  } 

    closeModalByEsc = (e) => {
        if(e.code === 'Escape') {
            this.props.closeModal();
        }
    }
    closeModalByOverlay = e => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    }
    componentDidMount() {
        window.addEventListener("keydown", this.closeModalByEsc);
        document.body.style.overflow = 'hidden'
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.closeModalByEsc);
        document.body.style.overflow = 'unset'
    }
    render() { 
        return (
        <Overlay onClick={this.closeModalByOverlay}>
            <ModalWrapper>
          <ModalImage src={this.props.largeImage} alt="large photo" />
        </ModalWrapper>
      </Overlay>
      );
    }
}
 
export default Modal;