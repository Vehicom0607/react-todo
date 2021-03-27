import './App.css';
import TodoTracker from "./Containers/TodoTracker";
import classes from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={classes.App + " " + classes.AppBlack}>
        <TodoTracker />
    </div>
  );
}

export default App;
