namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        PORT: string;
        MONGO_URI: string;
    }
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode

  export = Schema
}