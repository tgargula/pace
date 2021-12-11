import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider, useAuth } from './context/AuthProvider';
import { HomePage } from './pages/HomePage';
import { Preferences } from './pages/Preferences';

import { Sign } from './pages/Sign';
import Tasks from './pages/Tasks';
import { EatingPreference } from './pages/SinglePreference/EatingPreference';
import { OtherPreference } from './pages/SinglePreference/OtherPreference';
import { SleepingPreference } from './pages/SinglePreference/SleepingPreference';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
const Router = () => {
  const { user } = useAuth();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign" element={<Sign />} />

            <Route path="/preferences" element={<Preferences />} />
            <Route path="/EatingPreference" element={<EatingPreference />} />
            <Route path="/OtherPreference" element={<OtherPreference />} />
            <Route
              path="/SleepingPreference"
              element={<SleepingPreference />}
            />
          </>
          {user && (
            <>
              <Route path="/private" element={<p>dupa</p>} />
              <Route path="/tasks" element={<Tasks />} />
            </>
          )}
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
