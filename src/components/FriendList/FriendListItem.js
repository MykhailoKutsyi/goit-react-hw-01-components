import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css'

function FriendList({ friends }) {
  return (
    <ul className={s.itemList}>
      {friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;

