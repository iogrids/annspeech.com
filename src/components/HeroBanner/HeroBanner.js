import Grid from '@mui/material/Grid';
import Image from 'next/image';
import heroImage from '../../../public/blocks.png';

const HeroBanner = () => {
  return (
    <Grid item xs={12} md={8}>
      <Image src={heroImage} layout="responsive" alt="logo" />
    </Grid>
  );
};

export default HeroBanner;
