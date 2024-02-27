import JobService from "../services/JobService";
import {createCompany, getCompanies, getCompanyById} from '../services/CompanyService';
import { IJob } from "../models/JobModel";
const {getJobs, getJobById, createJob, updateJob} = JobService();
export const resolvers = {
  Query: {
    jobs: () => getJobs(),
    job: (_root: any, { _id }: any) => getJobById(_id),
    companies: () => getCompanies()
  },
  Mutation: {
    createJob: (_root: any, { input }: any) => createJob(input),
    updateJob: async (_root: any, { input }: any) => {
      const response = await updateJob(input._id, input)
      console.log(response);
      return response;
    },
    createCompany: (_root: any, { companyName }: any) => createCompany({ companyName }),
  },

  Job: {
    title: (job: IJob) => job.title.toLocaleUpperCase(),
    company: (job: IJob) => getCompanyById(job.companyId),
    createdAt: (job: IJob) => job.createdAt && new Date(job.createdAt).toISOString(),
    updatedAt: (job: IJob) => job.updatedAt && new Date(job.updatedAt).toISOString()
  }
}