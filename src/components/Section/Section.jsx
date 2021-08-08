import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <section className={styles.Section}>
    <h2 className={styles.SectionTitle}>{title}</h2>
    {children}
  </section>
);
Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;