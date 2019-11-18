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

export const signOut = ()=>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase()
    
        firebase.auth().signOut()
            .then(()=>{
                dispatch({type: 'SIGNOUT_SUCCES'})
            })
    }
}

export const signUp = ()=>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{

    }
}