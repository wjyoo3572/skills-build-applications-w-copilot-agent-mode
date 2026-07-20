import mongoose from 'mongoose';
import UserModel from '../models/User.ts';
import TeamModel from '../models/Team.ts';
import ActivityModel from '../models/Activity.ts';
import WorkoutModel from '../models/Workout.ts';
import LeaderboardModel from '../models/Leaderboard.ts';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
      LeaderboardModel.deleteMany({})
    ]);

    const users = await UserModel.create([
      { name: 'Ariana Ellis', email: 'ariana.ellis@example.com', role: 'Trainer' },
      { name: 'Jordan Park', email: 'jordan.park@example.com', role: 'Athlete' },
      { name: 'Mia Chen', email: 'mia.chen@example.com', role: 'Athlete' }
    ]);

    const teams = await TeamModel.create([
      {
        name: 'Peak Performance',
        description: 'Competitive endurance team',
        members: [users[0]._id, users[1]._id]
      },
      {
        name: 'Core Crew',
        description: 'Strength and mobility focused',
        members: [users[2]._id]
      }
    ]);

    await UserModel.updateMany(
      { _id: { $in: [users[0]._id, users[1]._id] } },
      { team: teams[0]._id }
    );
    await UserModel.updateOne(
      { _id: users[2]._id },
      { team: teams[1]._id }
    );

    const activities = await ActivityModel.create([
      {
        user: users[1]._id,
        team: teams[0]._id,
        type: 'Running',
        durationMinutes: 45,
        distanceKm: 10,
        caloriesBurned: 700,
        date: new Date('2026-07-01T07:30:00Z')
      },
      {
        user: users[2]._id,
        team: teams[1]._id,
        type: 'Yoga',
        durationMinutes: 60,
        distanceKm: 0,
        caloriesBurned: 240,
        date: new Date('2026-07-02T06:30:00Z')
      }
    ]);

    const workouts = await WorkoutModel.create([
      {
        title: 'Strength Builder',
        description: 'Full-body resistance session for muscle endurance.',
        difficulty: 'Intermediate',
        durationMinutes: 50,
        scheduledAt: new Date('2026-07-22T10:00:00Z'),
        exercises: ['Squats', 'Push-ups', 'Kettlebell swings']
      },
      {
        title: 'Cardio Sprint',
        description: 'High-intensity interval training to boost speed.',
        difficulty: 'Advanced',
        durationMinutes: 30,
        scheduledAt: new Date('2026-07-23T08:00:00Z'),
        exercises: ['Sprint intervals', 'Burpees', 'Mountain climbers']
      }
    ]);

    const leaderboardEntries = await LeaderboardModel.create([
      {
        user: users[1]._id,
        team: teams[0]._id,
        score: 920,
        rank: 1,
        season: 'Summer 2026'
      },
      {
        user: users[2]._id,
        team: teams[1]._id,
        score: 845,
        rank: 2,
        season: 'Summer 2026'
      }
    ]);

    console.log('Seed the octofit_db database with test data');
    console.log('Users created:', users.length);
    console.log('Teams created:', teams.length);
    console.log('Activities created:', activities.length);
    console.log('Workouts created:', workouts.length);
    console.log('Leaderboard entries created:', leaderboardEntries.length);

    await mongoose.disconnect();
    console.log('Database seeding complete');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
