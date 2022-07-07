const {Router} = require('express');
const router = Router();
const propiedadesCtr = require('../controller/propiedades-controller');


router.post('/crearPropiedad', propiedadesCtr.crear);
router.put('/actualizarPropiedad/:id', propiedadesCtr.actualizarPropiedad);
router.get('/listarPropiedades', propiedadesCtr.listarPropiedades);
router.delete('/eliminarPropiedad/:id', propiedadesCtr.eliminarPropiedad);

module.exports = router