const matCtrl = {}

const Mat = require('../../models/cat_mp/mat_consumo')
//crear una nueva Linea
matCtrl.create = async (req, res) => {
    const { descripcion, codigo } = req.body
    const newMat = new Mat({
        descripcion,
        codigo
    })
    await newMat.save()
    res.status(201).json({
        message: 'new line add',
        Mat_Creada: newMat
    })
}

//consultar todas las lineas
matCtrl.getMany = async (req, res) => {
    const mat = await Mat.find()
    res.json(mat);
};

//consultar una sola linea por Id
matCtrl.getOne = async (req, res) => {
    const mat = await Mat.findById(req.params.id);
    res.json(mat);
}

//borrar una linea
matCtrl.deleteOne = async (req, res) => {
    await Mat.findByIdAndDelete(req.params.id)
    res.json('Mat_consumo Deleted');
}

//actualizar una linea
matCtrl.update = async (req, res) => {
    const { descripcion, codigo } = req.body;
    await Mat.findByIdAndUpdate(req.params.id, {
        descripcion,
        codigo

    });
    res.json('Mat_consumo Updated');
}

module.exports = matCtrl