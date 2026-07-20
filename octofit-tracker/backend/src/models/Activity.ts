import mongoose from 'mongoose';

export interface IActivity {
  user: mongoose.Types.ObjectId;
  team: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  distanceKm: number;
  caloriesBurned: number;
  date: Date;
}

const activitySchema = new mongoose.Schema<IActivity>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);

const ActivityModel = mongoose.model<IActivity>('Activity', activitySchema);
export default ActivityModel;
