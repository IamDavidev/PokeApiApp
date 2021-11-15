import useBerries from '../hooks/useBerries';
import { useEffect, useState } from 'react';
import GetBerries from '../services/GetBerries';
const Berries = () => {
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
        console.log(berry.url);
        setAllBerries((prevBerries) => [...prevBerries, data]);
        await allBerries.sort((a, b) => a.id - b.id);
        await console.log(allBerries);
      });
    }
    createBerries(data.results);
    // await console.log(allBerries);
  };
  useEffect(() => {
    getAllBerries();
    console.log(allBerries);
  }, []);
  return (
    <div className="berries_page">
      afdssafdas
      <h1>Berriesas</h1>
      <ul>
        {allBerries.map((berry) => (
          <li key={berry.id}>{berry.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Berries;
