import React, { Component } from 'react';
import { ModalImage, ModalWrapper, Overlay } from './Modal.styled';


const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
};

const containerVariant = {
    initial: { scale: 0.5, x: '-50%', y: '0%'},
    isOpen: { scale: 1, x: '-50%', y: '-50%', transition: { type: "spring"}  },
    exit: { scale: 0, x: '-50%', y: '0%'}
};

class Modal extends Component {
    state = {}

    closeModalByEsc = (e) => {
        if (e.code === 'Escape') {
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
        document.body.classList.add('lock')
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.closeModalByEsc);
        document.body.classList.remove('lock')
    }
    render() {

        return (

                <Overlay onClick={this.closeModalByOverlay}
                    initial={"initial"}
                    animate={"isOpen"}
                    exit={"exit"}
                    variants={modalVariant}
                >
                    <ModalWrapper variants={containerVariant}>
                        <ModalImage src={this.props.largeImage} alt="large photo" />
                    </ModalWrapper>
                </Overlay>
        );
    }
}

export default Modal;