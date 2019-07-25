import React, {useEffect} from 'react';
import { WUI_app, WUI_global } from './styles';
import AppContext from './appContext';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom';
import AppClass from '../../utils/class';
import utils from '../../utils/utils';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';

//modules
import DeviceModule from '../../modules/device/device';
import SupportModule from '../../modules/support/support';
import ResizeModule from '../../modules/resize/resize';
// import TouchModule from '../../modules/touch/touch';
import UtilsModule from '../../modules/utils/utils';

AppClass.use([ DeviceModule, SupportModule, ResizeModule, UtilsModule ]);

export default function App ({
  params =  {},
  history,
  theme: userTheme,
  children
}){
  const defaultParmas = {
    touch: { fastClicks: true },
    routes: [],
    on: {},
    fallback: undefined,
  };
  const theme = React.useMemo(()=> utils.extend({}, defaultTheme, userTheme), [userTheme]);
  const appParams = React.useMemo(()=>utils.extend({}, defaultParmas, params), [params]);
  const app = new AppClass(appParams);
  const rootRef = React.createRef();
  
  app.history = React.useMemo(()=> history || createHashHistory({hashType: 'hashbang'}), [history]);

  useEffect(()=>{

    app.root = rootRef.current;

    app.useModules();
    
    app.emit('init'); 

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={app}> 
        <WUI_app ref={rootRef}>
          <WUI_global/>
            <Router history={app.history}>
            {children}
            </Router>
        </WUI_app>
      </AppContext.Provider>
    </ThemeProvider>
  );
}
