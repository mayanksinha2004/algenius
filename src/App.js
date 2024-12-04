import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing_page/landing_page';
import Error from './components/Error_404/error404';
import ResponsiveLandingComponent from './components/landing_page/Landing_Main';
function App() {
  return (
    <div className="">
       <Routes>
        <Route path="/" element={<ResponsiveLandingComponent />} />
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
