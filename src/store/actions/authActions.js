export const signIn = (credentials)=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({
                type: 'LOGIN_SUCCES'
            })
        })
        .catch(error=>{
            dispatch({
                type: 'LOGIN_ERROR',
                error
            })
        })
    }
}