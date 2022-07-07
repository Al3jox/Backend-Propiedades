const mongoose = require('mongoose');

// BD Nube
URL = ('mongodb+srv://Al3jox:Mg31415*@cluster0.5uq3h.mongodb.net/dbPropiedades?retryWrites=true&w=majority');

// BD Local
// URL=('mongodb://localhost/dbPropiedades');

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(db => console.log("Conexión exitosa a la BD:", db.connection.name))
  .catch(error => console.log(error))

  // Exportación del módulo
  module.exports = mongoose;