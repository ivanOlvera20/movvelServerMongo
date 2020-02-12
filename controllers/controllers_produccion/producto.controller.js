const proCtrl = {};

const Producto = require("../../models/cat_produccion/producto");

//crear una nueva Producto
proCtrl.create = async (req, res) => {
  const { codigo, descripcion, familia, linea, modelo, plz1, plz2, plz3, materiales_consumo } = req.body;
  const newPr = new Producto({
    codigo,
    descripcion,
    familia,
    linea,
    modelo,
    plz1,
    plz2,
    plz3,
    materiales_consumo
  });
  await newPr.save();
  res.status(201).json({
    message: "new line add",
    Producto_Creada: newPr
  });
};

//consultar todas las Producto
proCtrl.getMany = async (req, res) => {
  const lin = await Producto.find().populate("familia", "descripcion");
  res.json(lin);
};

//consultar una sola linea por Id
proCtrl.getOne = async (req, res) => {
  const lin = await Producto.findById(req.params.id);
  res.json(lin);
};

//borrar una linea
proCtrl.deleteOne = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json("Producto Deleted");
};

//actualizar una linea
proCtrl.update = async (req, res) => {
  const { descripcion, familia } = req.body;
  await Producto.findByIdAndUpdate(req.params.id, {
    descripcion,
    familia
  });
  res.json("Producto Updated");
};

module.exports = proCtrl;
