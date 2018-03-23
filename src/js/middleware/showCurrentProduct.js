import dataReducer from "../reducers/dataReducer";

const showCurrentProduct = store => next => action => {
    switch (action.type) {
        case "ADD_WISH_LIST" :
            next(action);
            next({
                type: 'SET_CURRENT_PRODUCT_ID',
                payload : action.payload,
            });
            break;
        case "REMOVE_WISH_LIST" :
            let index = store.getState().wishList.wishList.indexOf(action.payload.toString());
            const removeAction = {
                type    : action.type,
                payload : index
            };
            next(removeAction);
            let dataRed = store.getState().dataReducer;
            debugger;
            if (dataRed.currentProductId === action.payload.toString()) {
                next({
                    type: 'SET_CURRENT_PRODUCT_ID',
                    payload: -1,
                });
            }
            next({
                type : "LOADING_ENDED"
            });
            break;
        default :
            next(action);
    }
};

export default  showCurrentProduct;