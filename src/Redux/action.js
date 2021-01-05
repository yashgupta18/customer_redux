export function getCustomer() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_CUSTOMER'  
        });  
    }  
};  
  
export function addCustomer(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_CUSTOMER',  
            payload: data  
        });  
    }  
};  
  
export function editCustomer(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_CUSTOMER',  
            payload: data  
        });  
    }  
};  
  
export function deleteCustomer(customerId) {  
    return dispatch => {  
        return dispatch({  
            type: 'DELETE_CUSTOMER',  
            payload: customerId  
        });
    }
};


export function updateUser(data){
    return dispatch =>{
        return dispatch({
            type: 'SET_USER',
            payload: data
            
    });
    }
}
