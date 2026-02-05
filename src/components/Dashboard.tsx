import React, { useState } from 'react';
import styled from 'styled-components';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Card,
    CardContent,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    Settings as SettingsIcon,
    Person as PersonIcon,
    ChevronLeft as ChevronLeftIcon
} from '@mui/icons-material';

// Styled Components for Layout
const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main<{ open: boolean; isMobile: boolean }>`
  flex-grow: 1;
  padding: 24px;
  margin-top: 64px;
  transition: margin 0.3s ease;
  margin-left: ${props => (props.isMobile ? '0' : (props.open ? '240px' : '64px'))};
`;

const SidebarContainer = styled(Drawer)`
  flex-shrink: 0;
  white-space: nowrap;
  
  .MuiDrawer-paper {
    width: 240px;
    box-sizing: border-box;
    transition: width 0.3s ease;
    overflow-x: hidden;
    margin-top: 64px;
    height: calc(100% - 64px);
  }

  &.collapsed .MuiDrawer-paper {
    width: 64px;
  }
`;

const Dashboard: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Profile', icon: <PersonIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
        <Root>
            {/* Top Navbar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleSidebar}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Collapsible Sidebar */}
            <SidebarContainer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? sidebarOpen : true}
                onClose={toggleSidebar}
                className={!sidebarOpen && !isMobile ? 'collapsed' : ''}
            >
                <List>
                    {menuItems.map((item) => (
                        <ListItemButton key={item.text} sx={{ minHeight: 48, px: 2.5 }}>
                            <ListItemIcon sx={{ minWidth: 0, mr: sidebarOpen || isMobile ? 3 : 'auto', justifyContent: 'center' }}>
                                {item.icon}
                            </ListItemIcon>
                            {(sidebarOpen || isMobile) && <ListItemText primary={item.text} />}
                        </ListItemButton>
                    ))}
                </List>
                {!isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                        <IconButton onClick={toggleSidebar}>
                            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                )}
            </SidebarContainer>

            {/* Main Content Area with Card Grid */}
            <MainContent open={sidebarOpen} isMobile={isMobile}>
                <Typography variant="h4" gutterBottom>
                    Overview
                </Typography>
                <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
                    gap: 3 
                }}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Card elevation={2} key={i}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Stat Card {i}
                                </Typography>
                                <Typography variant="h3" color="primary">
                                    {Math.floor(Math.random() * 100)}%
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Performance increase this week.
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </MainContent>
        </Root>
    );
};

export default Dashboard;
