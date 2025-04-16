import fetchData from "../service/apiService.js";

class Products {
  async getProducts() {
    try {
      return await fetchData('/products')

    } catch (error) {
      console.error('Error fetching products:', error.message)
      throw error
    }
  };

  async getCategorieProducts(id, limit) {
    try {

      // Validar que el ID sea un número positivo
      if (isNaN(id) || id < 0) {
        throw new Error('Category ID must be a positive number.');
      }

      // Validar que el límite sea válido solo si está definido
      if (limit !== undefined && (typeof limit !== 'number' || limit < 0)) {
        throw new Error('Limit must be a positive number.');
      } 

      // Construir la URL según si limit tiene valor o no
      const url = limit 
        ? `/categories/${id}/products?_limit=${limit}` 
        : `/categories/${id}/products`;

      return await fetchData(url)

    } catch (error) {
      console.error(`Error fetching products for category ${id}:`, error.message)
      throw error
    }
  };

  async getProduct(id) {
    try {
      if (!id) {
        throw new Error("Product ID is required.");
      }

      return await fetchData(`/products/${id}`)

    } catch (error) {
      console.error(`Error fetching product with ID ${id}`, error.message)
      throw error
    }
  };

  async postProduct(product) {
    try {
      if (!product) {
        throw new Error("Object product is required.");
      }

      return await fetchData('/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })

    } catch (error) {
      console.error(`Error fetching product`, error.message)
      throw error
    }
  };

  async putProduct(product) {
    console.log(product);
    
    try {
      if (!product) {
        throw new Error('Object product is required.')
      }
    
      return await fetchData(`/products/${product.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })

    } catch (error) {
      console.error(`Error fetching product with ID ${id}`, error.message)
      throw error
    }
  };

  async deleteProduct(id) {
    try {
      if (!id) {
        throw new Error("Product ID is required.")
      }

      return await fetchData(`/products/${id}`, {
        method: 'DELETE'
      })

    } catch (error) {
      console.error(`Error fetching product with ID ${id}`, error.message)
      throw error
    }
  };

};

export default Products;
