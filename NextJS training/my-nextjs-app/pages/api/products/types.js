
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const types = await prisma.type.findMany();
    res.status(200).json(types);
  } catch (error) {
    console.error('Error fetching types:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
