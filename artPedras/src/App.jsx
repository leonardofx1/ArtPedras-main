import {Outlet} from 'react-router-dom';
import style from './assets/style/style.scss';

import Footer from './components/Footer';
import Header from './components/Header'
function App() {


  return (
    <div className="App">
      <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default App
