const { Schema, model } = require("mongoose");
const { MongooseAutoIncrementID } = require("mongoose-auto-increment-reworked");

const Mat_prima = new Schema(
    {
        id: Schema.Types.ObjectId,
        codigo: {type: String, uppercase: true, uppercase:true},
        material: { type: Schema.ObjectId, required: true, ref: "mat_consumo" },
        costo: Number,
        magnitud: String,
        directa: { type: String, enum: ["Directa", "Indirecta"], default: "Directa" },
        unidad_medida: { type: Schema.ObjectId, ref: "identificador" },
    },
    {
        timestamps: true
    }
);


MongooseAutoIncrementID.initialise("counters");

Mat_prima.plugin(MongooseAutoIncrementID.plugin, {
    modelName: "mat_prima",
    field: "clave",
    incrementBy: 1,
    startAt: 1,
    unique: true,
    nextCount: false,
    resetCount: false
});

module.exports = model('mat_prima', Mat_prima)