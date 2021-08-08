import style from "./Statistics.module.css";
import PropTypes from "prop-types";
import shortid from "shortid";
const Statistics = (props) => {
  const ID = () => shortid.generate();
  const feedbackMarckUp = props.feedbacks.map((feedback) => {
    if (feedback === "Positivefeedback") {
      return (
        <li className={style.StatisticsItem} id={ID()}>
          <p>Positive feedback : {props.Positivefeedback + "%"}</p>
        </li>
      );
    }
    return (
      <li id={ID()}>
        <p id={ID()}>
          {feedback} : {props[feedback]}
        </p>
      </li>
    );
  });
  return <ul className={style.StatisticsList}>{feedbackMarckUp}</ul>;
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
  feedback: PropTypes.arrayOf(PropTypes.string),
};
export default Statistics;