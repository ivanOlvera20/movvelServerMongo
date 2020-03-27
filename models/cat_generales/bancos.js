const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const bancosSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});
bancosSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "banco",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('banco', bancosSchema)