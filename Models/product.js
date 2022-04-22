// Product data model file

const products = [];

module.exports = class Product {
    constructor(title, description){
        this.title = title;
        this.description = description;
    };

    saveProduct() {
        products.push(this); // Push class object onto array (puts all data into array)
    };

    // Utility function to fetch all products
    static fetchAll() { // static so we can call method using Product.fetchAll;
        return products;
    };
};