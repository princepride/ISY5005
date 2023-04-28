import React, { useState } from 'react';
import styled  from '@emotion/styled';
import { Box, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import CusHomePage from './CusHomePage';
import CusHistoryPage from './CusHistoryPage';
import CusProfilePage from './CusProfilePage';
import CusFormPage from './CusFormPage';
import sidebar from '../assets/images/sidebar.png'

const MainContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

const NavigationContainer = styled(Box)`
  background-color: #333;
  background-image: url(${sidebar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  width: 28%;
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
  padding: 1rem;
`;

const CusDashboardPage = () => {
  return (
    <MainContainer>
      {/*<NavigationContainer>
        <NavigationList>
          <NavigationItem component={Link} to="/cus-dashboard">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Home" />
          </NavigationItem>
          <NavigationItem component={Link} to="/cus-dashboard/history">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="History" />
          </NavigationItem>
          <NavigationItem component={Link} to="/cus-dashboard/profile">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Profile" />
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>*/}
      <NavigationContainer />
      <ContentContainer>
      <Outlet />
      <Routes>
        <Route path="" element={(<CusHomePage />)} />
        <Route path="/history" element={(<CusHistoryPage/>)} />
        <Route path="/profile" element={(<CusProfilePage />)} />
        <Route path="/form" element={(<CusFormPage />)} />
      </Routes>
      </ContentContainer>
    </MainContainer>
  );
};

export default CusDashboardPage;
