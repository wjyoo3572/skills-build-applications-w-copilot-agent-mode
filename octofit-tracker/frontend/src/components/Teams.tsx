import React, { useEffect, useState } from 'react';
import { apiBaseUrl, normalizeApiResponse } from '../lib/api';

interface Team {
  _id: string;
  name: string;
  description: string;
  members?: Array<{ _id: string; name: string }>;
}

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBaseUrl}/teams/`)
      .then((res) => res.json())
      .then((data) => setTeams(normalizeApiResponse<Team>(data, 'teams')))
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
