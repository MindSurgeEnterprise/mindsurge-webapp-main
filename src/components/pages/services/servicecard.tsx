import './servicecard.css';

export const ServiceCard = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Mobile Applications</h4>
            <p className="text-muted">
              Mindsurge develops both IOS and Android applications on a variety of mobile devices.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Websites</h4>
            <p className="text-muted">
              Mindsurge specializes in coding languages such as React for programming websites.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="section-heading">Security</h4>
            <p className="text-muted">
              Mindsurge understands security is a big issue in todays modern world and always develops software applications with latests security standards in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
