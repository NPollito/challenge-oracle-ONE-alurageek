// método GET
const categoryList = () => {

    return fetch('http://localhost:3000/categories').then(answer => {

        return answer.json()
    });
};


const productList = () => {
    
    return fetch('http://localhost:3000/products').then(answer => {
        
        return answer.json()
    });
};

const seeProduct = (id) => {
    
    return fetch(`http://localhost:3000/products/${id}`).then(answer => {
        
        return answer.json()
    });
};

const sixProducts = (id) => {

    return fetch(`http://localhost:3000/categories/${id}/products?_limit=6`).then(answer => {

        return answer.json()
    });
};

const createProduct = (image, title, price, details, categoryId) => {
    
    return fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: uuid.v4(), image, title, price, details, categoryId})
    })
};

const deleteProduct = (id) => {

    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE',
    })
};

export const productServices = {

    categoryList,
    productList,
    seeProduct,
    sixProducts,
    createProduct,
    deleteProduct
};