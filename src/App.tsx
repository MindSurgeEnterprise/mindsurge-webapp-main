import NavHeader from './components/header/header';
import NavFooter from './components/footer/footer';
// import MissionView from './components/pages/mission/mission';
import ProjectView from './components/pages/projects/overview/projects';
import { ServiceCard } from './components/pages/services/servicecard';
import { Card } from './components/pages/profiles/cards/profilecard';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Kaushan Script.css';
import './assets/css/Montserrat.css';
import './assets/fonts/font-awesome.min.css';
import Contact from './components/pages/Contact/contact';
import Hero from './components/pages/Hero/Hero';

// Where the web application begins
function App() {
  return (
    <>
      <>
        <>
          <span className="NavigationHeader-holder">
            <NavHeader />
          </span>

          <div className="Hero-section">
            <Hero />
          </div>

          {/* <span className="MissionView-holder">
            <MissionView />
          </span> */}
        </>

        <div className="servicecards-holder">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-uppercase section-heading">Services</h2>
              <h3 className="text-muted section-subheading">
                Lorem ipsum dolor sit amet consectetur
              </h3>
            </div>
          </div>
          <ServiceCard />
        </div>

        <div className="ProjectView-holder bg-light">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="text-uppercase section-heading">THINKBOX</h2>
              <h3 className="text-muted section-subheading">
                Here is what we are working on.
              </h3>
            </div>
          </div>
          <ProjectView />
        </div>

        <div className="profilecards-holder">
          <Card />
        </div>
      </>

      <div>
        <Contact />
      </div>

      <span className="navfooter-holder">
        <NavFooter />
      </span>
    </>
  );
}
export default App;
