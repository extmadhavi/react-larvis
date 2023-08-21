// components/ThemeToggle.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { RootState } from '../../../redux/store';
import { toggleTheme } from '../../../redux/authSlice';
const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.auth.isDarkMode);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button onClick={toggle}>
      {isDarkMode ? 'Night' : 'Day'}
    </Button>
  );
};

export default ThemeToggle;
