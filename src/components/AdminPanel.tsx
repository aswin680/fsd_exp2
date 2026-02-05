import React, { useState, useMemo } from 'react';
import {
    ThemeProvider,
    createTheme,
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
    Card,
    CardContent,
    Box,
    Switch,
    List,
    FormControlLabel
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const AdminPanel: React.FC = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    // Theme configuration with styled overrides
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            primary: {
                main: mode === 'light' ? '#1976d2' : '#90caf9',
            },
        },
        components: {
            // Styled overrides for Button
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 20,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        padding: '8px 20px',
                    },
                },
            },
            // Styled overrides for Card
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                        boxShadow: mode === 'light'
                            ? '0 4px 20px rgba(0,0,0,0.1)'
                            : '0 4px 20px rgba(255,255,255,0.05)',
                    },
                },
            },
            // Styled overrides for AppBar
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        borderRadius: 0,
                        backgroundColor: mode === 'light' ? '#fff' : '#1e1e1e',
                        color: mode === 'light' ? '#000' : '#fff',
                    },
                },
            },
        },
    }), [mode]);

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" elevation={0}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Admin Panel
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={mode === 'dark'}
                                    onChange={toggleTheme}
                                    color="default"
                                />
                            }
                            label={mode === 'dark' ? "Dark Mode" : "Light Mode"}
                        />
                        <IconButton onClick={toggleTheme} color="inherit">
                            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                        </IconButton>
                        <Button variant="contained" color="primary" sx={{ ml: 2 }}>
                            Log Out
                        </Button>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                        {/* Main Control Panel */}
                        <Box sx={{ flex: { md: '0 0 66.666%' } }}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        Main Control Panel
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        This is the primary workspace. On mobile devices, this panel occupies the full width. On larger screens, it stays side-by-side with the sidebar menu.
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        <Button variant="contained">Action 1</Button>
                                        <Button variant="outlined">Action 2</Button>
                                        <Button variant="text">Action 3</Button>
                                    </Box>
                                </CardContent>
                            </Card>

                            <Box sx={{ mt: 4, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                                {[1, 2].map((i) => (
                                    <Box key={i} sx={{ flex: 1 }}>
                                        <Card>
                                            <CardContent>
                                                <Typography variant="h6">Sub Panel {i}</Typography>
                                                <Typography variant="body2">
                                                    Detailed information for sub-panel {i}.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* System Status */}
                        <Box sx={{ flex: { md: '0 0 33.333%' } }}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        System Status
                                    </Typography>
                                    <List>
                                        {['Server: Online', 'Database: Connected', 'API: Active', 'Updates: Pending'].map((text, index) => (
                                            <Box key={index} sx={{ py: 1, borderBottom: '1px solid', borderColor: 'divider' }}>
                                                <Typography variant="body2">{text}</Typography>
                                            </Box>
                                        ))}
                                    </List>
                                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                                        <Typography variant="caption" color="textSecondary">
                                            Last sync: {new Date().toLocaleTimeString()}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AdminPanel;
