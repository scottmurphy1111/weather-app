import React, { createContext } from 'react';
import data from './data/data.json';
import Nav from './components/portfolio/Nav';
import Portfolio from './components/portfolio/Portfolio';
import BgImage from './components/portfolio/BgImage';

export const appData = {
  topPanel: data.panels.topPanel,
  secondPanel: data.panels.secondPanel,
  thirdPanel: data.panels.thirdPanel,
  fourthPanel: data.panels.fourthPanel,
  fifthPanel: data.panels.fifthPanel
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

