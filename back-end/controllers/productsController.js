const express = require("express")
const products = express();
const {
    getAll, 
    getOne,
    postOne,
    deleteOne,
    updateOne
} = require("../queries/products")

products.get("/", async (_, response) => {
    console.log("GET request /products")
    const allProducts = await getAll();
    response.status(200).json(allProducts);
});

products.get("/:id", async (request, response) => {
    console.log("GET request to /products/:id")
    const oneProduct = await getOne(request.params.id);
    response.status(404).json(oneProduct)
});

products.post("/", async (request, response) => {
    console.log("POST request to /products")
    const postProduct = await postOne(request.body);
    response.status(200).json(postProduct);
});

products.delete("/:id", async (request, response) => {
    console.log("DELETE request to /products/:id")
    const deleteProduct = await deleteOne(request.params.id);
    response.status(200).json(deleteProduct);
});

products.put("/:id", async (request, response) => {
    console.log("PUT request to /products/:id")
    const updateProduct = await updateOne(request.params.id, request.body);
    response.status(200).json(updateProduct);
});

module.exports = products;