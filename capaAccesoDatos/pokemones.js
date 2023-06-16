const mongoose = require("mongoose");


// Funciones 
mongoose.connect("mongodb://127.0.0.1:27017/pokemon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conectó con base de datos"))
.catch(err => console.log("Error de conexión con la base de datos", err));

const pokemonSchema =  new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number
    });

    const pokeModel = mongoose.model("pokemones", pokemonSchema);

    const nuevoPokemon = new pokeModel( {
        nombre: "Beedril",
        tipo: "Insecto",
        nivel: 13
    })


    //Metodo Post - Crear Pokemon
    nuevoPokemon.save()
    .then(() => console.log("Se agregó correctamente el dato pokemon"))
    .catch(err => console.log("No fue posible guardar el pokemon", err));

    // Metodo Get - Leer los registros

    pokeModel.find()
    .then(pokemones => console.log("Estos son los pokemones existentes en la base de datos: ", pokemones))
    .catch(err => console.log("No se encontró nada", err));

    
    // mongoose.disconnect();