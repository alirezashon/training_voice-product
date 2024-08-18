import { compare } from 'bcryptjs'
import Client from '../models/Client'
import { connect2DB } from './db'

export const validateUser = async (phone: number, password: string) => {
  await connect2DB()

  const user = await Client.findOne({ phone })

  if (!user) {
    throw new Error('No user found!')
  }

  const isValid = await compare(password, user.password)

  if (!isValid) {
    throw new Error('Could not log you in!')
  }

  return { id: user._id.toString(), phone: user.phone }
}
