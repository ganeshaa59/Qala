// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       bufferCommands: false,
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }
import mongoose from 'mongoose';
import { logTrace } from '@/utils/traceLogger';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/QalaDb';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected');
    logTrace('MongoDB connection successful');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    logTrace(`MongoDB connection error: ${error}`);
    throw error;
  }
};

export default connectToDatabase;


