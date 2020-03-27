const matCtrl = {}

const MatP = require('../../models/cat_mp/mat_prim')

//crear una nueva Linea
matCtrl.create = async (req, res) => {
    const { codigo, material, costo, magnitud, directa, unidad_medida } = req.body
    const newMat = new MatP({
        codigo, material, costo, magnitud, directa, unidad_medida
    })
    await newMat.save()
    res.status(201).json({
        message: 'new line add',
        Mat_Creada: newMat
    })
}

//consultar todas las lineas
matCtrl.getMany = async (req, res) => {
    const mat = await MatP.find()
        .populate("material", "descripcion")
        .populate("unidad_medida", "descripcion")
    res.json(mat);
};

//consultar una sola linea por Id
matCtrl.getOne = async (req, res) => {
    const mat = await MatP.findById(req.params.id);
    res.json(mat);
}

//borrar una linea
matCtrl.deleteOne = async (req, res) => {
    await MatP.findByIdAndDelete(req.params.id)
    res.json('Mat_prima Deleted');
}

//actualizar una linea
matCtrl.update = async (req, res) => {
    const { codigo, material, costo, magnitud, directa, unidad_medida } = req.body;
    await MatP.findByIdAndUpdate(req.params.id, {
        codigo, material, costo, magnitud, directa, unidad_medida, 
    });
    res.json('MAt_prima Updated');
}

module.exports = matCtrl