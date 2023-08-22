import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartView from '../ChartView/ChartView'
import { Radio , RadioChangeEvent,Row, Col} from 'antd';
import TableView from '../TableView/TableView';
import { Acquisition } from '../../interfaces/Acquisition';

const Acquisitions: React.FC = () => {
  const [acquisitions, setacquisitions] = useState<Acquisition[]>([]);
  const [displayType, setdisplayType] = useState("tableView"); 
  
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/acquisitions';
    const authToken = localStorage.getItem("authToken") 

    axios
      .get<Acquisition[]>(apiUrl, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(response => {
        setacquisitions(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  
  const handleRadioChange  = (e: RadioChangeEvent) => {
      setdisplayType(e.target.value);
  };
 
  return (
    <Row gutter={[16, 16]} justify="center" align="middle" >
      <Col span={16}><h1 className='ant-page-header-heading'>Satellite acquisitions</h1></Col>
      <Col span={20}>
        <Radio.Group onChange={handleRadioChange} defaultValue="a">
            <Radio.Button value="tableView">Table</Radio.Button>
            <Radio.Button value="chartView">Chart</Radio.Button>
        </Radio.Group>
      </Col>
      <Col xs={24} sm={24} md={24} lg={20} xl={20}> {displayType === "tableView" ? <TableView acquisitions={acquisitions}></TableView> :
                     <ChartView data={acquisitions} />} </Col>
   </Row>
  );
};

export default Acquisitions;
