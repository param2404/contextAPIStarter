import Carousel from "../components/carousel";
import ReasonLogo from './../assets/images/reason.png';

const Landing = () => {
  return (
    <>
      <section id="top_banner">
        <div className="container">
          <div>
            <div>
              <h1>
                World’s <br /> REAL ESTATE Marketplace{" "}
                <span className="star">⭐️</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="right-box"></div>
            <div className="btn-outer">
              <a href="#" className="blue-btn">
                Invest Now
              </a>
              <a href="#" className="no-bg-btn">
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="readings">
        <div className="container d-flex justify-content-around">
          <div className="d-flex justify-content-evenly align-items-center w-100 p-10">
            <h6>Properties</h6>
            <h5>34</h5>
          </div>
          <div className="d-flex justify-content-evenly align-items-center w-100 p-10">
            <h6>Token</h6>
            <h5>50</h5>
          </div>
          <div className="d-flex justify-content-evenly align-items-center w-100 p-10">
            <h6>Users</h6>
            <h5>100</h5>
          </div>
        </div>
      </section>
      <section id="carousel_area">
        <div id="carousel_area_header" className="d-flex justify-content-center">
          <h2>Real State Made Affordable</h2>
        </div>
        <Carousel />
      </section>
      <section id="reason" className="d-flex justify-content-center flex-column align-items-center">
        <div id="reason_header">
          <h2>Why PropFTX?</h2>
        </div>
        <img src={ReasonLogo} alt="logo" loading="lazy" style={{ maxWidth: '100%' }} />
      </section>
      <section id="multiple_asset">
        <div id="multiple_asset_header" className="d-flex justify-content-center flex-column align-items-center">
          <h2>Invest In Multiple Asset Classes</h2>
          <p>PropFTX is a one-stop-shop investment platform that brings all asset classes together in a single marketplace under one roof.</p>
        </div>
        <div className="multiple_asset_content">

        </div>
      </section>
      <section id="selection_criteria">
        <div id="selection_criteria_header" className="d-flex justify-content-center flex-column align-items-center">
          <h2>Property Selection Criteria</h2>
          <p>We aim to acquire the best-in-industry collection with thorough research and due diligence.</p>
        </div>
      </section>
      <section id="we_invest">
        <div id="we_invest_header" className="d-flex justify-content-center flex-column align-items-center">
          <h2>How Do We Invest ?</h2>
          <p>Start investing in 4 simple steps.</p>
        </div>
      </section>
      <section id="membership">
        <div id="membership_header" className="d-flex justify-content-center flex-column align-items-center">
          <h2>Join our premium membership</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="btn btn-success">Submit</button>
        </div>
      </section>
      <section id="we_work">
        <div id="we_work_header" className="d-flex justify-content-center flex-column align-items-center">
          <h2>How Do We Work ?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <section id="dashboards">

      </section>
    </>
  )
};

export default Landing;