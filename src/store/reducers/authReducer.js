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
        case 'SIGNUP_SUCCES':    

            return {
                ...state,
                authError: null
            }
        default:
            return {
                ...state,
                authError: action.error.message
            }
    }
}

export default authReducer