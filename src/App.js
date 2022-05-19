import React from 'react';
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import CreateFacts from './routes/CreateFacts';
import MainPage from './routes/MainPage';
import RecommendationRoute from './routes/RecommendationRoute';
import ViewFacts from './routes/ViewFacts';
// import { useFetching } from "./hooks/useFetching";
// import {TransitionGroup} from "react-transition-group";
// import Server from './API/Server';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fact/create" element={<CreateFacts/>}/>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/fact/table" element={<ViewFacts/>}/>
        <Route path="/fact/">
          <Route path=':id/recommendations' element={<RecommendationRoute/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
