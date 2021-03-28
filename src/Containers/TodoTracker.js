import React, {Component} from 'react';
import classes from './TodoTracker.module.css'
import {InputGroup, Image} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTypes from '../store/actionTypes'

class TodoTracker extends Component {
    state = {
        inputForm: ''
    }

    onAddHandler = (event) => {
        if (event.key === "Enter") {
            this.props.addEvent(this.state.inputForm)
            this.setState({inputForm: ''})
        }
    }

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
                        <input onKeyDown={(event) => this.onAddHandler(event)} type="text" value={this.state.inputForm} onChange={(event) => {this.setState({inputForm: event.target.value})}} aria-label="Text input" className={this.props.theme==='night'? classes.InputDark:classes.InputLight} />
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
        switchTheme: () => dispatch({type: actionTypes.CHANGE_THEME}),
        addEvent: (item) => dispatch({type: actionTypes.ADD_ITEM, item})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoTracker);
