const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.NEXT_MONGODB_URI
const dbName = process.env.DB_NAME 
export const collections = {
    USERS:  "users",
    SERVICES: "services"
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect = async (collectionName) => {
  return client.db(dbName).collection(collectionName)
}