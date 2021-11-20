import { useHistory } from "react-router-dom"
import {Link} from "react-router-dom"

const NoUser = (props)=>{
    const handlepush = ()=>{
       useHistory().push("/login")
    }
    console.log(props);
    return (
        <div className="no-user">
            <h1>{'No user'}</h1>
            <p>Please login to view your profile</p>
            <Link to="/login" >Login</Link>
        </div>
    )
}


export default NoUser