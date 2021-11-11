import Getpokes from "../services/GetPokes";
import {useState,useEffect} from 'react'

    const usePoke = () => {
    const [pokes, setPokes] = useState([]);
    
    useEffect(() => {
        Getpokes().then(data => {
            setPokes(data);
        });
    }, []);
return pokes;
}


export default usePoke;