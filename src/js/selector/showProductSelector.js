import { createSelector } from 'reselect';

export const getProducts         = (state) => state.dataReducer.data;

export const getcurrentProductId = state => state.dataReducer.currentProductId;

export const getCurrentProduct = createSelector(
    [getProducts, getcurrentProductId],
    (products, productId) => {
        if (productId === -1) {
            return [];
        }
        for (let val of products || []) {

            if (val.id.toString() === productId) {
                return val;
            }
        }
    }
);


export const getTitle = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.title;
    }
);

export const getPrice = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.price;
    }
);

export const getId = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.id;
    }
);

export const getBody = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.body;
    }
);

export const getTs = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.ts;
    }
);

export const getUserId = createSelector(
    [getCurrentProduct],
    (product) => {
        if (product === undefined || product.length === 0) {
            return false;
        }

        return product.userId;
    }
);

