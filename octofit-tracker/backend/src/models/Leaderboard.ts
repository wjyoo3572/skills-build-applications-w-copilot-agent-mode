import mongoose from 'mongoose';

export interface ILeaderboard {
  user: mongoose.Types.ObjectId;
  team: mongoose.Types.ObjectId;
  score: number;
  rank: number;
  season: string;
}

const leaderboardSchema = new mongoose.Schema<ILeaderboard>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    season: { type: String, required: true }
  },
  { timestamps: true }
);

const LeaderboardModel = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;
