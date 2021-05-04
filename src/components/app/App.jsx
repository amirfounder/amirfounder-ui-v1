import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../blocks/header/Header';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
