import PropTypes from 'prop-types';
import { ProfileContainer, Description, Avatar, UserName, TagAndLocation, Stats, StatsItem, Label, Quantity } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
    return <ProfileContainer>
        <Description>
            <Avatar
      src={avatar}
      alt="User avatar"
            />
            <UserName>{username}</UserName>
            <TagAndLocation>{tag}</TagAndLocation>
            <TagAndLocation>{location}</TagAndLocation>
        </Description>
        <Stats>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{stats.followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{stats.views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{stats.likes}</Quantity>
            </StatsItem>
        </Stats>
    </ProfileContainer>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}