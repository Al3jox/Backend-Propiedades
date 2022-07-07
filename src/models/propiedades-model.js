// Modelo del objeto
const mongoose = require("mongoose");
const{Schema} = mongoose;

const propiedadesSchema = new Schema ({
    nombre: {type: String},
    tipo: {type: String},
    descripcion: {type: String},
    areaTotal: {type: Number},
    numCuartos: {type: Number},
    numbanos: {type: Number},
    numParqueaderos: {type: Number},
    valor: {type: Number},
    direccion: {type: String},
    date:{type: Date, default: Date.now}
})

// Exportación del modelo
module.exports = mongoose.model('propiedades', propiedadesSchema)