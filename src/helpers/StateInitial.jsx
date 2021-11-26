const StateInitial =()=> {
    const noUser = {
        name: '',
        email:'',
        password:'',
        isLoggedIn: false,
    }
    const user = JSON.parse(localStorage.getItem('AuthUser'))
    if(user) return user
    return noUser
}




export default StateInitial;