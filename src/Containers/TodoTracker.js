import React, {Component} from 'react';
import classes from './TodoTracker.module.css'
import {Image} from "react-bootstrap";
import {connect} from "react-redux";

class TodoTracker extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.BackgroundImage} />
                <div className={classes.TodoContainer}>
                    <div className={classes.TodoHeader}>
                        <h1 className={classes.TodoText}>TODO</h1>
                        <Image onClick={} className={classes.TodoToggle} src={'images/icon-sun.svg'} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoTracker);
