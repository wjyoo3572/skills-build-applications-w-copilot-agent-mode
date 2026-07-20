import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import logo from '../../../docs/octofitapp-small.png'
import './App.css'

const links = [
  ['Activities', '/activities'],
  ['Leaderboard', '/leaderboard'],
  ['Teams', '/teams'],
  ['Users', '/users'],
  ['Workouts', '/workouts'],
]

export default function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/activities">
            <img src={logo} width="42" height="42" alt="" />
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav flex-row flex-wrap gap-1">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/activities" replace />} />
        </Routes>
      </main>
    </>
  )
}
