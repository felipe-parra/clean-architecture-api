import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

interface IUser {
  [x: string]: any;
  id: string;
  email: string;
  password: string;
}

export interface User extends IUser {
  id: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre<IUser>('save', function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (candidatePassword:string) {
  return bcrypt.compareSync(candidatePassword, this.password);
};  

export const UserModel = model<IUser>('User', UserSchema);