const initialState = false;

const UPDATE = (state = initialState , action) => {
    // ShowUpdate = !ShowUpdate;
    switch (action.type) {
        case 'CHANGE_UPDATE': {
            state = action.payload;
            return state;
        }   
            
        default: return state;
    }
}

export default UPDATE