import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeakersListPage } from '../pages/Speakers/SpeakersListPage';
import { SpeakerDetailPage } from '../pages/Speakers/SpeakerDetailPage';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/speakers" element={<SpeakersListPage />} />
        <Route path="/speakers/:id" element={<SpeakerDetailPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
