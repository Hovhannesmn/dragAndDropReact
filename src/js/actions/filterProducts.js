const filterProducts = (actionType) => {
    return (dispatch) => {
        dispatch({type : "SEARCHING_STARTED"});

        setTimeout(
            () => dispatch({
                type : "ADD_FILTER_PARAMS",
                payload : actionType
            }), 300
        );
    };
};

export default filterProducts;