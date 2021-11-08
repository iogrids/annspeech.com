import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@mui/system';

const Data = [
  {
    question: 'How is evaluation done? Is it through video calls?',
    answer:
      'I will get in touch with you initially over phone/emails. This will help me in preparing for the evaluation session. Following this, a video session for assessment will be scheduled mostly on Zoom.',
  },
  {
    question: 'What is the duration of each session?',
    answer:
      'An assessment session will be for one hour and each therapy session will be for 45 minutes.',
  },
  {
    question: 'How well online therapy works for adults?',
    answer:
      'Online speech therapy works well for adults with stuttering/stammering, pronunciation difficulties, voice issues, communication difficulties due to stroke, parkinsons disease, dementia etc. Great success has been seen for adolescents and adults who choose online speech therapy services. Additionally, online speech therapy saves time and cost of travel. You can also attend sessions from the convenience of your home.',
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    color: '#00b0f0',
    fontWeight: 600,
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <Typography
          className={classes.title}
          variant="h4"
          gutterBottom
          component="div"
        >
          Frequently Asked Questions
        </Typography>
        <div className="faqs-container">
          {Data.map((item, index) => {
            return (
              <Box
                key={index}
                className="faq-singular"
                onClick={() => toggle(index)}
              >
                <Box>
                  <Typography
                    className="faq-question"
                    variant="body1"
                    component="div"
                  >
                    {item.question}
                  </Typography>

                  <Box
                    sx={{ padding: '0 0 20px 0' }}
                    className={
                      clicked === index ? 'faq-answer-show' : 'faq-answer'
                    }
                  >
                    <Typography variant="body1" component="div">
                      {item.answer}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
