import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import formidable, { IncomingForm, Fields, Files } from 'formidable';

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,  
    },
};
const parseForm = (req) => {
    const form = new IncomingForm({
        multiples: false,    
        keepExtensions: true,
    });

    return new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
            if (err) reject(err);
            resolve({ fields, files });
        });
    });
};


const parseField = (field) => {
    if (Array.isArray(field)) {
        return field[0]; 
    }
    return field; 
};
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { fields, files } = await parseForm(req);
    
    

    const modelId = fields.modelId?.[0] || null;
    const categoryId = fields.categoryId?.[0] || null;
    const typeId = fields.typeId?.[0] || null;
    const name = fields.name?.[0] || "";
    const price = parseFloat(fields.price?.[0] || "0");
    const quantity = parseInt(fields.quantity?.[0] || "0", 10);
    const color = fields.color?.[0] || "RED";
    const size = fields.size?.[0] || "SMALL";
    const image = fields.image?.[0] || ""; 

    try {
        const product = await prisma.product.create({
            data: {
              name,
              price,
              quantity,
              color,
              size,
              image,
              modelId,    
              categoryId,  
              typeId       
            },
          });
          

        res.status(200).json({ message: "Product created successfully", product });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

