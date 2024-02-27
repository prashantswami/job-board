import express, { Express, Request, Response } from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4'
import dotEnv from 'dotenv';
import { connectDb } from './db/connection';
import JobRouter from './routes/JobRouter'
import cors from 'cors';
import { resolvers } from './graphql/resolvers'
import {typeDefs} from './graphql/schema';
dotEnv.config();
const app: Express = express();

app.use(express.json());
app.use(cors());


connectDb(async (isConnected) => {
  if (isConnected) {
    
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    app.use('/api', apolloMiddleware(apolloServer))
    app.listen(process.env.PORT, () => {
      console.log('[Server]: Server is running on port ', process.env.PORT);
      console.log(`graphql is started at http://localhost:${process.env.PORT}/api`)
    });
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('hello world!')
});

app.use('/job', JobRouter);