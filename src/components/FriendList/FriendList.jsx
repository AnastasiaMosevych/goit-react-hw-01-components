import { FriendListUl, Item, Status, Avatar, Name } from './FriendListUl.styled';

export const FriendList = ({ friends }) => {
    return <>
        <FriendListUl>
            {friends.map( friend => (
                <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />
            ))}
        </FriendListUl>
    </>
}

const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Item>
        <Status type={isOnline}>{ isOnline }</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{ name }</Name>
    </Item>
}


