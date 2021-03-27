import React, {Component} from 'react';
import classes from './TodoTracker.module.css'
import {InputGroup, FormControl, Image} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTypes from '../store/actionTypes'

class TodoTracker extends Component {
    render() {
        const bgImgClasses = [classes.BackgroundImage]
        let bgImgPath
        if (this.props.theme === 'night') {
            bgImgPath = 'images/icon-sun.svg'
            bgImgClasses.push(classes.BackgroundImageDark)
        } else {
            bgImgPath = 'images/icon-moon.svg'
            bgImgClasses.push(classes.BackgroundImageLight)
        }


        return (
            <React.Fragment>
                <div className={bgImgClasses.join(" ")} />
                <div className={classes.TodoContainer}>
                    <div className={classes.TodoHeader}>
                        <h1 className={classes.TodoText}>TODO</h1>
                        <Image onClick={() => this.props.switchTheme()} className={classes.TodoToggle} alt="Toggle Theme" src={bgImgPath} />
                    </div>
                    <InputGroup size="lg" className="mb-3">
                        <span className={this.props.theme==='night'? classes.CheckSpanDark:classes.CheckSpanLight}>
                            <div className={this.props.theme==='night'? classes.CheckDark:classes.CheckLight} />
                        </span>
                        <FormControl aria-label="Text input" className={this.props.theme==='night'? classes.InputDark:classes.InputLight} />
                    </InputGroup>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: () => dispatch({type: actionTypes.CHANGE_THEME})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoTracker);
