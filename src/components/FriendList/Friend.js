import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const Friend = ({ name, isOnline, avatar }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.friendListName}>{name}</p>
    </li>
  );
};
// <span className={isOnline ? 'status status--online':'status status--offline'}></span>

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Friend;
