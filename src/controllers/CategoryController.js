import fetchData from '../service/apiService.js'
import Category from '../models/categoryModel.js'

class CategoryController {

  async getCategorie(id) {
    const data = await fetchData(`/categories/${id}`)
    return data
  }

  async getCategories() {
    const data = await fetchData('/categories')
    return data ? data.map(category => new Category(category.id, category.name)) : []
  }
};

export default CategoryController;