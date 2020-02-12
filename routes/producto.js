const { Router } = require("express");
const router = Router();

const {
  create,
} = require("../controllers/controllers_produccion/producto.controller");

router
  .route("/")
  .post(create)


module.exports = router;
