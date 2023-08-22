import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Alert } from 'antd';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleGlobalError = (error: Event) => {
      console.error('Global error:', error);
      setError('An error occurred.');
    };

    const handleAxiosError = (error: AxiosError) => {
      console.error('Axios error:', error);
      setError(error.message || 'An error occurred.');
    };

    window.addEventListener('error', handleGlobalError);
    const axiosInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        handleAxiosError(error);
        return Promise.reject(error);
      }
    );

    return () => {
      window.removeEventListener('error', handleGlobalError);
      axios.interceptors.response.eject(axiosInterceptor);
    };
  }, []);

  return (
    <>
      {error && (
        <Alert
          message="Warning"
          description={error}
          type="error"
          showIcon
          closable
          onClose={() => setError(null)} // Clear error on close
        />
      )}
      {children}
    </>
  );
};

export default ErrorBoundary;
