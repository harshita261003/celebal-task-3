import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/styles';

const ThemeSwitcher = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
};

export default ThemeSwitcher;
