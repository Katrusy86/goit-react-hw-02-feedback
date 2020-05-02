import React, { Component } from 'react';
import {Statistics} from './statistics/Statistics'
import {FeedbackOptions} from './options/FeedbackOptions'
import {SectionTitle} from './sectionTitle/SectionTitle'
import {Notification} from './notification/Notification'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        // total:0
    }

    countGoodLikes =() => {
        this.setState((prevState)=>({good:prevState.good + this.props.step}))
    }

    countNeutralLikes=()=>{
        this.setState((prevState)=>({neutral:prevState.neutral + this.props.step}))
    }

    countBadLikes=()=>{
        this.setState((prevState)=>({bad:prevState.bad + this.props.step}))
    }

    // countTotalFeedback=()=> { 
    //     this.setState((prevState)=>({total:prevState.total + this.props.step}))
    //     }

    countTotalFeedback=()=> {         
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
        // const {good,total} = this.state
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
    }


    render () {
        const {good,neutral,bad} = this.state;
            return (
        <>       
        <SectionTitle title="Please leave feedback">
            <FeedbackOptions 
            optionGoodBtn = {this.countGoodLikes}
            optionNeutralBtn = {this.countNeutralLikes}
            optionBadBtn = {this.countBadLikes} />
        {/* <button onClick = {()=>{this.countBadLikes(); this.countTotalFeedback()}}>Bad</button> */}
        {this.countTotalFeedback() === 0 ? <Notification message="No feedback given"/> :         
        (<div> 
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </div> 
        )} 
        </SectionTitle>
        </>
        )
    }
}

export default App;