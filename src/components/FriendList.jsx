import PropTypes from 'prop-types';

import {
  FriendListUl,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem key={id}>
          <Status isOnline={isOnline} />
          <Avatar src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </FriendListItem>
      ))}
    </FriendListUl>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
  //   ({
  //   id: PropTypes.number,
  //   avatar: PropTypes.string,
  //   name: PropTypes.string,
  //   isOnline: PropTypes.string,
  // }).isRequired,
};
