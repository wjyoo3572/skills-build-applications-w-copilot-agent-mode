import { Router } from 'express';
import LeaderboardModel from '../models/Leaderboard.ts';

const router = Router();

router.get('/', async (_req, res) => {
  const leaderboard = await LeaderboardModel.find().populate('user team').sort({ rank: 1 });
  res.json({
    message: 'Leaderboard endpoint',
    leaderboard
  });
});

export default router;
