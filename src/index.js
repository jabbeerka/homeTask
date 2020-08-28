import {createStore} from 'redux';

const initialState = 23;


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC" :
            return state + 1;
        case "DEC" :
            return state -1;
        case "RES" :
            return 0;
        default :
            return state
    }
    
}

const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const res = () => ({type: "RES"});

const store = createStore(reducer);

document.getElementById('plus').addEventListener('click', ()=> {
    store.dispatch(inc());
});
document.getElementById('minus').addEventListener('click', ()=> {
    store.dispatch(dec());
});
document.getElementById('reset').addEventListener('click', ()=> {
    store.dispatch(res());
});

store.subscribe(()=> {
    document.getElementById('number').innerHTML = store.getState();
})

