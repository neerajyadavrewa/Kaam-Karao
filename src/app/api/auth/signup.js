import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const client = new MongoClient('mongodb+srv://neeraj:neeraj@cluster0.a04kx.mongodb.net/');
const dbName = 'booking-system';

export async function POST(req) {
  const { email, password, role } = await req.json();

  try {
    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword, role: role || 'user' };
    const result = await usersCollection.insertOne(newUser);

    return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error creating user', error: error.message }), { status: 500 });
  } finally {
    await client.close();
  }
}
