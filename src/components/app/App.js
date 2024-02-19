import './app.scss';

import Promo from '../promo/Promo';
import About from '../about/About';
import Experience from '../experience/Experience';
import Contacts from '../contacts/Contacts';
import Sidepanel from '../sidepanel/Sidepanel';

function App() {
  return (
    <div className="App">
      <Sidepanel/>
      <Promo/>
      <About/>  
      <Experience/>
      <Contacts/>
    </div>
  );
}

export default App;
