import React from 'react';
import { Avatar, Row, Col, Button, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { UserData } from "../../type/UserData";


 
interface ViewUserDataProps {
  user: UserData;
  userId: string | undefined;
  editClicked: () => void;
}

const authUserID = localStorage.getItem('username');

const ViewUserData: React.FC<ViewUserDataProps> = ({ user, userId, editClicked }) => (
  <Row gutter={[16, 16]} justify="center" align="middle">
    <Col span={6} className="centered-card" style={{ padding: '20px', minHeight: '350px' }}>
      <Avatar size={100} className="centered-avatar" style={{ margin: '20px' }}>
        {user.name?.charAt(0)}
      </Avatar>
      <div className="user-details">
        <p>Username: {user.name}</p>
        {user.password && (
          <p>
            Password: <Input.Password prefix={<LockOutlined />} placeholder="Old Password" value={user.password} />
          </p>
        )}
      </div>
      {authUserID === userId && (
        <Button type="primary" onClick={editClicked}>
          Edit
        </Button>
      )}
    </Col>
  </Row>
);

export default ViewUserData;