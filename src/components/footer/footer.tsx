import './footer.css';

function scrollToSection(path: string) {
  const section = document.querySelector(path);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function NavFooter() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <span className="copyright">Copyright&nbsp;© MindSurge 2024</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0)"
                    style={{ textDecoration: 'none', color: 'black' }}
                    onClick={() =>
                      scrollToSection('#root > div.profilecards-holder')
                    }
                  >
                    Meet the team
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      scrollToSection('#root > span.ProjectView-holder')
                    }
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Projects
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="javascript:void(0)"
                    onClick={() =>
                      scrollToSection('#root > div.servicecards-holder')
                    }
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default NavFooter;
