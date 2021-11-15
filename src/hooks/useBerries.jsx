import GetBerries from '../services/GetBerries';
import { useEffect,useState } from 'react';
const useBerries = () => {
    const [berries, setBerries] = useState([]);
    // useEffect(()=>{    
            // setBerries(GetBerries());

    // },[])
    return berries;
};

export default useBerries;
