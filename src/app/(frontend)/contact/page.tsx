'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Copyright from '@/components/Copyright';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.light',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ color: 'white', maxWidth: 800, mx: 'auto' }}>
            We're here for YOU!
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography sx={{ mx: 2 }}>
          Whether you're brand new to the music scene or a hardened veteran of live shows, we're here to help provide resources and answer questions you have to assist you on your musical adventure and endeavors!
        </Typography>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ mt: 4, p: 4 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, height: 'auto', mt: 4}}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">
                    Our Office
                  </Typography>
                </Box>
                <Typography variant="body1">
                  123 High St
                  <br />
                  Columbus, OH 43215
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">
                    Phone
                  </Typography>
                </Box>
                <Typography variant="body1">
                  (614) 555-5555
                </Typography>
              </Box>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">
                    Email
                  </Typography>
                </Box>
                <Typography variant="body1">
                  greenroommeetup@gmail.com
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}