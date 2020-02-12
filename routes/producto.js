const { Router } = require("express");
const router = Router();

const {
    create,
    getMany
} = require("../controllers/controllers_produccion/producto.controller");

router
  .route("/")
    .post(create)
  .get(getMany)


module.exports = router;
