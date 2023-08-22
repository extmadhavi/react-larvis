import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';

interface EditUserDataProps {
  username: string;
  password: string;
  onUpdate: (values: any) => Promise<void>;
  onCancel: () => void;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  loading: boolean;
}

const EditUserData: React.FC<EditUserDataProps> = ({
  username,
  password,
  onUpdate,
  onCancel,
  setUsername,
  setPassword,
  loading,
}) => (
  <Form name="updateForm" onFinish={onUpdate}>
    <Form.Item name="UserName" label="UserName" rules={[{ required: true, message: 'Please enter your UserName' }]}>
      <Input placeholder="UserName" value={username} onChange={(e)=>setUsername(e.target.value)} />
    </Form.Item>
    <Form.Item
      name="newPassword"
      label="New Password"
      rules={[{ required: true, message: 'Please enter your new password' }]}
    >
      <Input.Password prefix={<LockOutlined />} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="New Password" />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} style={{ marginRight: '8px' }}>
        Update
      </Button>
      <Button type="default" onClick={onCancel}>
        Cancel
      </Button>
    </Form.Item>
  </Form>
);

export default EditUserData;
