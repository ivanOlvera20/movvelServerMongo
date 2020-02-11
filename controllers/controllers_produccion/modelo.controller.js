const modCtrl = {}

const Modelo = require('../../models/cat_produccion/modelo')

//crear una nueva familia
modCtrl.createMod = async (req, res) => {
    const { descripcion } = req.body
    const newMod = new Modelo({
        descripcion
    })
    await newMod.save()
       res.status(201).json({
         message: "nuevo modelo agregado!",
         Modelo_Creado: newMod
       });
}

//consultar todas las familias
modCtrl.getMods = async (req, res) => {
    const mod = await Modelo.find();
    res.json(mod);
};

//consultar una sola familia
modCtrl.getMod = async (req, res) => {
    const mod = await Modelo.findById(req.params.id);
    res.json(mod);
}

//borrar una familia
modCtrl.deleteMod = async (req, res) => {
    await Modelo.findByIdAndDelete(req.params.id)
    res.json('modelo Deleted');
}

//actualizaer una familia
modCtrl.updateMod = async (req, res) => {
    const { descripcion } = req.body;
    await Modelo.findByIdAndUpdate(req.params.id, {
        descripcion
    });
    res.json('model Updated');
}

module.exports = modCtrl