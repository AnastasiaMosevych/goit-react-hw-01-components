import PropTypes from 'prop-types';
import user from 'user.json';
import { ProfileContainer, Description, Avatar, UserName, TagAndLocation, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({avatar, username, tag, location, stats}) => {
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

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}