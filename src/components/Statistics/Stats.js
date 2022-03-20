import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Stats = ({ label, percentage }) => {
    return (
        <li style={{
            backgroundColor: getRandomHexColor()
        }} className={s.item}>
            <span className={s.label}>{ label }</span>
            <span className={s.percentage}>{ percentage }%</span>
        </li>
    );
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Stats;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}