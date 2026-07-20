import { Router } from 'express';
import UserModel from '../models/User.js';

const router = Router();

router.get('/', async (_req, res) => {
  const users = await UserModel.find().populate('team');
  res.json({
    message: 'Users endpoint',
    users
  });
});

router.post('/', async (req, res) => {
  const user = await UserModel.create(req.body);
  res.status(201).json({
    message: 'Create user endpoint',
    user
  });
});

export default router;
