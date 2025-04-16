import fetchData from '../service/apiService.js'

class Categories {
  async getCategories() {
    try {
      return await fetchData('/categories')

    } catch (error) {
      console.error('Error fetching categories:', error.message)
      throw error
    }
  };

  async getCategorie(id) {
    try {
      if (!id) {
        throw new Error('Category ID is required.');
      }

      return await fetchData(`/categories/${id}`)

    } catch (error) {
      console.error(`Error fetching category with ID ${id}:`, error.message)
      throw error
    }
  };

};

export default Categories;