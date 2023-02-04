import styled from 'styled-components';
export const FriendListUl = styled.ul`
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: transparent;
  padding: 0px;
  margin-top: 20px;
`;

export const FriendListItem = styled.li`
  width: 400px;
  display: flex;
  gap: 10px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  overflow: hidden;
  align-items: center;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 7px;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;
export const Avatar = styled.img`
  border-radius: 10px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  color: black;
`;
