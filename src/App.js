import Routes from './routes';

import Provider from './store'

function App() {
  return (
    <Provider>
      <Routes />  
    </Provider>     
  );
}

export default App;
