
//Imports for library
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Imports for Components
import HomePage from './screens/homepage/HomePage';
import LoginPage from './screens/auth/signinPage/signin.jsx';
import ProtectedRoute from './ProtectedRoute';

//Imports for Styling
import './screens/auth/signinPage/signin.css';
import './screens/homepage/homePage.css';






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home-page" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;