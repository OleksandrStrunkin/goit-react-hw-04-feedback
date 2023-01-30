import { Component } from "react";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

     handleLeaveFeedback = option => {
         this.setState(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

    countTotalFeedback = () => {
        return this.state.good+this.state.bad+this.state.neutral
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const result = good/this.countTotalFeedback()*100
        return (Math.round(result))
    }
    render() {
        const { good, bad, neutral } = this.state;
        return (
        <>
            <Section title={'Please leave feedback'}>
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.handleLeaveFeedback} />
            </Section>
                <Section title={'Statistics'}> 
                    {this.countTotalFeedback() ?  <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message={'There is no feedback'}/>}
                   
                </Section>
                
        </>
        )
    };
};

export  {App};