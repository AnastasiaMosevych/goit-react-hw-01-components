import PropTypes from 'prop-types';
import { TableData, TableRow } from './TransactionHistory.styled'

export const TransactionRow = ({ type, amount, currency }) => {
    return < TableRow>
                <TableData>{type}</TableData>
                <TableData>{amount}</TableData>
                <TableData>{currency}</TableData>
        </ TableRow>
}

TransactionRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}