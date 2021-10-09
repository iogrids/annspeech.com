import { Box } from '@mui/system';

const Pricing = () => {
  return (
    <Box>
      <h2 classNameName="heading-primary">our Pricing</h2>
      <div className="plan-section">
        <div className="plan basic">
          <h2 className="plan-heading">Basic</h2>
          <h3 className="plan-price">
            <span className="dollar">$</span>99
          </h3>
          <ul className="plan-features">
            <li className="plan-item">100 GB Storage</li>
            <li className="plan-item">2 Users Allowed</li>
            <li className="plan-item">Send up to 3GB</li>
            <li className="plan-item">Support</li>
          </ul>
          <a href="#" className="btn buy-now">
            Buy Now
          </a>
        </div>

        <div className="plan pro">
          <h2 className="plan-heading">Professional</h2>
          <h3 className="plan-price">
            <span className="dollar">$</span>199
          </h3>
          <ul className="plan-features">
            <li className="plan-item">300 GB Storage</li>
            <li className="plan-item">3 Users Allowed</li>
            <li className="plan-item">Send up to 6 GB</li>
            <li className="plan-item">Support</li>
          </ul>
          <a href="#" className="btn btn-blue">
            Buy Now
          </a>
        </div>

        <div className="plan master">
          <h2 className="plan-heading">Master</h2>
          <h3 className="plan-price">
            <span className="dollar">$</span>299
          </h3>
          <ul className="plan-features">
            <li className="plan-item">600 GB Storage</li>
            <li className="plan-item">9 Users Allowed</li>
            <li className="plan-item">Send up to 9GB</li>
            <li className="plan-item">Master Support</li>
          </ul>
          <a href="#" className="btn buy-now">
            Buy Now
          </a>
        </div>
      </div>
    </Box>
  );
};

export default Pricing;
