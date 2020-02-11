const { Schema, model } = require('mongoose')

const lineaSchema = new Schema(
    {
        id_linea: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
        famlia: { type: Schema.ObjectId, ref: 'Familia'}
    }, {
    timestamps: true
});

module.exports = model('linea', lineaSchema)
