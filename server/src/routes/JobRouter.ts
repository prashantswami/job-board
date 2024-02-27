import { Request, Response, Router } from "express";
import JobService from "../services/JobService";
import { IJob } from "../models/JobModel";

const router =  Router();

const jobService = JobService();

router.get('/', async (req: Request, res: Response)=>  {
  console.log('get all request');

  const jobs = await jobService.getJobs();
  
  res.send(jobs);
});

router.get('/:id', async (req: Request, res: Response) => {
  console.log('get single job');
  const job = await jobService.getJobById(req.params.id);

  res.send(job);
})

router.post('/', (req: Request, res: Response) => {

  if(!req.body.title ) {
    return res.status(400).send("Bad Request");
  }

  jobService.createJob(req.body);

  res.send('post single job')
})

router.put('/:id', async (req: Request, res: Response) => {
  console.log('post single job');
  if(!req.body.title) {
   return  res.status(400).send('Bad Request');
  }
  const job = await jobService.updateJob(req.params.id, req.body);

  res.send(job)
})

router.delete('/:id', async (req: Request, res: Response) => {
  console.log('post single job');

  const deleteResult = await jobService.deleteJob(req.params.id);
  res.send(deleteResult)
})

export default router;