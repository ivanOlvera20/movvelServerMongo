const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const modeloSchema = new Schema(
    {
        id_modelo: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});
MongooseAutoIncrementID.initialise("counters");

modeloSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "modelo",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});
module.exports = model('modelo', modeloSchema)
