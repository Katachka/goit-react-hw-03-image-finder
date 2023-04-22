import { Dna } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';


const Loader = () => {
  return (
    <Spinner >
     <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"

/>
    </Spinner>
  );
};

export default Loader;