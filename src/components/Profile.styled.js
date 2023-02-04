import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 300px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  margin-bottom: 20px;
`;
export const Description = styled.div`
  padding: 10px 10px;
  border-radius: 4px;
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  color: black;
  margin-bottom: 30px;
`;

export const Tag = styled.p`
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin: 0px;
`;
export const ProfileSpecs = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0px;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const ProfileItem = styled.li`
  display: flex;
  width: 100px;
  height: 70px;
  flex-direction: column;
  background-color: #f3f6f9;
  justify-content: center;
  border: solid 1px;
  border-color: #e8edf3;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.03em;
  text-align: center;
  color: black;
`;
export const Label = styled.span`
  font-size: 16px;
  line-height: 1.19;
  text-align: center;
  letter-spacing: 0.03em;
  color: #757575;
  margin: 0px;
`;
