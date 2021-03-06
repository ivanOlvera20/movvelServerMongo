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
   consumo
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
    consumo
  });

  if (req.file) {
    const { filename } = req.file
    newPr.setImgUrl(filename)
  }

  await newPr.save();
  res.status(201).json({
    message: "new line add",
    Producto_Creada: newPr
  });
};  

/* async function addProduct(req, res) {
  try {
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
    } = req.body

    const product = Product({
      clave,
      descripcion,
      familia,
      linea,
      modelo,
      plz1,
      plz2,
      plz3,
      materiales_consumo
    })

    if (req.file) {
      const { filename } = req.file
      product.setImgUrl(filename)
    }

    const productStored = await product.save()

    res.status(201).send({ productStored })
  } catch (e) {
    res.status(500).send({ message: e.message })
  }
}  */

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
  const pro = await Producto.findById(req.params.id);
  res.json(pro);
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
    consumo
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
    consumo
  });
  res.json("Producto Updated");
};

module.exports = proCtrl;
