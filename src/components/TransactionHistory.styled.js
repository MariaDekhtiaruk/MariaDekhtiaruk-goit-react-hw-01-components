import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  border-spacing: 0px;
`;

export const TableTop = styled.th`
  width: calc(500px / 3);
  border: solid 1px;
  border-color: #e7ebf2;
  background-color: #00bdd6;
  padding: 10px;
  margin: 0px;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  color: white;
`;
export const TableColumn = styled.td`
  width: calc(500px / 3);
  border: solid 1px;
  border-color: #e7ebf2;
  padding: 0px;
  margin: 0px;
  font-size: 12px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin: 0px;
`;
export const TableLine = styled.tr`
  background-color: white;
  padding: 0px;
  margin: 0px;
  border-spacing: 0px;
  &:nth-child(even) {
    background-color: lightyellow;
  }
`;
