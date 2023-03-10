import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import './styles/index.scss'
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navbar";
import GoalBoard from "./pages/GoalBoard";
import HistoryBoard from "./pages/HistoryBoard";
import ProfileBoard from "./pages/ProfileBoard";
import  './config/i18n.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Suspense fallback="...is loading">
          <BrowserRouter>
            <NavBar></NavBar>
              <main id="main-app">
                  <Routes>
                      <Route path="/" Component={DashBoard}></Route>
                      <Route path="/goals" Component={GoalBoard}></Route>
                      <Route path="/history" Component={HistoryBoard}></Route>
                      <Route path="/profile" Component={ProfileBoard}></Route>
                      <Route Component={NotFound}></Route>
                  </Routes>
              </main>
          </BrowserRouter>
      </Suspense>
  </React.StrictMode>,
)
