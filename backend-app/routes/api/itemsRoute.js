const express = require("express");
const ItemsSvc = require("../../services/itemsSvc");

function itemsApi(app) {
  const router = express.Router();
  app.use("/api/items", router);

  const itemsService = new ItemsSvc();

  router.get("/", async function(req, res, next) {
    try {
      const items = await itemsService.getItems(req.query);
      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  });

  router.get("/:id", async function(req, res, next) {
    try {
      const item = await itemsService.getItem(req.params.id);
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  });
}

module.exports = itemsApi;
