import { MongoClient, ObjectId } from 'mongodb';

// MongoDB client setup
const client = new MongoClient('mongodb+srv://neeraj:neeraj@cluster0.a04kx.mongodb.net/');
const dbName = 'booking-system';

// Handle GET requests (Fetching all bookings)
export async function GET() {
  let bookings = [];

  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const bookingsCollection = db.collection('bookings');

    // Fetch all bookings
    bookings = await bookingsCollection.find({}).toArray();
  } catch (error) {
    console.error('Error fetching bookings:', error);
  } finally {
    await client.close();
  }

  return new Response(JSON.stringify(bookings), { status: 200 });
}

// Handle POST requests (Creating a new booking)
export async function POST(req) {
  try {
    const { workerType, workDescription, quantity, selectedSkill, location, phone } = await req.json();

    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const bookingsCollection = db.collection('bookings');

    // Insert a new booking with 'Pending' status
    const newBooking = {
      workerType,
      workDescription,
      quantity,
      selectedSkill,
      location,
      phone,
      status: 'Pending',  // Initially set to 'Pending'
      createdAt: new Date(),
    };

    const result = await bookingsCollection.insertOne(newBooking);

    return new Response(
      JSON.stringify({ bookingId: result.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error saving booking', error: error.message }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

// Handle PATCH requests (Updating booking status)
export async function PATCH({ params, request }) {
  const { id } = params; // Get the booking ID from the URL
  const { status } = await request.json(); // Get the status update from the request body

  if (!status) {
    return new Response(JSON.stringify({ message: 'Status is required' }), { status: 400 });
  }

  try {
    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const bookingsCollection = db.collection('bookings');

    // Find and update the booking with the provided ID
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    if (result.matchedCount > 0) {
      return new Response(JSON.stringify({ message: 'Booking status updated successfully' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Booking not found' }), { status: 404 });
    }
  } catch (error) {
    console.error('Error updating booking status:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  } finally {
    await client.close();
  }
}
