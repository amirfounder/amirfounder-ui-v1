import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../blocks/header/Header';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import IdleClicker from '../mini-apps/idle-clicker/main/IdleClicker';
import MemeCreator from '../mini-apps/meme-creator/main/MemeCreator';
import Footer from '../blocks/footer/Footer';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.page}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mini-games/idle-clicker" component={IdleClicker} />
          <Route exact path="/mini-games/meme-creator" component={MemeCreator} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
