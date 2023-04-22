import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadButton type="button"  onClick={onClick}>
      Load more
    </LoadButton>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};