import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import contentImage from '../../../public/process.jpg';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: '#00b0f0',
    fontWeight: 600,
  },
}));

const ContentBanner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainDiv}>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        component="div"
      >
        Ethical Telepractice
      </Typography>
      <Image src={contentImage} layout="responsive" alt="Telepractice" />
    </Box>
  );
};

export default ContentBanner;
