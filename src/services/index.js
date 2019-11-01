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

  async getProduct({ productId }){
    const product = await this.mongoDb.get(this.collection, productId);
    return product || {};
  }

  async createProduct({ product }){
    const productCreatedId = await this.mongoDb.create(this.collection, product);
    return productCreatedId;
  }

  async updateProduct({ productId, product } = {}){
    const productUpdatedId = await this.mongoDb.update(this.collection, productId, product);
    return productUpdatedId;
  }

  async deleteProduct({ productId }){
    const productDeletedId = this.mongoDb.delete(this.collection, productId);
    return productDeletedId;
  }
}

module.exports = ProductService;
