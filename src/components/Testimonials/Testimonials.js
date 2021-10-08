import Image from 'next/image';
import noProfile from '../../../public/no-profile.png';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    color: '#00b0f0',
    fontWeight: 600,
  },
}));

const Testimonials = () => {
  const classes = useStyles();
  return (
    <section id="testimonials" className="testimonial">
      <div className="container">
        <Typography
          className={classes.title}
          variant="h4"
          gutterBottom
          component="div"
        >
          What our clients say about us!
        </Typography>

        <div className="wrapper">
          <div className="box">
            <i className="fas fa-quote-left quote" />
            <Typography variant="body1" gutterBottom component="div">
              I was very disturbed when my child was not able to speak even at
              the age of three along with difficulties such as poor eating
              skills and sensory issues. Ms.Ann gave us an insight into oral
              placement therapy which helped us in understanding the root cause
              of my child&apos;s issues. Now my child is showing progress in her
              communication skills.
            </Typography>
            <div className="content">
              <div className="info">
                <div className="name">Rachel</div>
                <div className="job">Mother of 3.7 year old</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="image">
                <Image src={noProfile} alt="process" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote" />
            <Typography variant="body1" gutterBottom component="div">
              I had been struggling with stuttering since my childhood. I had
              low confidence and self esteem due to which I had poor social
              life. I wanted a cure from this difficulty and that’s when I
              sought help from Ms.Ann, a very dedicated and passionate speech
              therapist. She introduced techniques and strategies that helped me
              to overcome stuttering. I am able to maintain my fluent speech and
              speak well with others these days.
            </Typography>
            <div className="content">
              <div className="info">
                <div className="name">Fatima</div>
                <div className="job">31 years old</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="image">
                <Image src={noProfile} alt="process" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote" />
            <Typography variant="body1" gutterBottom component="div">
              I had speech clarity issues from my childhood. I recently enrolled
              for speech therapy and I am glad I did. My articulation has
              improved a lot since then and now I can speak clearly. I must
              wholeheartedly thank Ms. Ann for all the help she has provided for
              improving my speech clarity.
            </Typography>
            <div className="content">
              <div className="info">
                <div className="name">Joel</div>
                <div className="job">19 years old</div>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
              <div className="image">
                <Image src={noProfile} alt="process" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
