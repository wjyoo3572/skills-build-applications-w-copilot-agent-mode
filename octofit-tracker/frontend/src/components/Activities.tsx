import React, { useEffect, useState } from 'react';
import { apiBaseUrl, normalizeApiResponse } from '../lib/api';

interface Activity {
  _id: string;
  type: string;
  durationMinutes: number;
  distanceKm: number;
  caloriesBurned: number;
  date: string;
  user?: { name: string };
  team?: { name: string };
}

function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiBaseUrl}/activities/`)
      .then((res) => res.json())
      .then((data) => setActivities(normalizeApiResponse<Activity>(data, 'activities')))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      {loading && <p>Loading activities...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>User</th>
              <th>Team</th>
              <th>Duration</th>
              <th>Distance</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id}>
                <td>{activity.type}</td>
                <td>{activity.user?.name || 'Unknown'}</td>
                <td>{activity.team?.name || 'Unknown'}</td>
                <td>{activity.durationMinutes} min</td>
                <td>{activity.distanceKm} km</td>
                <td>{activity.caloriesBurned}</td>
                <td>{new Date(activity.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Activities;
