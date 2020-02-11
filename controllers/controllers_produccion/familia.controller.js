const famCtrl = {}

const Familia = require('../../models/cat_produccion/familia')

//crear una nueva familia
famCtrl.createFam = async (req, res) => {
    const { descripcion } = req.body
    const newFam = new Familia({
        descripcion
    })
    await newFam.save()
       res.status(201).json({
         message: "nueva familia add",
         Familia_Creada: newFam
       });
}

//consultar todas las familias
famCtrl.getFams = async (req, res) => {
    const fam = await Familia.find();
    res.json(fam);
};

//consultar una sola familia
famCtrl.getFam = async (req, res) => {
    const fam = await Familia.findById(req.params.id);
    res.json(fam);
}

//borrar una familia
famCtrl.deleteFam = async (req, res) => {
    await Familia.findByIdAndDelete(req.params.id)
    res.json('Fam Deleted');
}

//actualizaer una familia
famCtrl.updateFam = async (req, res) => {
    const { descripcion} = req.body;
    await Familia.findByIdAndUpdate(req.params.id, {
       descripcion
    });
    res.json('Fam Updated');
}

module.exports = famCtrl