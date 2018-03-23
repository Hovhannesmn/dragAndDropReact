let initialValue = {
    data : [],
    balance : 0,
    currentProductId : -1,
    categories: [],
    error: null,
    loaded : false,
    loading : false
};

const dataReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "LOADING_STARTED":
            return {
                ...state,
                loading: true,
                loaded: false,
                error: null
            };
        case "LOADING_ENDED":
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null
            };
        case "PARSED_DATA":
            return {
                ...state,
                data : action.payload,
                loading: false,
                loaded: true,
                error: null
            };
        case "SET_BALANCE":
            return {
                ...state,
                balance : action.payload,
                loading: false,
                loaded: true,
            };
        case "SET_PRODUCTS_DATE":
            return {
                ...state,
                date: action.payload,
                loading: false,
                loaded: true,
            };
        case "SET_PRODUCTS_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
                loading: false,
                loaded: true,
            };
        case  "BUY_NOW" :
           return {
                ...state,
                balance : action.payload,
                loading: false,
                loaded: false,
                error: state.error
            };
        case  "DELETE_PRODUCT" :
            return {
                ...state,
                data : action.payload,
                loading: false,
                loaded: false,
                error: state.error
            };
        case "SET_CURRENT_PRODUCT_ID":
            return {
                ...state,
                currentProductId : action.payload,
                loading: false,
                loaded: true,
                error: state.error
            };
        case "LOADING_FAILED":
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload
            };
        default :
            return state;
    }
};

export default dataReducer;
