import {Schema, model} from 'mongoose';

export interface ICompany {
  companyName: string;
}

const CompanySchema = new Schema({
  companyName: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

export const CompanyModel = model<ICompany>('company', CompanySchema);