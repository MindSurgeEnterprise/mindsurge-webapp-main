import './header.css';

function scrollToSection(path: string) {
  const section = document.querySelector(path);
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function NavHeader() {
  return (
    <div
      id="page-top"
      data-bs-spy="scroll"
      data-bs-target="#mainNav"
      data-bs-offset="54"
    >
      <nav
        className="navbar navbar-expand-lg fixed-top bg-dark navbar-dark"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="\src\assets\logos\Business_Logo.png"></img>
          </a>
          <button
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            className="navbar-toggler navbar-toggler-right"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto text-uppercase">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#service"
                  // onClick={() =>
                  //   scrollToSection('#root > div.servicecards-holder')
                  // }
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  // onClick={() =>
                  //   scrollToSection('#root > div.ProjectView-holder')
                  // }
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={() => scrollToSection('#root > d')}
                  style={{ fontSize: '14.4px' }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#team"
                  onClick={() =>
                    scrollToSection('#root > div.profilecards-holder')
                  }
                >
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavHeader;
