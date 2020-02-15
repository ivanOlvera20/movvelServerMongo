const proCtrl = {};

const Producto = require("../../models/cat_produccion/producto");

//crear una nueva Producto
proCtrl.create = async (req, res) => {
  const {
    clave,
    descripcion,
    familia,
    linea,
    modelo,
    plz1,
    plz2,
    plz3,
    materiales_consumo
  } = req.body;
  const newPr = new Producto({
    clave,
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
  const pro = await Producto.find()
    .populate("familia", "descripcion")
    .populate("linea", "descripcion")
    .populate("modelo", "descripcion");
  res.json(pro);
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

//actualizar un producto
proCtrl.update = async (req, res) => {
  const {
    clave,
    descripcion,
    familia,
    linea,
    modelo,
    plz1,
    plz2,
    plz3,
    materiales_consumo
  } = req.body;
  await Producto.findByIdAndUpdate(req.params.id, {
    clave,
    descripcion,
    familia,
    linea,
    modelo,
    plz1,
    plz2,
    plz3,
    materiales_consumo
  });
  res.json("Producto Updated");
};

module.exports = proCtrl;
