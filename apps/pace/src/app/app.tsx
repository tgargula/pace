import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthProvider';
import { HomePage } from './pages/HomePage';
import { Preferences } from './pages/Preferences';

import { Sign } from './pages/Sign';
import Tasks from './pages/Tasks';

const Router = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/sign" element={<Sign />} /> */}
        </>
        {user && (
          <>
            <Route path="/private" element={<p>dupa</p>} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/preferences" element={<Preferences />} />
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
