import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={s.itemList}>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <Friend key={id} name={name} isOnline={isOnline} avatar={avatar} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
