import Logo from './../../assets/images/slide2.png';

const Slide2 = () => {
  return (
    <div className="flex-3">
      <div className="box-outer" id="">
        <div className="col-inner">
          <div className="icon landing-icon">
            <img src={Logo} alt="logo" width="50px" height="50px"/>
          </div>
          <h3>Own tradable Real Estate Tokens</h3>
          <p>
            At PropFTX, we employ "Blockchain" technology in our real estate marketplace. The most favourable aspect of Digital Tokens is that "there will be no more stress of finding misplaced documents," as everything will be stored in your Digital portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;