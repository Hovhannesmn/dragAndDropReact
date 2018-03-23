import {
    GetData,
    setProductsDate,
    setProductsCategories,
    setBalance,
} from "../actions/actionInitialData";


let date = Date.now();
let day = 60 * 60 * 1000 * 24 * 3;
let filterDate = [];
let filterCategories = [];

const getRandomNamber = (namber) => Math.floor(Math.random() * (namber));


const dataChangerMiddleware = store => next => {
    return action => {
        switch (action.type) {
            case 'PARSED_DATA':
                let newData = action.payload.map((data, i) => {
                    data.categoryId = data.userId;
                    data.price = getRandomNamber(50);

                    if (i % 30 === 0) {
                        date += day;
                        filterDate.push(date);
                    }
                    if (!filterCategories.includes(data.categoryId))
                        filterCategories.push(data.categoryId);
                    return Object.assign({}, data, {
                        ts: date,
                        categoryId : data.categoryId,
                        price: data.price
                    });
                });
                next(setBalance(getRandomNamber(500)));
                next(setProductsDate(filterDate));
                next(setProductsCategories(filterCategories));
                next(GetData(newData));
                break;
            default :
                next(action);
        }
    };
};

export default dataChangerMiddleware;