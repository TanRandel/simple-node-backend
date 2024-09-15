const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Root route with instructions
app.get("/", (req, res) => {
  res.send(`
    <h1>NodeJS API Server</h1>
    <p>Welcome to the Node API server. Here are some instructions to test the API:</p>
    <h2>Instructions for Testing the API</h2>
    <ol>
      <li>Ensure that you have Node.js installed on your system.</li>
      <li>Clone the project or download the source code to your machine.</li>
      <li>Open a terminal and navigate to the project folder.</li>
      <li>Run <code>npm install</code> to install all required dependencies (Express, Mongoose, etc.).</li>
      <li>Start the server by running <code>node <yourFileName>.js</code> (replace <code><yourFileName></code> with the actual name of this file).</li>
      <li>Use an API testing tool of your choice to test the API:</li>
      <ul>
        <li>
          <strong>Postman</strong>: 
          <ul>
            <li>To create a product, send a POST request to <code>http://localhost:3000/api/products</code> with a JSON body like:
              <pre>
                {
                  "name": "Laptop",
                  "quantity": 5,
                  "price": 999.99,
                  "image": "https://example.com/laptop.jpg"
                }
              </pre>
            </li>
            <li>To get all products, send a GET request to <code>http://localhost:3000/api/products</code>.</li>
            <li>To get a specific product by ID, send a GET request to <code>http://localhost:3000/api/products/:id</code> (replace <code>:id</code> with the actual product ID).</li>
            <li>To update a product, send a PUT request to <code>http://localhost:3000/api/products/:id</code> with a JSON body of the updated product data.</li>
            <li>To delete a product, send a DELETE request to <code>http://localhost:3000/api/products/:id</code>.</li>
          </ul>
        </li>
        <li>
          <strong>Insomnia</strong>: 
          <ul>
            <li>Similar to Postman, you can create requests by selecting the method (POST, GET, PUT, DELETE) and entering the URL <code>http://localhost:3000/api/products</code>. Enter the JSON body as needed for POST and PUT requests.</li>
            <li>Insomnia provides a similar interface to Postman for testing your APIs.</li>
          </ul>
        </li>
        <li>
          <strong>cURL</strong>: 
          <ul>
            <li>To create a product, use:
              <pre>
                curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{
                  "name": "Laptop",
                  "quantity": 5,
                  "price": 999.99,
                  "image": "https://example.com/laptop.jpg"
                }'
              </pre>
            </li>
            <li>To get all products, use:
              <pre>
                curl http://localhost:3000/api/products
              </pre>
            </li>
            <li>To get a specific product by ID, use:
              <pre>
                curl http://localhost:3000/api/products/:id
              </pre>
            </li>
            <li>To update a product, use:
              <pre>
                curl -X PUT http://localhost:3000/api/products/:id -H "Content-Type: application/json" -d '{
                  "name": "Updated Laptop",
                  "quantity": 10,
                  "price": 899.99
                }'
              </pre>
            </li>
            <li>To delete a product, use:
              <pre>
                curl -X DELETE http://localhost:3000/api/products/:id
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <strong>HTTPie</strong>: 
          <ul>
            <li>To create a product, use:
              <pre>
                http POST http://localhost:3000/api/products name="Laptop" quantity=5 price=999.99 image="https://example.com/laptop.jpg"
              </pre>
            </li>
            <li>To get all products, use:
              <pre>
                http GET http://localhost:3000/api/products
              </pre>
            </li>
            <li>To get a specific product by ID, use:
              <pre>
                http GET http://localhost:3000/api/products/:id
              </pre>
            </li>
            <li>To update a product, use:
              <pre>
                http PUT http://localhost:3000/api/products/:id name="Updated Laptop" quantity=10 price=899.99
              </pre>
            </li>
            <li>To delete a product, use:
              <pre>
                http DELETE http://localhost:3000/api/products/:id
              </pre>
            </li>
          </ul>
        </li>
      </ul>
    </ol>
  `);
});

mongoose
  .connect(
    "mongodb+srv://randeljoshuatan:M9TCve7zeY77tp7x@backenddb.7wtiw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
