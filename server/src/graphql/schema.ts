import {gql} from 'graphql-tag';

export const typeDefs = gql`
type Query {
  jobs: [Job]
  job(_id: ID): Job 

  companies: [Company]
}

type Mutation {
  createJob(input: CreateJobInput!): Job
  updateJob(input: UpdateJobInput!): Job
  createCompany(companyName: String!): Company
}

type Job {
  _id: ID!
  title: String!
  description: String
  company: Company!
  createdAt: String
  updatedAt: String
}

type Company {
  _id: ID!
  companyName: String!
  createdAt: String
  updatedAt: String
}

input CreateJobInput {
  title: String!
  description: String
  companyId: String!
}

input UpdateJobInput {
  _id: ID!
  title: String!
  description: String
  companyId: String!
}

`;