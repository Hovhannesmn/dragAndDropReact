let asyncActionCreator = () => {
    return (dispatch) => {
        dispatch({
            type: "LOADING_STARTED"
        });
        setTimeout(
            () => (
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then((response) => response.json())
                    .then((responseJson) => {
                        dispatch({
                                type: "PARSED_DATA",
                                 payload : responseJson
                            });
                    })
                    .catch((error) => {
                        console.error(error);
                })
            ), 500
        );
    }
};




let bootstrap = (store) => {
    store.dispatch(asyncActionCreator());
};


export default bootstrap;