import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OreSiteHistogram from './OreSiteHistogram'
import { Radio , RadioChangeEvent,Row, Col} from 'antd';
import TableView from './TableView';
import { Acquisition } from '../../../interfaces/Acquisition';

const Acquisitions: React.FC = () => {
  const [acquisitions, setacquisitions] = useState<Acquisition[]>([]);
  const [displayType, setdisplayType] = useState(1); 
  
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
    <Row gutter={[16, 16]} justify="center" >
      <Col span={16}><h1 className='ant-page-header-heading'>Satellite acquisitions</h1></Col>
      <Col span={16}>
        <Radio.Group onChange={handleRadioChange} defaultValue="a">
            <Radio.Button value="1">Table</Radio.Button>
            <Radio.Button value="2">Chart</Radio.Button>
        </Radio.Group>
      </Col>
       
          
      
      <Col span={16}> { displayType == 1 ?  <TableView acquisitions={acquisitions}></TableView> :  <OreSiteHistogram data={acquisitions} />} </Col>
   
       
      </Row>
  );
};

export default Acquisitions;
