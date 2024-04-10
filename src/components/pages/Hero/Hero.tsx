import Her from '../../../assets/logos/Hero.png';

const Hero = () => {
  return (
    <header className="masthead" style={{ backgroundImage: `url(${Her})` }}>
      <div className="container">
        <div className="row intro-text">
          <div className="col-md-12 intro-lead-in">
            <h1>Bringing like-minded people together</h1>{' '}
          </div>
          <div className="intro-heading text-uppercase">
            <h2>MindSurge</h2>
          </div>
          <div>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              role="button"
              href="#services"
              aria-label="Learn more about our services"
            >
              Tell Me More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
