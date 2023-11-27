import css from './FriendListItem.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    
    const activityColor = isOnline? '#32CD32' : '#bb0000';

    const activityBage = {
        backgroundColor : activityColor,
    }

    return (
        <li className={css.item}>
            <span className={css.status} style={activityBage}></span>
            <img className={css.avatar} src={avatar} alt={name} width="52" height="52"/>
            <p className={css.name}>{name}</p>
        </li>
    );
};