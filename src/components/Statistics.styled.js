import styled from 'styled-components';

export const StatisticWrap = styled.section`
  width: 300px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  color: #485a69;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const StatItem = styled.li`
  display: flex;
  width: 60px;
  height: 70px;
  flex-direction: column;
  justify-content: center;

  border-color: #e8edf3;
`;
export const Label = styled.span`
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: white;
  margin: 0px;
`;
export const Percentage = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: white;
  margin: 0px;
`;
