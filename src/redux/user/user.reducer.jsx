const INITIAL_STATE={
    currentUser: null
}

const userReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_CUURENT_USER':
            return{
                ...state,
                cuurentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;