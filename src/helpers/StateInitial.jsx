const StateInitial =()=> {
    const noUser = {
        name: '',
        email:'',
        password:'',
        isLogged: false,
    }
    const user = JSON.parse(localStorage.getItem('AuthUser'))
    if(user) return user
    return noUser
}




export default StateInitial;