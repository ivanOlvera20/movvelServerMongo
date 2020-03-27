const banCtrl = {}

const Banco = require('../../models/cat_generales/bancos')

//crear una nueva Linea
banCtrl.create = async (req, res) => {
    const { descripcion } = req.body
    const newBan = new Banco({
        descripcion,
    })
    await newBan.save()
    res.status(201).json({
        message: 'new banco add',
        Banco_Creada: newBan
    })
}

//consultar todas las lineas
banCtrl.getMany = async (req, res) => {
    const ban = await Banco.find()
    res.json(ban);
};

//consultar una sola linea por Id
banCtrl.getOne = async (req, res) => {
    const ban = await Banco.findById(req.params.id);
    res.json(ban);
}

//borrar una linea
banCtrl.deleteOne = async (req, res) => {
    await Banco.findByIdAndDelete(req.params.id)
    res.json('Banco Deleted');
}

//actualizar una linea
banCtrl.update = async (req, res) => {
    const { descripcion } = req.body;
    await Banco.findByIdAndUpdate(req.params.id, {
        descripcion,
    });
    res.json('Banco Updated');
}

module.exports = banCtrl