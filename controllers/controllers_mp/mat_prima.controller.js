const matCtrl = {}

const Mat = require('../../models/cat_mp/mat_prim')

//crear una nueva familia
matCtrl.create = async (req, res) => {
    const { codigo, descripcion, especificacion } = req.body
    const newMat = new Mat({
        codigo,
        descripcion,
        especificacion
    })
    await newMat.save()
       res.status(201).json({
         message: "nueva materia prima agregada!",
         Linea_Creada: newMat
       });
}

//consultar todas las familias
matCtrl.getMany = async (req, res) => {
    const mat = await Mat.find()
    res.json(mat);
};

//consultar una sola familia
matCtrl.getOne = async (req, res) => {
    const mat = await Mat.findById(req.params.id);
    res.json(mat);
}

//borrar una familia
matCtrl.deleteOne = async (req, res) => {
    await Mat.findByIdAndDelete(req.params.id)
    res.json('mat_prima Deleted');
}

//actualizaer una familia
matCtrl.update = async (req, res) => {
    const { codigo, descripcion, especificacion} = req.body;
    await Mat.findByIdAndUpdate(req.params.id, {
        codigo,
        descripcion,
        especificacion
    });
    res.json('Mat_prima Updated');
}

module.exports = matCtrl