let initialValue = {
    date: [],
    filter : [],
    categories : [],
    loading : false,
    loaded : false,
};

const filterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "SEARCHING_STARTED" :
            return {
                ...state,
                loading : true,
                loaded : false,

            };
        case "ADD_FILTER_PARAMS" :
            return {
                ...state,
                filter : action.payload,
                loading: false,
                loaded: true,
            };
        default : return state;
    }

};

export default filterReducer;