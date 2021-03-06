DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    price INT, 
    rating INT,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN,
    image TEXT
);
