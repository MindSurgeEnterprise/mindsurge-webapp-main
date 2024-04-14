import NavHeader from './components/header/header';
import NavFooter from './components/footer/footer';
import ProjectView from './components/pages/projects/overview/projects';
import { ServiceCard } from './components/pages/services/servicecard';
import { Card } from './components/pages/profiles/cards/profilecard';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/Kaushan Script.css';
import './assets/css/Montserrat.css';
import './assets/fonts/font-awesome.min.css';
import Contact from './components/pages/Contact/contact';
import Hero from './components/pages/Hero/Hero';
import MissionView from './components/pages/mission/mission';

// Where the web application begins
function App() {
  return (
    <div>
      <NavHeader />

      <Hero />

      <MissionView />

      <ServiceCard />

      <ProjectView />

      <Card />

      <Contact />

      <NavFooter />
    </div>
  );
}
export default App;
