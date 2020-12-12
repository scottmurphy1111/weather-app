import React, { createContext } from 'react';
import data from './data/data.json';
import Nav from './components/portfolio/Nav';
import Portfolio from './components/portfolio/Portfolio';
import BgImage from './components/portfolio/BgImage';

export const appData = {
  home: data.panels.home,
  about: data.panels.about,
  skills: data.panels.skills,
  projects: data.panels.projects,
  contact: data.panels.contact
}

export const AppContext = createContext(appData);

export default function App() {
    return (
      <AppContext.Provider value={appData}>
        <Nav />
        <Portfolio />
        <BgImage />
      </AppContext.Provider>
    );
}

