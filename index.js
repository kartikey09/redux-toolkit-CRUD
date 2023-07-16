const {configureStore} = require('@reduxjs/toolkit');
const CAKE_ORDRED = 'CAKE_ORDERED';


function orderCake(){
    return {
        type: CAKE_ORDRED,
        quantity: 1
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

unsubscribe();