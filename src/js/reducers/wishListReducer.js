let initialValue = {
    wishList : [],
    count    : 0,
};

const wishList = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_WISH_LIST" :
            return {
                ...state,
                wishList : [...state.wishList, action.payload],
                count    : state.count + 1
            };
        case "REMOVE_WISH_LIST" :
            return {
                ...state,
                wishList: [
                    ...state.wishList.slice(0, action.payload),
                    ...state.wishList.slice(action.payload + 1)
                ],
                count    : state.count - 1
            };
        case "DECREMENT_WISH_LIST" :
            return {
                ...state,
                count   : state.count - 1
            };

        default : return state;
    }
};

export default wishList;