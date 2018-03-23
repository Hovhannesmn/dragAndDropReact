export const  removeWishList = (id) => {
    return (dispatch) => {
        dispatch({
            type : 'REMOVE_WISH_LIST',
            payload : id
        });
    };
};

export default removeWishList;

