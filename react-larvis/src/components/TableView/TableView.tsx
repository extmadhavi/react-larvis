import React from 'react';
import { Card, Table } from 'antd'; // Make sure to import necessary components from 'antd'
import { Columns } from '../../constants/Columns';
import { Acquisition } from '../../interfaces/Acquisition';

const TableView: React.FC<{ acquisitions: Acquisition[] }> = ({ acquisitions }) => {
  return (
    <Card title="Satellite acquisitions" bordered={true} style={{ width: '100%', height: '100%', boxShadow: '0 20px 27px rgb(0 0 0/5%)' }}>
      <Table columns={Columns} pagination={{ position: ['bottomCenter'] }} dataSource={acquisitions} />
    </Card>
  );
};

export default TableView;
