const {configureStore} = require('@reduxjs/toolkit');
const CAKE_ORDRED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK'

function orderCake(){
    return {
        type: CAKE_ORDRED,
        quantity: 1
    }
}

function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCK,
        payload: qty
    }
}

const initialState = { 
     numOfCakes: 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case CAKE_ORDRED: return {
            ...state,
            numOfCakes : state.numOfCakes - 1
        }

        case CAKE_RESTOCK: return{
            ...state,
            numOfCakes: action.payload
        }
        default: 
            return state
    }
}

const store = configureStore({reducer});
console.log('Initial state : ', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State: ', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(10));

unsubscribe();