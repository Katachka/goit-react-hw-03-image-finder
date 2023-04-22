import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import { Overlay, ModalContainer} from './Modal.styled';


const ModalRoot = document.querySelector('#ModalRoot');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <Overlay onClick={this.onOverlayClose}>
        <ModalContainer>
          <img src={largeImageURL} alt="img" />
        </ModalContainer>
      </Overlay>,
      ModalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};