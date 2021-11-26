import { Link } from "react-router-dom"

const ContainerHome = ({user})=>{
    // const user  = user
    console.log(user) 
    return (
        <div className="container">
        <h2>Welcome {user.name}</h2>
        <ol>
          <li>
            <Link className="btn_all" to="/user">
              Profile
            </Link>
          </li>
          <li>
            <Link className="btn_all" to="/pokemons">
              Pokemons
            </Link>
          </li>
          <li>
            <Link className="btn_all" to="/berries">
              berries
            </Link>
          </li>
        </ol>
      </div>
    )
}


export default ContainerHome