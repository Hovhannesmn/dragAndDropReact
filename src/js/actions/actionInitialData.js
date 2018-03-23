export const GetData = (payload) => {
    return {
        type: "PARSED_DATA",
        payload
    };
};

export const setBalance = (payload) => {
    return {
        type : "SET_BALANCE",
        payload,
    }
};

export const setProductsDate = (payload) => {
    return {
        type: "SET_PRODUCTS_DATE",
        payload
    };
};

export const setProductsCategories = (payload) => {
    return {
        type: "SET_PRODUCTS_CATEGORIES",
        payload
    };
};

export const filterData = (payload) => {
    return {
        type: "FILTER_DATE",
        payload
    };
};


