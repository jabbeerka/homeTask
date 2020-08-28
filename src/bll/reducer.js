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

export default reducer;