const db = require("../db/dbConfig");

const getAll = async () => {
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts;
    } catch (error) {
        return error;
    };
};

const getOne = async (id) => {
    try {
        const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
        return oneProduct
    } catch (error) {
        return error;
    };
};

const postOne = async (product) => {
    try {
        const {name, price, rating, featured} = product;
        const postProduct = await db.one(
            "INSERT INTO products (name, price, rating, featured) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, price, rating, featured]
        );
        return postProduct;
    } catch (error) {
        return error;
    };
};

const deleteOne = async (id) => {
    try {
        const deleteProduct = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", id);
        return deleteProduct;
    } catch (error) {
        return error
    };
};

const updateOne = async (id, product) => {
    try {
        const {name, price, rating, featured} = product;
        const updateProduct = await db.one(
            "UPDATE products SET name=$2, price=$3, rating=$4, featured=$5 WHERE id=$1 RETURNING *",
            [id, name, price, rating, featured]
        );
        return updateProduct;
    } catch (error) {
        return error
    }
};

module.exports = {
    getAll,
    getOne,
    postOne,
    deleteOne,
    updateOne
};