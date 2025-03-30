import { PrismaClient } from '@prisma/client';



const prisma = new PrismaClient();

export default async function handler(req, res) {
    try {

        if (req.method === 'GET') {        
            try {
                const products = await prisma.product.findMany()
                console.log(products);
                return res.status(201).json({ products });

            } catch (error) {
                res.status(500).json({ error: 'We coudnt reach the contacts' });
                
            }
            
        } 
    else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Error in API handler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
      

}
