const PropiedadesCtr = {};
const propiedadesModel = require('../models/propiedades-model');
const propiedad = require('../models/propiedades-model');

// Crear propiedades
PropiedadesCtr.crear = async(req, res) => {
    const{nombre, tipo, descripcion, areaTotal, numCuartos, numbanos, numParqueaderos, valor} = req.body
    const nuevaPropiedad = new propiedad({
        nombre, 
        tipo, 
        descripcion, 
        areaTotal, 
        numCuartos, 
        numbanos, 
        numParqueaderos, 
        valor
    })

    const respuesta = await nuevaPropiedad.save()
    res.json({
        mensaje: 'Propiedad creada',
        respuesta
    })
}

// Actualizar propiedades
PropiedadesCtr.actualizarPropiedad = async (req, res) => {
    const id = req.params.id;
    await propiedadesModel.findByIdAndUpdate({ _id: id }, req.body);
    const respuesta = await propiedadesModel.findById({ _id: id });
    res.json({
      mensaje: "Propiedad actualizada",
      respuesta,
    });
};

// Listar Propiedades
PropiedadesCtr.listarPropiedades = async(req, res) => {
    const respuesta = await propiedadesModel.find()
    res.json(respuesta)
}


// Eliminar Propiedad
PropiedadesCtr.eliminarPropiedad = async(req, res) => {
    const id = req.params.id
    await propiedadesModel.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'La propiedad se ha eliminado con éxito!'
    })
}

module.exports = PropiedadesCtr


