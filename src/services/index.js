const { productsMock } = require('../utils/mocks');
const MongoConnect = require('../lib/mongo');

class ProductService {

  constructor(){
    this.collection = 'products';
    this.mongoDb =  new MongoConnect();
  }

  async getProducts() {
    const products = await this.mongoDb.getAll(this.collection);//Promise.resolve(productsMock);//
    return products || [];
  }
}

module.exports = ProductService;
