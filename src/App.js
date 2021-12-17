import {connect} from "react-redux";
import {increment} from "./actions/counter";

function App(props) {
    return (
        <div>
            <p>{props.counter}</p>
            <button onClick={props.increment}>+1</button>
        </div>
    );
}

const mapStateToProps = function ({counter}) {
    return {counter}
}
const mapStateToDispatch = {
    increment
}
export default connect(mapStateToProps, mapStateToDispatch)(App);
