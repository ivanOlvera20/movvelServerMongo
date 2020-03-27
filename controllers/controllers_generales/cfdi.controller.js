const cfCtrl = {}

const Cfdi = require('../../models/cat_generales/cfdi')

//crear una nueva Linea
cfCtrl.create = async (req, res) => {
    const { descripcion } = req.body
    const newcfdi = new Cfdi({
        descripcion,
    })
    await newcfdi.save()
    res.status(201).json({
        message: 'new cfdi add',
        Cfdi_Creada: newcfdi
    })
}

//consultar todas las lineas
cfCtrl.getMany = async (req, res) => {
    const cfdi = await Cfdi.find()
    res.json(cfdi);
};

//consultar una sola linea por Id
cfCtrl.getOne = async (req, res) => {
    const cfdi = await Cfdi.findById(req.params.id);
    res.json(cfdi);
}

//borrar una linea
cfCtrl.deleteOne = async (req, res) => {
    await Cfdi.findByIdAndDelete(req.params.id)
    res.json('cfdi Deleted');
}

//actualizar una linea
cfCtrl.update = async (req, res) => {
    const { descripcion } = req.body;
    await Cfdi.findByIdAndUpdate(req.params.id, {
        descripcion,
    });
    res.json('cfdi Updated');
}

module.exports = cfCtrl