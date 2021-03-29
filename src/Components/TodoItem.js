import React from 'react';
import classes from "./TodoItem.module.css"
import {Image} from "react-bootstrap";

const TodoItem = props => {
    let completeIcon
    let completeIconClass = [props.theme==='night'? classes.CheckDark:classes.CheckLight, classes.CheckChecked]
    if (props.completed) {
        completeIcon = <img alt="Check Icon" onClick={() => props.completeTask()} src={'/images/icon-check.svg'} className={completeIconClass.join(" ")} />
    } else {
        completeIcon = <div onClick={() => props.completeTask()} className={props.theme==='night'? classes.CheckDark:classes.CheckLight} />
    }

    let show = true
    if ((props.completed&&props.currentType==='active') || (!props.completed&&props.currentType==='completed')) {
        show = false
    }

    return (
        <div className={classes.Task} style={show?null:{display: 'none'}} >
            <span className={props.theme==='night'? classes.CheckSpanDark:classes.CheckSpanLight}>
                {completeIcon}
            </span>
            <p className={props.theme==='night'? classes.InputDark:classes.InputLight}>
                {props.task}
                <Image alt="Delete Cross" onClick={() => props.deleteTask()} src={'/images/icon-cross.svg'} className={props.theme==='night'? classes.CrossDark:classes.CrossLight} />
            </p>
        </div>
    );
};


export default TodoItem;
