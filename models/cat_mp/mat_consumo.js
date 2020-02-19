const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const Mat_consumo = new Schema(
    {
        id: Schema.Types.ObjectId,
        descripcion: { type: String, required: true },
    },
    {
        timestamps: true
    }
);


MongooseAutoIncrementID.initialise("counters");

Mat_consumo.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "mat_consumo",
    field: "clave",
    incrementBy: 1,
    startAt: 100,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('mat_consumo', Mat_consumo)