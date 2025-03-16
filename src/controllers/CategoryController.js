import fetchData from '../service/apiService.js'
import Category from '../models/categoryModel.js'

class CategoryController {

  async getCategories(id) {
    const data = await fetchData('/categories')
    return data ? data.map(category => new Category(category.id, category.name)) : []
  }
};

export default CategoryController;