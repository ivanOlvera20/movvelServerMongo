const { Schema, model } = require('mongoose')
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const familiaSchema = new Schema(
    {
        id_familia: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    }, {
    timestamps: true
});
familiaSchema.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "familia",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('familia', familiaSchema)
