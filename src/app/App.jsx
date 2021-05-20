import React from 'react'
import styles from './App.module.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from '../components/pages/home/Home';
import Header from '../components/blocks/header/Header';
import About from '../components/pages/about/About';
import Projects from '../components/pages/projects/Projects';
import Contact from '../components/pages/contact/Contact';
import Footer from '../components/blocks/footer/Footer';
import { useEffect } from 'react';
import Page from '../components/wrappers/custom-wrappers/page/Page';
import { useMainContext } from '../context/MainContext';
import { getCookieValue } from '../utils/CookieService';
import PageNotFound from '../components/pages/page-not-found/PageNotFound';
import Pipeline from '../components/pages/pipeline/Pipeline';
import IdleClicker from '../components/idle-clicker/IdleClicker';
import GamingHeader from '../components/blocks/gaming-header/GamingHeader';

function App() {

  const {
    setThemeColor,
    setThemeHighlightColor
  } = useMainContext()

  const location = useLocation()

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
      {location.pathname === '/idle-clicker' && <GamingHeader />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" render={() => <Page><About /></Page>}/>
          <Route exact path="/projects" render={() => <Page><Projects /></Page>} />
          <Route exact path="/pipeline" render={() => <Page><Pipeline /></Page>} />
          <Route exact path="/contact" render={() => <Page><Contact /></Page>} />
          <Route exact path="/page-not-found" render={() => <Page><PageNotFound /></Page>} />
          
          <Route exact path="/idle-clicker" component={IdleClicker}/>
          <Route path="/" render={() => <Page><PageNotFound /></Page>} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
