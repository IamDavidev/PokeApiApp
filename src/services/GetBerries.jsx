import { useState } from 'react';

const GetBerries = () => {
  const [allBerries, setAllBerries] = useState([]);
  const [loadmore, setLoadmore] = useState(
    'https://pokeapi.co/api/v2/berry/?limit=10'
  );

  const getAllBerries = async () => {

    const response = await fetch(loadmore);
    const data = await response.json()

    await setLoadmore(data.next)

    function createBerries(berries){
        berries.forEach(async berry => {

            const response = await fetch(berry.url)
            const data = await response.json()
            
            setAllBerries(prevBerries => [...prevBerries, data])
            await allBerries.sort((a, b) => (a.id - b.id ))
        
        })
    
    }
    
  };
return allBerries;
};
export default GetBerries;
