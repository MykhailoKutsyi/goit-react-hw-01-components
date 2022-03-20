import PropTypes from 'prop-types';
import Stats from './Stats'
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
                {stats.map(item => (
                    <Stats
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;
