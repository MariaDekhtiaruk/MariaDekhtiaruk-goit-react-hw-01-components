import PropTypes from 'prop-types';

import {
  Table,
  TableTop,
  TableLine,
  TableColumn,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTop>Type</TableTop>
          <TableTop>Amount</TableTop>
          <TableTop>Currency</TableTop>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableLine key={id}>
            <TableColumn>{type}</TableColumn>
            <TableColumn>{amount}</TableColumn>
            <TableColumn>{currency}</TableColumn>
          </TableLine>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      currency: PropTypes.string,
      amount: PropTypes.string,
    }).isRequired
  ),
};
