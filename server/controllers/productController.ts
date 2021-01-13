import { Request, Response } from 'express';

import { Product } from '../models/product';
import HttpStatusCode from '../util/HttpStatusCode';

export class ProductController {
  public async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await Product.find();
      res.status(HttpStatusCode.OK).json({ products });
    } catch (error) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        timestamp: Date.now(),
        error: error.toString(),
      });
    }
  }
}
