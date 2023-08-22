import React from 'react';
import { Card, Avatar } from 'antd';
import './UserCard.scss'; 
import { User } from '../../interfaces/User';

interface UserCardProps {
  user: User;
}

const UserCard : React.FC<UserCardProps> = ({ user })  => {
  return (
    <div className="centered-card-container">
      <Card className="centered-card" hoverable>
         <Avatar size={100} className="centered-avatar">
            {user.name?.charAt(0)}
        </Avatar>
        <h3>{user.name}</h3>
      </Card>
    </div>
  );
};

export default UserCard;