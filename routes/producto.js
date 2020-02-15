const { Router } = require('express');
const router = Router();

const {
  create,
  getMany,
  getOne,
  deleteOne,
  update
} = require("../controllers/controllers_produccion/producto.controller");

router
  .route("/")
  .post(create)
  .get(getMany);

router
  .route("/:id")
  .get(getOne)
  .delete(deleteOne)
  .put(update);

module.exports = router