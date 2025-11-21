use('escuela');
db.createCollection('alumnos');
db.alumnos.InsertOne({
    nombre: "Santiago Duran",
    Edad: 18,
    direccion: {
        calle: "Av. Constituyentes",
        "numero":33,
        Ciudad:"Queretaro"},
        telefono: "4423385078"
});