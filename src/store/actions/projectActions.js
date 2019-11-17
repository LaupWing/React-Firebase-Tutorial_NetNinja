export const createProject = (project) =>{
    return (dispatch, getState, {getFirestore, getFirebase})=>{
          
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })        
    }
}