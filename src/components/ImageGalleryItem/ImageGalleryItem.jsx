import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';



class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <GalleryItem>
        <GalleryItemImage
          onClick={this.onModal}
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;