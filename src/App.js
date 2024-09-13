
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ContactUs from './pages/contactus/contactus';
import AboutUs from './pages/aboutus/aboutus';
import Header from './components/header/header';
import { ABOUT_US_ROUTE, CONTACT_US_ROUTE, ROOT_ROUTE } from './constants/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path={ROOT_ROUTE} exact Component={HomePage}/>
          <Route path={ABOUT_US_ROUTE} Component={AboutUs}/>
          <Route path={CONTACT_US_ROUTE} Component={ContactUs}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
