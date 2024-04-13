import Her from '../../../assets/logos/Hero.png';

const Hero = () => {
  return (
    <header className="masthead" style={{ backgroundImage: `url(${Her})` }}>
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
            <span>Bringing like-minded people together</span>
          </div>
          <div className="intro-heading text-uppercase">
            <span>MindSurge</span>
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase"
            role="button"
            href="#services"
          >
            Tell mE more
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
