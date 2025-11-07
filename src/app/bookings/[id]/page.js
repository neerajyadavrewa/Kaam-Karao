import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient('mongodb+srv://neeraj:neeraj@cluster0.a04kx.mongodb.net/');
const dbName = 'booking-system';

export default async function BookingStatusPage({ params }) {
  const bookingId = params.id;

  let booking = null;

  try {
    await client.connect();
    const db = client.db(dbName);
    const bookingsCollection = db.collection('bookings');
    booking = await bookingsCollection.findOne({ _id: new ObjectId(bookingId) });
  } catch (error) {
    console.error('Error fetching booking:', error);
  } finally {
    await client.close();
  }

  if (!booking) {
    return (
      <div>
        <h1>Booking not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Booking Status</h1>
      <p><strong>Booking ID:</strong> {booking._id}</p>
      <p><strong>Status:</strong> {booking.status}</p>
      <p><strong>Worker Type:</strong> {booking.workerType}</p>
      <p><strong>Location:</strong> {booking.location}</p>
      <p><strong>Phone:</strong> {booking.phone}</p>
      <p><strong>Work Description:</strong> {booking.workDescription}</p>
    </div>
  );
}
