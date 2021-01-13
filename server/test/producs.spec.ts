import * as chai from 'chai';
import { after, before, it } from 'mocha';
import chaiHttp = require('chai-http');

import * as server from '../server';

import { products } from '../config/seed';
import { Product } from '../models/product';

process.env.NODE_ENV = 'test';

const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /products', () => {
  let token = '';

  before(async function () {
    await Product.deleteMany({});
    await Product.insertMany(products);
  });

  after(async function () {
    await Product.deleteMany({});
  });

  it('should get all products', async function () {
    const res = await chai
      .request(server)
      .get('/api/v1/products');

    expect(res.status).to.equal(200);
    expect(res.body.products).to.be.a('array');
    expect(res.body.products).to.have.lengthOf(20);
  });
});
