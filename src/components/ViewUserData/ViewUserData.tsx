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
    <Col span={6} className="centered-card" style={{ padding: '20px', minHeight: '350px' }}>
      <Avatar size={100} className="centered-avatar" style={{ margin: '20px' }}>
        {user.name?.charAt(0)}
      </Avatar>
      <div className="user-details">
        <Form
            name="edit-user"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            
            autoComplete="off"
        >
            <Form.Item label="Username" name="username">
              <Input placeholder="Username" defaultValue={user.name} />
            </Form.Item>
            {user.password && 
            <Form.Item label="Password" name="password">
              <Input.Password  defaultValue={user.password}/>
            </Form.Item>
            }
        </Form>
        
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