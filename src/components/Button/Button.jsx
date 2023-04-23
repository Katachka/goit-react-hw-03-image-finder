import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ onNextFetch }) => {
  return (
    <LoadButton type="button"  onClick={onNextFetch}>
      Load more
    </LoadButton>
  );
};


Button.propTypes = {
  onNextFetch: PropTypes.func.isRequired,
};