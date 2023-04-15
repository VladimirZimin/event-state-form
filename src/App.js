import { GlobalStyle } from "./GlobalStyle";
import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import StatisticInfo from "./components/StatisticInfo";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = (evt) => {
    const { name } = evt.target;

    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return Math.floor((this.state.good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const statistics = Object.entries(this.state);
    console.log("statistics:", statistics);
    const total = this.countTotalFeedback();

    return (
      <>
        <GlobalStyle />
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section title={"Statistics"}>
          {total === 0 ? (
            "There is no feedback"
          ) : (
            <StatisticInfo
              statistics={statistics}
              onCountTotal={this.countTotalFeedback}
              onCountTotalPercent={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
