import { Router } from 'express';
import ActivityModel from '../models/Activity.js';

const router = Router();

router.get('/', async (_req, res) => {
  const activities = await ActivityModel.find().populate('user team');
  res.json({
    message: 'Activities endpoint',
    activities
  });
});

router.post('/', async (req, res) => {
  const activity = await ActivityModel.create(req.body);
  res.status(201).json({
    message: 'Create activity endpoint',
    activity
  });
});

export default router;
