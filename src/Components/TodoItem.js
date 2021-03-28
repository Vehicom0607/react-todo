import React from 'react';
import classes from "./TodoItem.module.css"

const TodoItem = props => {
    console.log(props.completed)
    return (
        <div className={classes.Task}>
            <span className={props.theme==='night'? classes.CheckSpanDark:classes.CheckSpanLight}>
                <div className={props.theme==='night'? classes.CheckDark:classes.CheckLight} />
            </span>
            <p className={props.theme==='night'? classes.InputDark:classes.InputLight}>
                {props.task}
            </p>
        </div>
    );
};


export default TodoItem;
