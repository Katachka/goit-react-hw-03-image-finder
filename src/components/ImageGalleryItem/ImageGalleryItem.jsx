import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ description, smallImage, largeImage, openModal }) => {
  return (
    <GalleryItem onClick={openModal}>
      <GalleryItemImage src={smallImage} alt={description} data-large={largeImage} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};