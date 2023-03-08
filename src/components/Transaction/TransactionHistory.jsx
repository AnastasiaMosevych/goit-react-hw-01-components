import PropTypes from 'prop-types';
import { TransactionRow } from './TransactionRow';
import { TransactionHistoryTable, TableHeader, TableBody } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return <>
    <TransactionHistoryTable>
        <thead>
        <tr>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
        </tr>
        </thead>
        <TableBody>
            {items.map(item => (
                <TransactionRow type={item.type} amount={item.amount} currency={item.currency} key={item.id} />
        ))}
        </TableBody>
    </TransactionHistoryTable>
</>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}

