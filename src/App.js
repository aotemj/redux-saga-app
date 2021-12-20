import {connect} from "react-redux";
import {increment, incrementAsync} from "./actions/counter";

function App(props) {
    return (
        <div>
            <p>{props.counter}</p>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.incrementAsync}>+1 Async</button>
        </div>
    );
}

const mapStateToProps = function ({counter}) {
    return {counter}
}
const mapStateToDispatch = {
    increment,
    incrementAsync
}
export default connect(mapStateToProps, mapStateToDispatch)(App);
