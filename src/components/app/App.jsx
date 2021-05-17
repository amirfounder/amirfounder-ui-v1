import React from 'react'
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
import { useMainContext } from '../../context/MainContext';
import { getCookieValue } from '../../utils/CookieService';
import PageNotFound from '../pages/page-not-found/PageNotFound';
import Pipeline from '../pages/pipeline/Pipeline';

function App() {

  const {
    setThemeColor,
    setThemeHighlightColor
  } = useMainContext()

  useEffect(() => {
    console.log('You\re a wizard, Harry!... https://rb.gy/w7s3bv')
    const cookieThemeColor = getCookieValue('themeColor')
    const cookieThemeHighlightColor = getCookieValue('themeHighlightColor')
    setThemeColor(cookieThemeColor)
    setThemeHighlightColor(cookieThemeHighlightColor)
    document.documentElement.style.setProperty('--theme-color', cookieThemeColor)
    document.documentElement.style.setProperty('--theme-highlight-color', cookieThemeHighlightColor)
  }, [setThemeColor, setThemeHighlightColor])

  return (
    <div className={styles.main}>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" render={() => <Page><About /></Page>}/>
          <Route exact path="/projects" render={() => <Page><Projects /></Page>} />
          <Route exact path="/pipeline" render={() => <Page><Pipeline /></Page>} />
          <Route exact path="/contact" render={() => <Page><Contact /></Page>} />
          <Route exact path="/page-not-found" render={() => <Page><PageNotFound /></Page>} />
          <Route path="/" render={() => <Page><PageNotFound /></Page>} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
