import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb+srv://neeraj:neeraj@cluster0.a04kx.mongodb.net/');
const dbName = 'booking-system';

export async function PUT(req, { params }) {
  const { id } = params;  // Extract booking ID from URL params
  const { status } = await req.json();  // Get status from request body

  if (!status) {
    return new Response(
      JSON.stringify({ message: 'Status is required' }),
      { status: 400 }
    );
  }

  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const bookingsCollection = db.collection('bookings');

    // Update the booking status in the database
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },  // Find the booking by ID
      { $set: { status } }  // Set the new status
    );

    // If no booking was found, return a 404 error
    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ message: 'Booking not found' }),
        { status: 404 }
      );
    }

    // Return a success message
    return new Response(
      JSON.stringify({ message: 'Booking status updated successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating booking status:', error);
    return new Response(
      JSON.stringify({ message: 'Error updating booking status', error: error.message }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
