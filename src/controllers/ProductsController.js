import fetchData from "../service/apiService.js";
import Product from "../models/productModel.js";

class ProductsController {

  async getProduct(id) {
    const data = await fetchData(`/products/${id}`)
    return data
  }

  async getProducts(id, limit = '') {
    const data = await fetchData(`/categories/${id}/products?_limit=${limit}`)

    return data ? data.map(product => {
      const {id, image, title, price, details, categoryId} = product
      return new Product(id, image, title, price, details, categoryId)
    }) : []
  }

  async getProductsTotal() {
    const data = await fetchData('/products')

    return data ? data.map(product => {
      const {id, image, title, price, details, categoryId} = product
      return new Product(id, image, title, price, details, categoryId)
    }) : []
  }

  async postProduct(product) {
    return await fetchData('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
  }
};

export default ProductsController;