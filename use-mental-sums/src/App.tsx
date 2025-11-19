import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Grid } from '@chakra-ui/react';

import Navbar from './Navbar';
import History from './History';
import Settings from './Settings';
import Landing from './Landing';
import Questions from './Questions';
import { SettingsProvider } from './settings/useSettings';

function App() {
  return (
    <Grid>
      <SettingsProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Landing/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
    </SettingsProvider>
    </Grid>
  );
}

export default App
