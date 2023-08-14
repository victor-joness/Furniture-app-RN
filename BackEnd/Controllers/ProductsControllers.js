const Product = require("../Models/Products");

module.exports = {
  createdProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Produto criado com sucesso!");
    } catch (error) {
      res.status(500).json("Falha em criar produto!");
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json("Falha em pegar todos os produtos!");
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json("Falha em pegar produto por id!");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json("Falha em pesquisar produto!");
    }
  },
};
