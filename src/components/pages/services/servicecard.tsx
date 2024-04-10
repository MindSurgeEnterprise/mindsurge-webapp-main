import './servicecard.css';

export const ServiceCard = () => {
  return (
    <section id="service">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">Services</h2>
          <h3 className="text-muted section-subheading">
            Lorem ipsum dolor sit amet consectetur
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Mobile Apps</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="col-md-6">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Website</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          {/* <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Web Security</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};
