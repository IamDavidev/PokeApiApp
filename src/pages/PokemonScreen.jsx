import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
const PokemonScreen = () => {
    const history = useHistory();
  const name = useParams();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="character_screen">
      <h1>soon available</h1>
      <button className='load_more' onClick={handleBack}>Go Back </button>
    </div>
  );
};

export default PokemonScreen;
