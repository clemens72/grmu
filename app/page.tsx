import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import NextLink from 'next/link';
import Copyright from './components/Copyright';
import heroimg from '../public/banner.jpg';

export default function PublicPage() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '70vh',
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroimg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            padding: '0 20px',
          }}
        >
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            color: 'white',
            mb: 2,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}>
            Columbus' Homeroom for Musicians
          </Typography>
          <Typography variant="h5" sx={{ 
            color: 'white',
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}>
            Meet ups, events and knowledge for songwriters and musicians in central Ohio
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/contact"
            sx={{ 
              fontSize: '1.2rem',
              textTransform: 'none',
              borderRadius: '4px',
            }}
          >
            Join the Mailing List
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              Who is this for?
            </Typography>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
            Our central Ohio music community!<br />
            For anyone who makes or works with music.<br />
            We are supporters NOT competitors.<br />
            We don’t discriminate. All are welcome here. 💚
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              When does this take place?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            Columbus Green Room Meet Up-The second Monday or Tuesday of each month.<br />
            Newark Green Room Meet Ups…Dates, time and locations are announced a week or more prior to meet ups.<br />
            Check your notifications for The Green Room Meet Up posts and event announcements.<br />
            Instagram: @green.room.meetup
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            How will this benefit me?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            It’s a great place for networking, asking questions or getting advice on how to help your music career. It builds friendships while getting to know others in the business that can give you resources and/or collab with you on projects. All this and more while having a great time hanging out in a casual social environment. There’s no structure…just fun. Most importantly….it makes our music community STRONGER!!!
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Do I need to perform or sign up?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            Nope! Leave your instruments at home and take the night off from performing. Let’s hang out!
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            How much to join?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            It’s FREE!!! Donations are appreciated but NOT required.
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            I’m hungry!
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            No problem! We provide pizza and snacks for the group if a food truck or food service isn’t available at that location.
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Can I bring a friend?
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            Of course! Bring someone who you think could benefit from this. Also, not everyone is great at social situations alone and I get that! We encourage to keep the group a music scene gathering but there are always exceptions. If you’d like to bring a non music friend/significant other as support we’ll be happy to hang with them too! If you’re a minor we’ll expect you’ll be bringing your parent or guardian since we usually meet where alcohol is being served.
            </Typography>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            Feel free to DM me for questions!
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
            Thanks! Can’t wait to hang out! 💚
            </Typography>
          </Grid>
        </Grid>

{/*         <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            component={NextLink}
            href="/contact"
            sx={{ 
              fontSize: '1.1rem',
              textTransform: 'none',
              borderRadius: '4px',
            }}
          >
            Contact Us
          </Button>
        </Box> */}

        <Box sx={{ mt: 8, mb: 2 }}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}