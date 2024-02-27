import mongoose, { Schema, model } from "mongoose";

export interface IJob {
  title: string;
  description?:string;
  companyId: String;
  createdAt?:number;
  updatedAt?:number;
}


const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  companyId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export const JobModel = model<IJob>('job', jobSchema);