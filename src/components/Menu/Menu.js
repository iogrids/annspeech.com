import Grid from '@mui/material/Grid';
import Image from 'next/image';
import logo from './logo.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuBox: {
    marginBottom: theme.spacing(3),
  },
  header: {
    backgroundColor: '#fff',
    color: 'black',
    boxShadow: '0px 0px 0px 0px',
    position: 'static',
    '& a': {
      marginLeft: 10,
      textDecoration: 'none',
      fontWeight: 600,
      color: '#00b0f0',
    },
  },
  link: {
    padding: theme.spacing(1),
  },
  logo: {},
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <Box className={classes.menuBox}>
      <AppBar elevation={0} className={classes.header}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Image src={logo} alt="logo" />
            </Link>
          </NextLink>

          <div className={classes.grow}></div>
          <Box display={{ xs: 'none', md: 'block', lg: 'block' }}>
            <NextLink href="/#home" passHref>
              <Link className={classes.link}>HOME</Link>
            </NextLink>
            <NextLink href="/#faq" passHref>
              <Link className={classes.link}>FAQ</Link>
            </NextLink>
            <NextLink href="/#testimonials" passHref>
              <Link className={classes.link}>TESTIMONIALS</Link>
            </NextLink>
            <NextLink href="/#contact" passHref>
              <Link className={classes.link}>CONTACT</Link>
            </NextLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
