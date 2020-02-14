const vendCtrl = {}

const Vend = require('../../models/cat_generales/vendedores')

//crear un nuevo vendedor
vendCtrl.create = async (req, res) => {
    const { nombre, comision } = req.body
    const newVend = new Vend({
        nombre,
        comision
    })
    await newVend.save()
    res.status(201).json({
        message: "nuevo vendedor añadido",
        vendedor_creado: newVend
    });
}

//consultar todos los vendedores
vendCtrl.getMany = async (req, res) => {
    const vend = await Vend.find();
    res.json(vend);
};

//consultar un solo vendedor
vendCtrl.getOne = async (req, res) => {
    const vend = await Vend.findById(req.params.id);
    res.json(vend);
}

//borrar un vendedor
vendCtrl.deleteOne = async (req, res) => {
    await Vend.findByIdAndDelete(req.params.id)
    res.json('Vendedor Deleted');
}

//actualizaer una vendedor
vendCtrl.update = async (req, res) => {
    const {nombre, comision} = req.body;
    await Vend.findByIdAndUpdate(req.params.id, {
        nombre,
        comision
    });
    res.json('vendedor Updated');
}

module.exports = vendCtrl