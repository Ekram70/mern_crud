const ProductsModel = require('../model/ProductsModel');

// Create
exports.CreateProduct = (req, res) => {
  let reqBody = req.body;
  ProductsModel.create(reqBody, (error, data) => {
    if (!error) {
      res.status(200).json({ status: 'Success', data });
    } else {
      res.status(400).json({ status: 'Fail', data: error });
    }
  });
};

// read
exports.ReadProduct = (req, res) => {
  let Query = {};
  let Projection = {};
  ProductsModel.find(Query, Projection, (error, data) => {
    if (!error) {
      res.status(200).json({ status: 'Success', data: data });
    } else {
      res.status(400).json({ status: 'Fail', data: error });
    }
  });
};

// update
exports.UpdateProduct = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;
  ProductsModel.updateOne(Query, reqBody, (error, data) => {
    if (!error) {
      res.status(200).json({ status: 'Success', data });
    } else {
      res.status(400).json({ status: 'Fail', data: error });
    }
  });
};

// delete
exports.DeleteProduct = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };

  ProductsModel.deleteOne(Query, (error, data) => {
    if (!error) {
      res.status(200).json({ status: 'Success', data });
    } else {
      res.status(400).json({ status: 'Fail', data: error });
    }
  });
};
