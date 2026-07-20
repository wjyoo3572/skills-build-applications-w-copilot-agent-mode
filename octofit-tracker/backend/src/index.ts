import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.ts';
import usersRouter from './routes/users.ts';
import teamsRouter from './routes/teams.ts';
import activitiesRouter from './routes/activities.ts';
import leaderboardRouter from './routes/leaderboard.ts';
import workoutsRouter from './routes/workouts.ts';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(cors({
  origin: codespaceName ? apiBaseUrl : '*'
}));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker backend is running.' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
  if (codespaceName) {
    console.log(`Codespaces API URL: https://${apiHost}`);
  }
});

export default app;
