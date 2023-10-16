import Sidenav from "./component/Sidenav";
import { Routes,Route } from 'react-router-dom';
import SignIn from "./component/SignIn";
import Incorrectpw from "./component/incorrectpw";
import Recoverpw from "./component/recoverpw";
function App() {
  return (
  <div>

<Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/recoverpw' element={<Recoverpw/>}/>
    <Route path='/incorrectpw' element={<Incorrectpw/>}/>
    <Route path='/dashboard' element={<Sidenav/>}/>
  </Routes>
  </div>
  );
}

export default App;
