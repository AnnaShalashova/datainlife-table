import {put, takeEvery, call} from "redux-saga/effects";

async function getProducts() {
    const request = await fetch("https://datainlife.ru/junior_task/get_products.php");

    const data = request.json();

    return data;
}

async function sendOrder(formData) {
    const request = await fetch("https://datainlife.ru/junior_task/add_basket.php", {
        method: "POST",
        body: formData
    });

    const result = request.json();
    console.log("Заказ оформлен!", result)
    return result;
}

export function* fetchProductsSaga() {
    const products = yield call(getProducts);

    yield put({type: "SET_PRODUCTS", payload: products})
}

export function* sendOrderSaga({payload}) {
    yield sendOrder(payload);
    yield put({type: "DELETE_SELECTED_POSITIONS"})
}


export default function* rootSaga() {
    yield takeEvery('GET_DATA', fetchProductsSaga);
    yield takeEvery('SEND_ORDER', sendOrderSaga);
}