import mongoose from 'mongoose'

export const connect2DB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection
  }

  try {
    await mongoose.connect(`${process.env.HUB_DATA_USER_MANAGE_ENV}`, {})
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}
