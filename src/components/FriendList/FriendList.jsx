import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline }) => (
          <FriendListItem
            key={name}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        ))}
      </ul>
    );
  };