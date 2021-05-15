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
import Page from '../blocks/wrappers/page/Page';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.page}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" render={() => <Page><About /></Page>}/>
          <Route exact path="/projects" render={() => <Page><Projects /></Page>} />
          <Route exact path="/contact" render={() => <Page><Contact /></Page>} />
          <Route exact path="/mini-games/idle-clicker" component={IdleClicker} />
          <Route exact path="/mini-games/meme-creator" component={MemeCreator} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
