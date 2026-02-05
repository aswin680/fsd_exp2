import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';

const LandingPage: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
            {/* Hero Section */}
            <Box sx={{ mb: 10, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom fontWeight="bold" color="primary">
                    Modern Responsive Landing Page
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                    Built with Material UI Grid & Container. Sections stack on mobile and appear side-by-side on larger screens.
                </Typography>
                <Button variant="contained" size="large" sx={{ mt: 2 }}>
                    Get Started
                </Button>
            </Box>

            {/* Feature Sections */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 10 }}>
                {/* Feature 1 */}
                <Box sx={{ flex: 1 }}>
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            alt="Responsive Design"
                            height="240"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Responsive Layout
                            </Typography>
                            <Typography>
                                This section occupies the full width on mobile devices and half the width on medium screens and above, creating a side-by-side layout on desktops.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>

                {/* Feature 2 */}
                <Box sx={{ flex: 1 }}>
                    <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            alt="Material UI Components"
                            height="240"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                MUI Components
                            </Typography>
                            <Typography>
                                Leveraging Container for centered content, Typography for consistent styling, and Flexbox for the layout structure. Breakpoints make it look great on any device.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* Bottom Content Area */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
                    <Typography variant="h4" gutterBottom>
                        Stacking on Mobile
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Notice how the order of elements can be changed using the 'order' prop in MUI Box. On mobile, this text will appear below the image, but on desktop, it sits on the left.
                    </Typography>
                </Box>
                <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt="Team working"
                        sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default LandingPage;
