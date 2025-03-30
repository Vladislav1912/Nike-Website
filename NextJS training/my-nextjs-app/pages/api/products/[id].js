import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      const deletedProduct = await prisma.product.delete({
        where: {
          id: id,
        },
      });

      res.status(200).json({ message: 'Product deleted'});
    }
      
    catch (error) {
      res.status(500).json({ error: 'Failed to delete product', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
