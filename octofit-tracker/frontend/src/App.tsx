import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1>OctoFit Tracker</h1>
        <p className="text-muted">
          Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to use Codespaces preview URLs.
          When unset, the app falls back to <code>http://localhost:8000/api</code>.
        </p>
        <p className="small">
          Current API base:{' '}
          <strong>
            {codespaceName
              ? `https://${codespaceName}-8000.app.github.dev/api`
              : 'http://localhost:8000/api'}
          </strong>
        </p>
      </header>

      <nav className="nav nav-pills mb-4">
        <NavLink to="/users" className="nav-link">
          Users
        </NavLink>
        <NavLink to="/teams" className="nav-link">
          Teams
        </NavLink>
        <NavLink to="/activities" className="nav-link">
          Activities
        </NavLink>
        <NavLink to="/leaderboard" className="nav-link">
          Leaderboard
        </NavLink>
        <NavLink to="/workouts" className="nav-link">
          Workouts
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
