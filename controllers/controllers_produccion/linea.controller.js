const linCtrl = {}

const Linea = require('../../models/cat_produccion/linea')

//crear una nueva Linea
linCtrl.create = async (req, res) => {
    const { descripcion, familia} = req.body
    const newLine = new Linea({
        descripcion,
        familia
    })  
    await newLine.save()
    res.status(201).json({
        message: 'new line add',
        Linea_Creada: newLine
    })
}

//consultar todas las lineas
linCtrl.getMany = async (req, res) => {
    const lin = await Linea.find()
    .populate('familia', 'descripcion')
    res.json(lin);
};

//consultar una sola linea por Id
linCtrl.getOne = async (req, res) => {
    const lin = await Linea.findById(req.params.id);
    res.json(lin);
}

//borrar una linea
linCtrl.deleteOne = async (req, res) => {
    await Linea.findByIdAndDelete(req.params.id)
    res.json('linea Deleted');
}

//actualizar una linea
linCtrl.update = async (req, res) => {
    const { descripcion, familia} = req.body;
    await Linea.findByIdAndUpdate(req.params.id, {
        descripcion,
        familia
    });
    res.json('Linea Updated');
}

module.exports = linCtrl