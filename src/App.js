import React from 'react';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import MainPage from './components/routes/MainPage';
import RecommendationRoute from './components/routes/RecommendationRoute';
import ViewFacts from './components/routes/ViewFacts';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/facts" element={<ViewFacts/>}/>
        <Route path="/fact/">
          <Route path=':id/recommendations' element={<RecommendationRoute/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
