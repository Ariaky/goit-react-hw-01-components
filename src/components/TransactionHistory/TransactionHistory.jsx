import css from './TransactionHistory.module.css';

export const Transaction = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.title}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id} className={css.row}>
                    <td className={css.type}>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
};