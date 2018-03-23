const addWishList = (id) => {
    return (dispatch) => {
        dispatch({
            type : 'ADD_WISH_LIST',
            payload : id
        });
    };
};

export default addWishList;

