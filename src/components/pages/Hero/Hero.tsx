import hero from '../../../assets/logos/Hero.png';

const Hero = () => {
  return (
    <header
      className="masthead"
      style={{
        backgroundImage: `url(${hero})`,
        marginTop: '100px',
      }}
    >
      <div className="container">
        <div className="intro-text">
        <div className="intro-heading text-uppercase">
            <span>MindSurge</span>
          </div>
          <div className="intro-lead-in pb-30">
            <span>Solving real world issues</span>
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase"
            role="button"
            href="#services"
          >
            Tell me more
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
