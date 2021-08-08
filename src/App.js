import "./App.css";
import { useState } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const goodIncrement = () => {
    setGood((state) => state + 1);
  };
  const neutralIncrement = () => {
    setNeutral((state) => state + 1);
  };
  const badIncrement = () => {
    setBad((state) => state + 1);
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    good / (countTotalFeedback() / 100);
  return (
    <div>
      <Section title="Statistic">
        <FeedbackOptions
          good={goodIncrement}
          neutral={neutralIncrement}
          bad={badIncrement}
          feedbacks={["good", "neutral", "bad"]}
        />
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() === 0 ? (
          <h3>no feedback given</h3>
        ) : (
          <Statistics
            feedbacks={["good", "neutral", "bad", "total", "Positivefeedback"]}
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            Positivefeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;