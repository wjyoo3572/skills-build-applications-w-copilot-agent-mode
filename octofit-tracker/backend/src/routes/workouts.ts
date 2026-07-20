import { Router } from 'express';
import WorkoutModel from '../models/Workout.ts';

const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await WorkoutModel.find().sort({ scheduledAt: 1 });
  res.json({
    message: 'Workouts endpoint',
    workouts
  });
});

router.post('/', async (req, res) => {
  const workout = await WorkoutModel.create(req.body);
  res.status(201).json({
    message: 'Create workout endpoint',
    workout
  });
});

export default router;
