import PropTypes from 'prop-types';
import Stats from './Stats'
import s from './Statistics.module.css'

const Statistics = ({ title, stats }) => {
    if (title !== undefined) {
        return (
            <section className={s.statistics}>
                <h2 className={s.title}>{title}</h2>
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
    // (title ?? (() => {
    //     console.log(title);
    //     (<h2 className="title">Upload stats</h2>)
    // }));
    // (title ?? 4);
    return (
        <section className={s.statistics}>
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
    stats: PropTypes.array.isRequired,
};

export default Statistics;
