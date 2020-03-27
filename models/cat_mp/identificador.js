const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const identificadorSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});
identificadorSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "identificador",
    field: "clave",
    incrementBy: 1,
    startAt: 1,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('identificador', identificadorSchema)