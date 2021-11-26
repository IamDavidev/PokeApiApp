import { useHistory } from "react-router-dom"
import {Link} from "react-router-dom"

const NoUser = (props)=>{
    const handlepush = ()=>{
       useHistory().push("/login")
    }
    // console.log(props);
    return (
        <div className="no_user_cmt">
            <h2>{'No user'}</h2>
            <p>Please login to view your profile</p>
            <Link to="/login" >Login</Link>
        </div>
    )
}


export default NoUser