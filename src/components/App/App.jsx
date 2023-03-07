import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import { Container } from 'components/App/App.styled.js';
import React from 'react';
import user from '../../data/user.json';
import statistics from '../../data/data.json';
import friends from '../../data/friends.json';
import items from '../../data/transactions.json';


export const App = () => {
  return (
      <Container>
      <Profile avatar={ user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats} />
        <Statistics title="Upload stats" statistics={ statistics } />
        <FriendList friends={friends} />
        <TransactionHistory items={ items } />
      </Container>
  )
}
