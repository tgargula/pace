import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthProvider';
import { Sign } from './pages/Sign';

const Router = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<div>Home page</div>} />
          <Route path="/sign" element={<Sign />} />
        </>
        {user && (
          <>
            <Route path="/private" element={<p>dupa</p>} />
          </>
        )}
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
