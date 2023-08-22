import React from 'react';
import { Avatar, Row, Col, Button, Input, Form } from 'antd';
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
       
            <Form.Item label="Username" name="username">
              <Input placeholder="Username" value={user.name} />
            </Form.Item>
            {user.password && 
            <Form.Item label="Password" name="password">
              <Input.Password  value={user.password}/>
            </Form.Item>
            }
    
        
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