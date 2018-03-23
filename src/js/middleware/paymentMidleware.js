const paymentMidleware = store  => next => action => {
    switch (action.type) {
        case "BUY_NOW" :
            const {data, balance} = store.getState().dataReducer;
            let initialProduct = {};
            for (let product of data){
                if (product.id.toString() === action.payload.productId) {
                    initialProduct = product;
                    break;
                }
            }

            let newBalance = balance - initialProduct.price;
            if (newBalance < 0 ) {
                alert("Your balance is not enough");
                next({
                    type: 'LOADING_ENDED',
                });
                return false;
            }

            const newArray = data.filter(obj => obj !== initialProduct);

            let wishlist = store.getState().wishList.wishList;
            let index = wishlist.indexOf(initialProduct.id.toString());
            next({
                type: 'REMOVE_WISH_LIST',
                payload : index,
            });

            const deleteProductAction = {
                type : "DELETE_PRODUCT",
                payload : newArray,
            };

            const buyNowAction = {
                type : "BUY_NOW",
                payload : newBalance
            };
            next(buyNowAction);
            return next(deleteProductAction);
        default :
            return next(action);
    }
};

export default paymentMidleware;