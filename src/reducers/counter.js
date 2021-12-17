import {INCREASE} from "../constants/counter";

const counter = (state = 1, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1
            break;
        default:
            return state
    }
}

export default counter