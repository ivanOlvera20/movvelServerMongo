const { Schema, model } = require('mongoose')

const mat_prima = new Schema({
    id_mat_prima: Schema.Types.ObjectId,
    codigo: {type: Number, unique: true},
    descripcion: { type: String, required: true, enum: ['Tubo', 'Textil', 'Pintura'] },
    especificacion: String
});

module.exports = model('mat_prima', mat_prima)