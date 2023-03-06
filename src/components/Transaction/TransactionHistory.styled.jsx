import styled from "@emotion/styled";

export const TransactionHistoryTable = styled.table`
    width: 100%; 
    border: 1px solid black;
    table-layout: fixed;
    border-collapse: collapse;
`;

export const TableHeader = styled.th`
    padding-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    background-color: #40E0D0;
    color: white;
`;

export const TableBody = styled.tbody`
      
`;

export const TableData = styled.td`
    border-right: 1px solid black;
    padding-bottom: 10px;
    padding-top: 10px;
    color: gray;
    text-transform: capitalize;
`;

export const TableRow = styled.tr`
    text-align: center;
    &:nth-child(even) {
        background-color: #d3d3d3;
    }
`; 
