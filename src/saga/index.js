import {put, takeLatest} from 'redux-saga/effects'
import {increment} from "../actions/counter";
import {INCREASE_ASYNC} from "../constants/counter";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export function* helloSaga() {
    // 监听 action: INCREASE_ASYNC
    yield takeLatest(INCREASE_ASYNC, asyncSaga)
}

export function* asyncSaga() {
    yield delay(2000)
    yield put(increment())
}
