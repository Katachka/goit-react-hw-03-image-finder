import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';


export const ImageGallery = ({ images, openModal }) => {
  return (
    <ImageGalleryContainer>
      {images.map(({ id, description, smallImage, largeImage }) => (
        <ImageGalleryItem
          key={id}
          description={description}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </ImageGalleryContainer>
  );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            description: PropTypes.string,
            smallImage: PropTypes.string.isRequired,
            largeImage: PropTypes.string.isRequired,
        })
    ).isRequired,
};