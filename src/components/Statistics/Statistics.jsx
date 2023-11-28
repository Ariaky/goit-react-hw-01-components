import css from './Statistics.module.css';
import {getRandomColor} from './GetRandomColor';

export const Statistics =({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      
        <ul className={css.statList}>{stats.map(item => {
            return (
                <li key={item.id} className={css.item} style={{backgroundColor: getRandomColor(), flex: 1, }}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
            )
        })}     
        </ul>
        </section>
    );
};