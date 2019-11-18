const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{ 
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCES':
            console.log('Login succes')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCES':
            console.log('Signout succes')
            return state
        default:
            return state
    }
}

export default authReducer