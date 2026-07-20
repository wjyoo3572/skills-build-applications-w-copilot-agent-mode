import React, { useEffect, useState } from 'react';
import { apiBaseUrl, normalizeApiResponse } from '../lib/api.js';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const endpointPath = '/teams/';
    fetch(`${apiBaseUrl}${endpointPath}`)
      .then((res) => res.json())
      .then((data) => setTeams(normalizeApiResponse(data, 'teams')))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {loading && <p>Loading teams...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="list-group">
        {teams.map((team) => (
          <div key={team._id} className="list-group-item">
            <h3>{team.name}</h3>
            <p>{team.description}</p>
            <p>
              <strong>Members:</strong>{' '}
              {team.members?.map((member) => member.name).join(', ') || 'None'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
