import {TransactionHistoryTable, TableHeader, TableBody, TableData, TableRow} from './TransactionHistory.styled'

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

const TransactionRow = ({type, amount, currency}) => {
    return < TableRow>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
    </ TableRow>
}
