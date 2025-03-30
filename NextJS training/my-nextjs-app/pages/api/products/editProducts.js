import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
        
        const { id, model, type, name, color , quantity , price, image , size} = req.body;
    try {
        if (req.method === 'PUT') {
             try {
                const products = await prisma.product.update({
                    where: { id: id },
                    data: {
                        model,
                        name,
                        type,
                        color,
                        quantity,
                        price,
                        image,
                        size
                    }
                })
                return res.status(201).json({ products });

            } catch (error) {
                res.status(500).json({ error: 'Internal Server Error' });

            }
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Error in API handler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
      

}