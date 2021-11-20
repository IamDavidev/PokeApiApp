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
      <h1>Berries</h1>
      <div className="center_berries">
        <div className="render_berries">
          {allBerries.map((berry) => (
            <div className="berrie" key={berry.id}>
              <h2>{berry.name}</h2>
              <p>power : {berry.natural_gift_power}</p>
              <h3>flavor : </h3>
              <em>{berry.flavors[0].flavor.name}</em>
              <em>{berry.flavors[1].flavor.name}</em>
              <em>{berry.flavors[2].flavor.name}</em>
              <em>{berry.flavors[3].flavor.name}</em>
              <h3>natural type : </h3>
              <p>{berry.natural_gift_type.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berries;
