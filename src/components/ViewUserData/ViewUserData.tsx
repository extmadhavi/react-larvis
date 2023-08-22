import React from 'react';
import { Avatar, Row, Col, Button, Input } from 'antd';
import { UserData } from "../../type/UserData";


 
interface ViewUserDataProps {
  user: UserData;
  userId: string | undefined;
  editClicked: () => void;
}

const authUserID = localStorage.getItem('username');

const ViewUserData: React.FC<ViewUserDataProps> = ({ user, userId, editClicked }) => (
  <Row gutter={[16, 16]} justify="center" align="middle">
    <Col span={6} className="centered-card">
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
    </Col>
  </Row>
);

export default ViewUserData;