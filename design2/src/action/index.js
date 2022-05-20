export const CHECK = () => {
    return {
        type: "CHECK",
    }
}

export const SAVE_CARD_ID = (id) => {
    return {
        type: "SAVE_CARD_ID",
        payload: id
    };
};

export const UPDATE_CARD = (id) => {
    return {
        type: "UPDATE_CARD",
        payload: id
    };
};

export const CHANGE_UPDATE = (status) => {
    return {
        type: "CHANGE_UPDATE",
        payload : status,
    };
};

export const ADD_CONTACT = () => {
    return {
        type: "ADD_CONTACT",
    };
};

export const EDIT_CONTACT = (id) => {
    return {
        type: "EDIT_CONTACT",
        payload: id,
    }
}

export const DELETE_CONTACT = (id) => {
    return {
        type: "DELETE_CONTACT",
        payload : id,
    }
}
