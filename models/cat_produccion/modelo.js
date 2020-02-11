const { Schema, model } = require('mongoose')

const modeloSchema = new Schema(
    {
        id_modelo: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});

module.exports = model('modelo', modeloSchema)
