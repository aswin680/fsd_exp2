import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Dashboard as DashboardIcon, AdminPanelSettings } from '@mui/icons-material';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';

function App() {
    const [value, setValue] = React.useState(0);

    return (
        <Router>
            <Box sx={{ pb: 7 }}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/admin" element={<AdminPanel />} />
                </Routes>

                {/* Navigation Bar for easy switching between experiment parts */}
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2000 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(_event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction
                            label="Landing Page"
                            icon={<Home />}
                            component={Link}
                            to="/"
                        />
                        <BottomNavigationAction
                            label="Dashboard"
                            icon={<DashboardIcon />}
                            component={Link}
                            to="/dashboard"
                        />
                        <BottomNavigationAction
                            label="Admin Panel"
                            icon={<AdminPanelSettings />}
                            component={Link}
                            to="/admin"
                        />
                    </BottomNavigation>
                </Paper>
            </Box>
        </Router>
    );
}

export default App;
