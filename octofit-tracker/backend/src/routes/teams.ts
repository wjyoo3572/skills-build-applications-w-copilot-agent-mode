import { Router } from 'express';
import TeamModel from '../models/Team.ts';

const router = Router();

router.get('/', async (_req, res) => {
  const teams = await TeamModel.find().populate('members');
  res.json({
    message: 'Teams endpoint',
    teams
  });
});

router.post('/', async (req, res) => {
  const team = await TeamModel.create(req.body);
  res.status(201).json({
    message: 'Create team endpoint',
    team
  });
});

export default router;
