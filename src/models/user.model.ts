import { Document, model, Schema } from 'mongoose';

export enum UserRole {
  DEV = 'dev',
  TAX = 'tax',
  ADMIN = 'admin',
}

export interface IUser extends Document {
  name: string;
  email: string;
  role: UserRole;
}

export const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
  },
  { discriminatorKey: 'role', timestamps: true },
);

export const User = model<IUser>('users', UserSchema);
export interface IDevUser extends IUser {
  github_account: string;
}
export interface ITaxUser extends IUser {
  tax_agency_no: string;
}

const DevUserSchema = new Schema<IDevUser>({
  github_account: { type: String, required: true },
});

const TaxUserSchema = new Schema<ITaxUser>({
  tax_agency_no: { type: String, required: true },
});
export const DevUser = User.discriminator<IDevUser>(
  UserRole.DEV,
  DevUserSchema,
);
export const TaxUser = User.discriminator<ITaxUser>(
  UserRole.TAX,
  TaxUserSchema,
);
