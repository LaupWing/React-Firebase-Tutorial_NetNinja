export const createProject = (project) =>{
    return (dispatch, getState, {getFirestore, getFirebase})=>{
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Hau',
            authorLastname: 'Wing',
            authorId: 123456,
            createdAt: new Date()
        }).then(()=>{
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })        
        }).catch((e)=>{
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                eror: e
            })
        }) 
    }
}