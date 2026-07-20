import React, { useEffect, useState } from 'react';
import { apiBaseUrl, normalizeApiResponse } from '../lib/api.js';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpointPath = '/api/leaderboard/';
    fetch(`${apiBaseUrl}${endpointPath}`)
      .then((res) => res.json())
      .then((data) => setLeaderboard(normalizeApiResponse(data, 'leaderboard')))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      {loading && <p>Loading leaderboard...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Team</th>
              <th>Score</th>
              <th>Season</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry) => (
              <tr key={entry._id}>
                <td>{entry.rank}</td>
                <td>{entry.user?.name || 'Unknown'}</td>
                <td>{entry.team?.name || 'Unknown'}</td>
                <td>{entry.score}</td>
                <td>{entry.season}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
