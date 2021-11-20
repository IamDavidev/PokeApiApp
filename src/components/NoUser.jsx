import { useHistory } from "react-router-dom"


const NoUser = (props)=>{
    const handlepush = ()=>{
       useHistory().push("/login")
    }
    console.log(props);
    return (
        <div className="no-user">
            <h1>{}</h1>
            <p>Please login to view your profile</p>
            <button onClick={handlepush}>Login</button>
        </div>
    )
}


export default NoUser