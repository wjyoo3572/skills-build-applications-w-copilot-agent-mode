import mongoose from 'mongoose';

export interface IWorkout {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  scheduledAt: Date;
  exercises: string[];
}

const workoutSchema = new mongoose.Schema<IWorkout>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    scheduledAt: { type: Date, required: true },
    exercises: [{ type: String, required: true }]
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.model<IWorkout>('Workout', workoutSchema);
export default WorkoutModel;
