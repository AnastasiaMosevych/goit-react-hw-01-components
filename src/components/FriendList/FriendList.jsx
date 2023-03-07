import PropTypes from 'prop-types';
import { FriendListUl } from './FriendListUl.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return <>
        <FriendListUl>
            {friends.map( friend => (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
            ))}
        </FriendListUl>
    </>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}
