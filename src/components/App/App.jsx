import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import { Container } from 'components/App/App.styled.js';
import React from 'react';
import statistics from '../../data.json';
import friends from '../../friends.json';
import items from '../../transactions.json';


export const App = () => {
  return (
      <Container>
          <React.StrictMode>
              <Profile />
              <Statistics title="Upload stats" statistics={ statistics } />
              <FriendList friends={ friends } />
              <TransactionHistory items={ items } />
          </React.StrictMode>

    </Container>
  )
}
