const {configureStore} = require('@reduxjs/toolkit');

const CAKE_ORDRED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const ICECREAM_ORDER = 'ICECREAM_ORDER';
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';

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

const initialCakeState = { 
     numOfCakes: 10
}

function orderIcecream(){
    return {
        type: ICECREAM_ORDER,
        quantity: 1
    }
}

function restockIcecream(qty = 1){
    return{
        type: ICECREAM_RESTOCK,
        payload: qty
    }
}

const initialIcecreamState = { 
    numOfIcecreams: 20
}

const Cakereducer = (state = initialCakeState, action) =>{
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

const Icecreamreducer = (state = initialIcecreamState, action) =>{
    switch(action.type){
        case ICECREAM_ORDER: return {
            ...state,
            numOfIcecreams : state.numOfIcecreams - 1
        }

        case ICECREAM_RESTOCK: return{
            ...state,
            numOfIcecreams: action.payload
        }
        default: 
            return state
    }
}

const store = configureStore({reducer: {
    cake: Cakereducer,
    icecream: Icecreamreducer
}});

console.log('Initial state : ', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated State: ', store.getState()));


store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(10));
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(restockIcecream(20));

unsubscribe();