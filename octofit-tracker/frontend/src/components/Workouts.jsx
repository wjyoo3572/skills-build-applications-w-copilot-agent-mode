import React, { useEffect, useState } from 'react';
import { apiBaseUrl, normalizeApiResponse } from '../lib/api.js';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiBaseUrl}/workouts/`)
      .then((res) => res.json())
      .then((data) => setWorkouts(normalizeApiResponse(data, 'workouts')))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      {loading && <p>Loading workouts...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="list-group">
        {workouts.map((workout) => (
          <div key={workout._id} className="list-group-item">
            <h3>{workout.title}</h3>
            <p>{workout.description}</p>
            <p>
              <strong>Difficulty:</strong> {workout.difficulty}
            </p>
            <p>
              <strong>Duration:</strong> {workout.durationMinutes} min
            </p>
            <p>
              <strong>Scheduled:</strong> {new Date(workout.scheduledAt).toLocaleString()}
            </p>
            <p>
              <strong>Exercises:</strong> {workout.exercises?.join(', ') || 'None'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
