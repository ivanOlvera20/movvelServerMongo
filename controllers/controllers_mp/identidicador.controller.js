const ideCtrl = {}

const Iden = require('../../models/cat_mp/identificador')

//crear una nueva familia
ideCtrl.create = async (req, res) => {
    const { descripcion } = req.body
    const newIde = new Iden({
        descripcion
    })
    await newIde.save()
    res.status(201).json({
        message: "nuevo indentificador add",
        Identificador_Creada: newIde
    });
}

//consultar todas las familias
ideCtrl.getMany = async (req, res) => {
    const newIde = await Iden.find();
    res.json(newIde);
};

//consultar una sola familia
ideCtrl.getOne = async (req, res) => {
    const newIde = await Iden.findById(req.params.id);
    res.json(newIde);
}

//borrar una familia
ideCtrl.deleteOne = async (req, res) => {
    await Iden.findByIdAndDelete(req.params.id)
    res.json('Identidicador Deleted');
}

//actualizaer una familia
ideCtrl.update = async (req, res) => {
    const { descripcion } = req.body;
    await Iden.findByIdAndUpdate(req.params.id, {
        descripcion
    });
    res.json('ide Updated');
}

module.exports = ideCtrl