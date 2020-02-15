const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const mat_prima = new Schema({
    id_mat_prima: Schema.Types.ObjectId,
    descripcion: { type: String, required: true, enum: ['Tubo', 'Textil', 'Pintura'] },
    especificacion: String
});


MongooseAutoIncrementID.initialise("counters");

mat_prima.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "mat_prima",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('mat_prima', mat_prima)