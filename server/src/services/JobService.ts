import { IJob, JobModel } from "../models/JobModel";


export default function JobService() {

  function createJob(job: IJob) {
    try {
    return JobModel.create(job);
    }catch(error) {
      console.error(error);
      return null;
    }
  }

  async function getJobs(): Promise<IJob[]> {
    try {
      const jobs = await JobModel.find({});
      return jobs;
    } catch (error) {
      console.error(error);
      return [];
    }

  }

  async function getJobById(id: string) {
    try {
      const jobs = await JobModel.findOne({_id: id});
      return jobs;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function deleteJob(id: string) {
    try {
      return await JobModel.deleteOne({_id: id});
    } catch (error) {
      console.error(error);
      return {deletedCount: 0};
    }
  }

  async function updateJob(id: string, job: IJob) {
    try {
      const newJob = await JobModel.findOneAndUpdate({ _id: id }, job, { new: true });
      return newJob?.toObject();  
    } catch (error) {
      console.error(error);
      return null;
    }
    
  }

  return {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
  }
}