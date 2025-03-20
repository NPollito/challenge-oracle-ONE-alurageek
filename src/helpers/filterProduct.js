function filterProduct(products = [], searchProduct) {
  const resultProduct = products.filter(product => {
    return product.title.includes(searchProduct)
  })

  return resultProduct
};

export default filterProduct;