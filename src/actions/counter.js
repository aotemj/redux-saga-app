import {INCREASE, INCREASE_ASYNC} from "../constants/counter";

export const increment = () => {
    return {
        type: INCREASE
    }
}

export const incrementAsync = () => {
    return {
        type: INCREASE_ASYNC
    }
}
