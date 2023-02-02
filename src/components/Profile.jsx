import {
  ProfileCard,
  Description,
  ProfileImage,
  ProfileSpecs,
  ProfileItem,
  Name,
  Tag,
  Location,
  Quantity,
  Label,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <Description>
        <ProfileImage src={avatar} alt="User avatar" class="avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <ProfileSpecs>
        <ProfileItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ProfileItem>

        <ProfileItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ProfileItem>

        <ProfileItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ProfileItem>
      </ProfileSpecs>
    </ProfileCard>
  );
};
