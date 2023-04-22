import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';


function ImageGallery({ items }) {
  return (
    <>
      <ImageGalleryContainer>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ImageGalleryContainer>
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};