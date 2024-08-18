import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import Client from '../../../models/Client'
import { connect2DB } from '../../../lib/db'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' })
  }

  const { phone, password } = req.body

  if (!phone || !password) {
    return res.status(422).json({ message: 'Invalid input' })
  }

  await connect2DB()

  const existingUser = await Client.findOne({ phone })

  if (existingUser) {
    return res.status(422).json({ message: 'User already exists!' })
  }

  const hashedPassword = await hash(password, 12)

  const newUser = new Client({
    phone,
    password: hashedPassword,
  })

  await newUser.save()

  return res.status(201).json({ message: 'User created!' })
}

export default handler
