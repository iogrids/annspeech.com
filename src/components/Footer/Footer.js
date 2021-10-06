import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

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
          <Toolbar>
            <Typography
              className={classes.copyright}
              variant="body1"
              color="black"
            >
              © 2021 Annspeech
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Footer;
