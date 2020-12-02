import React, { createContext } from 'react';
import data from './data/data.json';
// import PortraitOnly from './components/portfolio/PortraitOnly';
import Nav from './components/portfolio/Nav';
import Portfolio from './components/portfolio/Portfolio';
// import { connect, useDispatch } from 'react-redux';
// import { setLoadMainContent, setRemoveDelays } from './actions/initActions';
// import { setIsWheel, setMovingPanel } from './actions/wheelActions';
import BgImage from './components/portfolio/BgImage';
// import Enter from './components/portfolio/Enter';
// import Modal from './components/portfolio/Modal';

export const appData = {
  topPanel: data.panels.topPanel,
  secondPanel: data.panels.secondPanel,
  thirdPanel: data.panels.thirdPanel,
  fourthPanel: data.panels.fourthPanel,
  fifthPanel: data.panels.fifthPanel
}

export const AppContext = createContext(appData);


interface AppProps {
  setLoadMainContent: any;
  setRemoveDelays: any;
}

interface AppState {
  content: any;
}

export default function App() {
  // const [content, setContent] = useState<any>([]);
  // const dispatch = useDispatch();
  // state = {
  //   content: data
  // };

  // useEffect(() => {
  //   setContent(data.results);
  //   console.log('content', data.results);
    
  //   // setTimeout(() => {
  //   //   setLoadMainContent(true);
  //   // }, 800);

  //   // setTimeout(() => {
  //   //   setRemoveDelays(true);
  //   // }, 5000);
  // }, [content])

  // componentDidMount() {
    // setTimeout(() => {
    //   this.props.setLoadMainContent(true);
    // }, 800);

    // setTimeout(() => {
    //   this.props.setRemoveDelays(true);
    // }, 5000);
  // }

  // render() {
    return (
      <AppContext.Provider value={appData}>
        {/* <PortraitOnly /> */}
        <Nav />
        <Portfolio />
        <BgImage />
          {/* <Enter />          
          <Modal /> */}
      </AppContext.Provider>
    );
  // }
}

// const mapStateToProps = (state: any) => ({
//   init: state.init,
//   wheel: state.wheel
// });

// const mapActionsToProps = {
//   setLoadMainContent: setLoadMainContent,
//   setRemoveDelays: setRemoveDelays,
//   setIsWheel: setIsWheel,
//   setMovingPanel: setMovingPanel
// };

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(App);
