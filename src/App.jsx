import Routes from './routes';

import GlobalStyle from './styles/global';
import Provider from './store';

function App() {
  return (
    <>
    
    <Provider>
      <Routes />
      <GlobalStyle />  
    </Provider>  
    
   </>
  );
}

export default App;
