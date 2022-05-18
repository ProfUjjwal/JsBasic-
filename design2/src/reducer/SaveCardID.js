const ID = -1;

export const SaveCardID = (state = ID, action) => {
    switch (action.type) {
        case 'SAVE_CARD_ID': {
            console.log("in SAVE_CARD_ID reducer id = " + action.payload);
            state = action.payload;
            return state;
        }
    
        default: return state;
    }
}