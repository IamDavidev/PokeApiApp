import useBerries from '../hooks/useBerries';
import { useContext, useEffect, useState } from 'react';
import GetBerries from '../services/GetBerries';
import UserContext from '../Context/UserContext';
import NoUser from '../components/NoUser';
import BerriesList from '../components/BerriesList';

const Berries = () => {
  const { user, setUser } = useContext(UserContext);

  const [allBerries, setAllBerries] = useState([]);
  const [loadmore, setLoadmore] = useState(
    'https://pokeapi.co/api/v2/berry/?limit=10'
  );

  const getAllBerries = async () => {
    const response = await fetch(loadmore);
    const data = await response.json();

    await setLoadmore(data.next);

    function createBerries(berries) {
      berries.forEach(async (berry) => {
        const response = await fetch(berry.url);
        const data = await response.json();

        setAllBerries((prevBerries) => [...prevBerries, data]);
        await allBerries.sort((a, b) => a.id - b.id);
      });
    }
    createBerries(data.results);
  };

  useEffect(() => {
    getAllBerries();
  }, []);

  return (
    <>
      {user.isLoggedIn === true ? (
        <div className="berries_page">
          <h1>Berries</h1>
          <div className="center_berries">
            <div className="render_berries">
              <BerriesList  berries={allBerries} />
            </div>
            <div className="btn_berries_more">
              <button className="btn_all" onClick={() => getAllBerries()}>
                {' '}
                More Berries{' '}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <NoUser />
      )}
    </>
  );
};

export default Berries;
