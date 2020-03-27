const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const cfdiSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});
cfdiSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "cfdi",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('cfdi', cfdiSchema)