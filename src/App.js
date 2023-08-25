
import Home from './components/Home';

import Dataprovider from './Context/Dataprovider';

function App() {
  return (
    <Dataprovider>
   <Home></Home>
   </Dataprovider>
  );
}

export default App;
