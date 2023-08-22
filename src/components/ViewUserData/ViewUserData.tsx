import React from 'react';
import { Avatar, Card, Button, Input } from 'antd';
import { UserData } from "../../type/UserData";


 
interface ViewUserDataProps {
  user: UserData;
  userId: string | undefined;
  editClicked: () => void;
}

const authUserID = localStorage.getItem('username');

const ViewUserData: React.FC<ViewUserDataProps> = ({ user, userId, editClicked }) => (
  <div className="centered-card-container">
      <Card className="centered-card" hoverable>
      <Avatar size={100} className="centered-avatar" style={{ margin: '20px' }}>
        {user.name?.charAt(0)}
      </Avatar>
       <div className="user-details">
        <h3>{user.name}</h3>
        {authUserID ===  user.name?.toLowerCase()  &&  
          <h3>
          <Input.Password placeholder="Old Password" value={user.password} />
          </h3>}
      </div>
      {authUserID ===  user.name?.toLowerCase() && (
        <Button type="primary" onClick={editClicked}>
          Edit
        </Button>
      )}
    </Card>
  </div>
);

export default ViewUserData;