
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ContactUs from './pages/contactus/contactus';
import AboutUs from './pages/aboutus/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={'/'} exact Component={HomePage}/>
          <Route path={'/about-us'} Component={AboutUs}/>
          <Route path={'/contact-us'} Component={ContactUs}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
