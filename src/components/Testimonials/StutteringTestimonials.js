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
            I am a 23 year old who has been stuttering since 4 years of age. My stuttering worsened after a brief period of illness and hospitalization. It was affecting my work life as my job involved meeting new clients and talking to them. I decided to start speech therapy and have seen great improvement since day one. I am able to converse well with my clients now and my confidence has improved a lot.
            </Typography>
            <div className="content">
              <div className="info">
                <div className="name">Noel</div>
                <div className="job">Student, 23 year old</div>
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
            My son is 13 years of age. He has had academic and language issues along with stammering since his school years. Speech therapy has helped a lot in progressing in his skills and achieving fluent speech. The therapy for stuttering was very systematic and my son learned to self evaluate and manage stuttering really well.
            </Typography>
            <div className="content">
              <div className="info">
                <div className="name">Kiran</div>
                <div className="job">Mother of 13 year old</div>
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
