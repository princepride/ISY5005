import React, { useState } from 'react';
import styled  from '@emotion/styled';
import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CusHomePage from './CusHomePage';
import CusHistoryPage from './CusHistoryPage';
import CusProfilePage from './CusProfilePage';

const MainContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

const NavigationContainer = styled(Box)`
  background-color: #333;
  color: #fff;
  width: 20%;
  height: 100%;
`;

const NavigationList = styled(List)`
  margin-top: 50px;
`;

const NavigationItem = styled(ListItem)`
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const ContentContainer = styled(Box)`
  flex-grow: 1;
  padding: 2rem;
`;

const CusDashboardPage = () => {
  return (
    <MainContainer>
      <NavigationContainer>
        <NavigationList>
          <NavigationItem component={Link} to="/cus-dashboard">
            <ListItemIcon>{/* Home Icon */}</ListItemIcon>
            <ListItemText primary="Home" />
          </NavigationItem>
          <NavigationItem component={Link} to="/cus-dashboard/history">
            <ListItemIcon>{/* History Icon */}</ListItemIcon>
            <ListItemText primary="History" />
          </NavigationItem>
          <NavigationItem component={Link} to="/cus-dashboard/profile">
            <ListItemIcon>{/* Profile Icon */}</ListItemIcon>
            <ListItemText primary="Profile" />
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
      <ContentContainer>
      <Outlet />
      <Routes>
        <Route path="" element={(<CusHomePage />)} />
        <Route path="/history" element={(<CusHistoryPage/>)} />
        <Route path="/profile" element={(<CusProfilePage />)} />
      </Routes>
      </ContentContainer>
    </MainContainer>
  );
};

export default CusDashboardPage;
