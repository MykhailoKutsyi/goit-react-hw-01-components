import Profile from './components/Profile/Profile'
import user from './components/Profile/user.json'

import FriendList from './components/FriendList/FriendListItem'
import friends from "./components/FriendList/friends.json";

import Statistics from './components/Statistics/Statistics'
import data from './components/Statistics/data.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './components/TransactionHistory/transactions.json'

function App() {
  return (
    <div>
      <Profile
          key={user.tag}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />

      <FriendList
        friends={friends} />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
