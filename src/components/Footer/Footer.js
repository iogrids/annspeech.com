import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  appbar: {
    marginTop: theme.spacing(3),
    background: '#2E3B55',
  },
  copyright: {
    color: '#fff',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <AppBar className={classes.appbar} position="static">
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Toolbar>
                <Typography
                  className={classes.copyright}
                  variant="body1"
                  color="black"
                >
                  © 2021 Annspeech
                </Typography>
              </Toolbar>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
