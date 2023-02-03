import { Profile } from './components/Profile';
import user from './data/user';
import './App.css';
import { Statistics } from 'components/Statistics';
import stats from './data/data';
import { FriendList } from 'components/FriendList';
import friends from './data/friends';
import { TransactionHistory } from 'components/TransactionHistory';
import transaction from './data/transactions';
export const App = () => {
  return (
    <div className="App">
      <Profile user={user} />
      <Statistics title={'upload stats'} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
