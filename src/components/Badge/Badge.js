import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import CardMedia from '@mui/material/CardMedia';

import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    color: '#00b0f0',
    fontWeight: 600,
  },
  item: {
    color: '#fff',
  },
}));

const Badge = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        className={classes.title}
        variant="h5"
        gutterBottom
        component="div"
      >
        Certified and Licensed Therapist
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <List
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  bgcolor: '#00b0f0',
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Online Assessment and Therapy"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Online Counselling and Guidance
"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Home Training Program
"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <List
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  bgcolor: '#404040',
                }}
                aria-label="contacts"
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Referrals and Continuous Support
"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Maintenance of Confidentiality
"
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.item}
                      primary="Evidence Based Practice

"
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Badge;
