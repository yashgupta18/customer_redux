import {data} from './DummyData'
const initialstate = {
    customers:data
}

const myreducer = (state = initialstate, action) => {    
    switch (action.type) {    
        case 'GET_CUSTOMER':    
            return {    
                ...state    
            };    
        case 'ADD_CUSTOMER':    
            return {    
                ...state,    
                customers: state.customers.concat(action.payload)    
            };    
        case 'EDIT_CUSTOMER':    
            return {    
                ...state,    
                customers: state.customers.map(    
                    (content, i) => content.id === action.payload.id ? {...content, customer_name : action.payload.customer_name ,  customer_email : action.payload.customer_email, product : action.payload.product, quantity : action.payload.quantity }    
                                            : content)    
            };    
        case 'DELETE_CUSTOMER':    
            return {    
                ...state,    
                customers: state.customers.filter(item => item.id !== action.payload)    
            };    
        default:    
            return state;    
    }    
}; 

export default myreducer; 