import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  team?: mongoose.Types.ObjectId;
  role: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>('User', userSchema);
export default UserModel;
