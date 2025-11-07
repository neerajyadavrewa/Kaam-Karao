import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so the MongoDB connection is not repeatedly created during hot reloading
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's safe to always create a new connection
  clientPromise = client.connect();
}

export default clientPromise;
