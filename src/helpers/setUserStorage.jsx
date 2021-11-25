import {useEffect} from 'react'
import {useContext} from 'react'
import UserContext from '../Context/UserContext';
const setUserStorage = () => {
    const {user, setUser} = useContext(UserContext);
    useEffect(()=>{
        const userStorage = JSON.parse(localStorage.getItem('AuthUser'))
        console.log(userStorage);
        if(userStorage){
            setUser(userStorage)
        }
    })
}

export default setUserStorage