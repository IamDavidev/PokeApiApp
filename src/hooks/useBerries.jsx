import GetBerries from '../services/GetBerries';
import { useEffect,useState } from 'react';
const useBerries = () => {
    const [berries, setBerries] = useState([]);
    useEffect(()=>{
        console.log(GetBerries);
    })
};

export default useBerries;
