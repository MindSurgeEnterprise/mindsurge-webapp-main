import './projects.css';
import Third from '../../../../assets/profilecard-pictures/Q.png';

function ProjectView() {
  return (
    <section className="bg-light container-fluid" id="portfolio">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="text-uppercase section-heading">THINKBOX</h2>
          <h3 className="text-muted section-subheading">
            Here is what we are working on.
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal1"
              data-bs-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>{' '}
              <img className="img-fluid" src={Third} />
            </a>
            <div className="portfolio-caption">
              <h4>Threads</h4>
              <p className="text-muted">Illustration</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal2"
              data-bs-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>{' '}
              <img className="img-fluid" src={Third} />
            </a>
            <div className="portfolio-caption">
              <h4>Explore</h4>
              <p className="text-muted">Graphic Design</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal3"
              data-bs-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>{' '}
              <img className="img-fluid" src={Third} />
            </a>
            <div className="portfolio-caption">
              <h4>Finish</h4>
              <p className="text-muted">Identity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectView;
