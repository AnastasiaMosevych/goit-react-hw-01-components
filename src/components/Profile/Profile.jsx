import user from 'user.json';
import { ProfileContainer, Description, Avatar, UserName, TagAndLocation, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = () => {
    return <ProfileContainer>
        <Description>
            <Avatar
      src={user.avatar}
      alt="User avatar"
            />
            <UserName>{user.username}</UserName>
            <TagAndLocation>{user.tag}</TagAndLocation>
            <TagAndLocation>{user.location}</TagAndLocation>
        </Description>
        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{ user.stats.followers }</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{user.stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{user.stats.likes}</Quantity>
            </StatsItem>
        </Stats>
    </ProfileContainer>
}