const byProduct = (productId, balance) => {
    return (dispatch) => {
        dispatch({
            type: "LOADING_STARTED"
        });

        setTimeout(
            () => dispatch({
                    type: "BUY_NOW",
                    payload: {
                        productId,
                        balance
                    },
                }
            ), 300
        );
    };
};

export default byProduct;