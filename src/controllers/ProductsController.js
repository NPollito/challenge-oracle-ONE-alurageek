import fetchData from "../service/apiService.js";
import Product from "../models/productModel.js";

class ProductsController {

  async getProducts(id) {
    const data = await fetchData(`/categories/${id}/products?_limit=6`)

    return data ? data.map(product => {
      const {id, image, title, price, details, categoryId} = product
      return new Product(id, image, title, price, details, categoryId)
    }) : []
  }
};

export default ProductsController;