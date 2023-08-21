import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OreSiteHistogram from './OreSiteHistogram'
import {Table,Pagination } from 'antd' 
interface AcquisitionData { 
 timestamp: number;
  ore_sites: number;
}
const Acquisitions: React.FC = () => {
  const [acquisitions, setacquisitions] = useState<AcquisitionData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const apiUrl = 'http://localhost:8080/acquisitions';
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGljZSJ9.4E-8lcUi0JvcTV1AOAoPjBmuFokGR2aR6gKtufMp5qU'; // Replace with your actual authentication token

    axios
      .get<AcquisitionData[]>(apiUrl, {
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
  
  const itemsPerPage = 5;
  const columns = [
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
    { title: 'Ore Sites', dataIndex: 'ore_sites', key: 'ore_sites' },
  ];
  //const PaginatedData = (page: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = acquisitions.slice(startIndex, endIndex);
  //};
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h2>User List GET /acquisitions</h2>
      <OreSiteHistogram data={acquisitions} />
      {/* {acquisitions.map(acquisition => (
        <div key={acquisition.timestamp}>
          <p>timestamp: {acquisition.timestamp}</p>
          <p>sites: {acquisition.ore_sites}</p>
        </div>
      ))} */}
      <div>
      <Table columns={columns} dataSource={currentData} pagination={false} />
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={acquisitions.length}
        onChange={handlePageChange}
      />
    </div>
    </div>
  );
};

export default Acquisitions;
