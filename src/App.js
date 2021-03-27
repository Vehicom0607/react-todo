import './App.css';
import TodoTracker from "./Containers/TodoTracker";
import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";

function App(props) {
    const bgClasses = [classes.App]
    if (props.theme === 'night') {
        bgClasses.push(classes.AppBlack)
    } else {
        bgClasses.push(classes.AppLight)
    }

  return (
    <div className={bgClasses.join(" ")}>
        <TodoTracker />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
}

export default connect(mapStateToProps)(App);
