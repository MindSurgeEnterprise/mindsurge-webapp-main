import './profilecard.css';
import First from '../../../../assets/profilecard-pictures/myles_pruitt.jpg';
import Second from '../../../../assets/profilecard-pictures/TanighC.jpg';
import Third from '../../../../assets/profilecard-pictures/Q.png';

export const Card = () => {
  return (
    <section className="" id="team">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              {' '}
              <img
                className="rounded-circle mx-auto"
                src={First}
                alt="Myles Pruitt"
              />
              <h4>Myles Pruit</h4>
              <p className="text-muted">Company Founder</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li> */}
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                className="rounded-circle mx-auto"
                src={Second}
                alt="Tanigh Clark"
              />
              <h4>Tanigh Clark</h4>
              <p className="text-muted">Project Lead</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li> */}
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img className="rounded-circle mx-auto" src={Third} alt="TBD" />
              <h4>TBD</h4>
              <p className="text-muted">Lead Developer</p>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li> */}
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
