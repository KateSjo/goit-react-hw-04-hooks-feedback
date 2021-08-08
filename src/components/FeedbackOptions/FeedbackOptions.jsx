import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";
import shortid from "shortid";

const FeedbackOptions = (props) => {
  const ID = () => shortid.generate();
  const BtnText = props.feedbacks.map((feedback) => {
    return (
      <li id={ID()} className={styles.statisticsItem}>
        <button
          className={styles.statisticsText}
          name={feedback}
          onClick={props[feedback]}
        >
          {feedback}
        </button>
      </li>
    );
  });
  return <ul className={styles.statisticsList}>{BtnText}</ul>;
};

FeedbackOptions.prototype = {
  goodIncrement: PropTypes.node,
  neutralIncrement: PropTypes.node,
  badIncrement: PropTypes.node,
  feedbacks: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;