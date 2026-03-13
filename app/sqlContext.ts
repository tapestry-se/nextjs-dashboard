import postgres from "postgres";

const sqlClient = postgres(process.env.POSTGRES_URL!, { 
  ssl: process.env.NODE_ENV === 'production' ? 'require' : false, 
  debug: true });

export default sqlClient;