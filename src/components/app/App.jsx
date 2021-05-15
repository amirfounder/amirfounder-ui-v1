import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../blocks/header/Header';
import About from '../pages/about/About';
import Projects from '../pages/projects/Projects';
import Contact from '../pages/contact/Contact';
import Footer from '../blocks/footer/Footer';
import { useEffect } from 'react';
import Page from '../wrappers/custom-wrappers/page/Page';

function App() {

  useEffect(() => {
    console.log('You\re a wizard, Harry!... https://rb.gy/w7s3bv')
  })

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.page}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" render={() => <Page><About /></Page>}/>
          <Route exact path="/projects" render={() => <Page><Projects /></Page>} />
          <Route exact path="/contact" render={() => <Page><Contact /></Page>} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
