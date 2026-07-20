import mongoose from 'mongoose';

export interface ITeam {
  name: string;
  description: string;
  members: mongoose.Types.ObjectId[];
}

const teamSchema = new mongoose.Schema<ITeam>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

const TeamModel = mongoose.model<ITeam>('Team', teamSchema);
export default TeamModel;
