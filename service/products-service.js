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

export const productServices = {

    categoryList,
    productList,
    seeProduct,
    sixProducts
};