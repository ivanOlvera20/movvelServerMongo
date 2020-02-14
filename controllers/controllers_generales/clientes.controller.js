const clCtrl = {};

const Cliente = require("../../models/cat_generales/clientes");

//crear una nueva Producto
clCtrl.create = async (req, res) => {
    const { descripcion, vendedor, datos_cliente, precio, tipo_cliente, ubi_cliente, datos_fiscales, datos_credito, ref_bancaria, forma_pago, metodo_pago, plazo_credito, limite_credito} = req.body;
    const newClient = new Cliente({
        descripcion, vendedor, datos_cliente, precio, tipo_cliente, ubi_cliente, datos_fiscales, datos_credito, ref_bancaria, forma_pago, metodo_pago, plazo_credito, limite_credito
    });
    await newClient.save();
    res.status(201).json({
        message: "new cliente add",
        cliente_creado: newClient
    });
};

//consultar todas las Producto
clCtrl.getMany = async (req, res) => {
    const cl = await Cliente.find()
        .populate("vendedor", ["nombre", "comision"])
    res.json(cl);
};

//consultar una sola linea por Id
clCtrl.getOne = async (req, res) => {
    const cl = await Cliente.findById(req.params.id);
    res.json(cl);
};

//borrar una linea
clCtrl.deleteOne = async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json("Producto Deleted");
};

//actualizar una linea
clCtrl.update = async (req, res) => {
    const { descripcion, vendedor, datos_cliente, precio, tipo_cliente, ubi_cliente, datos_fiscales, datos_credito, ref_bancaria, forma_pago, metodo_pago, plazo_credito, limite_credito } = req.body;
    await Cliente.findByIdAndUpdate(req.params.id, {
        descripcion, vendedor, datos_cliente, precio, tipo_cliente, ubi_cliente, datos_fiscales, datos_credito, ref_bancaria, forma_pago, metodo_pago, plazo_credito, limite_credito
    });
    res.json("Producto Updated");
};

module.exports = clCtrl;
