import { Data } from './Data';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
              <div
                key={index}
                className="faq-singular"
                onClick={() => toggle(index)}
              >
                <div>
                  <h3 className="faq-question">{item.question}</h3>

                  <div
                    className={
                      clicked === index ? 'faq-answer-show' : 'faq-answer'
                    }
                  >
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
