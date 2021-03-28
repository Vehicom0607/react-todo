import React, {Component} from 'react';
import classes from './TodoTracker.module.css'
import {InputGroup, Image} from "react-bootstrap";
import {connect} from "react-redux";
import * as actionTypes from '../store/actionTypes'
import TodoItem from "../Components/TodoItem";

class TodoTracker extends Component {
    state = {
        inputForm: '',
        currentType: 'all'
    }

    changeTypeAll = () => {
        this.setState({currentType: 'all'})
    }
    changeTypeActive = () => {
        this.setState({currentType: 'active'})
    }
    changeTypeCompleted = () => {
        this.setState({currentType: 'completed'})
    }
    clearCompleted = () => {
        this.props.clearCompleted()
    }


    onAddHandler = (event) => {
        if (event.key === "Enter") {
            const newItem = {task: this.state.inputForm, completed: false}
            this.props.addItem(newItem)
            this.setState({inputForm: ''})
        }
    }

    render() {
        let footerStyling = {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: this.props.theme==='night'?'#25273C':'#ffffff',
            color: 'white',
            padding: '20px 15px'
        }
        let allStyle = [this.props.theme==='night'?classes.FooterTextDark:classes.FooterTextLight, this.state.currentType==='all'?classes.FooterTextCurrent:null]
        let activeStyle = [this.props.theme==='night'?classes.FooterTextDark:classes.FooterTextLight, this.state.currentType==='active'?classes.FooterTextCurrent:null]
        let completedStyle = [this.props.theme==='night'?classes.FooterTextDark:classes.FooterTextLight, this.state.currentType==='completed'?classes.FooterTextCurrent:null]


        const bgImgClasses = [classes.BackgroundImage]
        let bgImgPath
        if (this.props.theme === 'night') {
            bgImgPath = 'images/icon-sun.svg'
            bgImgClasses.push(classes.BackgroundImageDark)
            footerStyling = {...footerStyling, }
        } else {
            bgImgPath = 'images/icon-moon.svg'
            bgImgClasses.push(classes.BackgroundImageLight)
        }

        let tasks = []
        this.props.items.forEach((item, index) => {
            tasks.push(<TodoItem currentType={this.state.currentType} task={item.task} key={index} theme={this.props.theme} completed={item.completed} completeTask={() => this.props.completeItem(index)} deleteTask={() => this.props.deleteItem(index)} />)
        })

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
                    <div>
                        {tasks}
                        <div style={footerStyling}>
                            <p className={classes.ItemsLeftText}>{this.props.items.length} items left</p>
                            <span className={classes.FooterDesktop} style={{display: 'flex'}}>
                                <p onClick={() => this.changeTypeAll()} className={allStyle.join(" ")}>All</p>
                                <p onClick={() => this.changeTypeActive()} className={activeStyle.join(" ")}>Active</p>
                                <p onClick={() => this.changeTypeCompleted()} className={completedStyle.join(" ")}>Completed</p>
                            </span>
                            <p onClick={() => this.clearCompleted()} className={this.props.theme==='night'?classes.FooterTextDark:classes.FooterTextLight}>Clear Completed</p>
                        </div>
                        <div className={classes.FooterMobile} style={footerStyling}>
                            <span style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                                    <p onClick={() => this.changeTypeAll()} className={allStyle.join(" ")}>All</p>
                                    <p onClick={() => this.changeTypeActive()} className={activeStyle.join(" ")}>Active</p>
                                    <p onClick={() => this.changeTypeCompleted()} className={completedStyle.join(" ")}>Completed</p>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchTheme: () => dispatch({type: actionTypes.CHANGE_THEME}),
        addItem: (item) => dispatch({type: actionTypes.ADD_ITEM, item:item}),
        deleteItem: (index) => dispatch({type: actionTypes.DELETE_ITEM, index:index}),
        completeItem: (index) => dispatch({type: actionTypes.COMPLETE_ITEM, index:index}),
        clearCompleted: () => dispatch({type: actionTypes.CLEAR_COMPLETED})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoTracker);
