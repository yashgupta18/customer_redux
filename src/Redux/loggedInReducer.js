// export const initialState={
//     user: null,
// };

// export const actionTypes={
//     SET_USER:"SET_USER",
// };

const initialstate = {
    user: null
}
// const user='yash'
const loggedReducer=(state=initialstate, action) =>{

    console.log(action.payload && action.payload.displayName);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.payload.displayName,
                // loggedIn: true
            };
        default:
            return state;   
        // case actionTypes.SET_USER:
        //     return {
        //         ...state,
        //         user: action.user,
        //     };
        // default:
        //     return state;    
    }
};

export default loggedReducer;