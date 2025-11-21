db.alumnos.deleteOne({ nombre: "Juan Pérez" });
db.alumnos.deleteOne({ nombre: "Ana García" });

db.materias.deleteOne({ nombre: "Matemáticas" });
db.materias.deleteOne({ nombre: "Física" });

db.maestros.deleteOne({ nombre: "Eduardo Pérez" });
db.maestros.deleteOne({ nombre: "Claudia Rodríguez" });

db.especialidades.deleteOne({ nombre: "Matemáticas" });
db.especialidades.deleteOne({ nombre: "Física" });

db.directivos.deleteOne({ nombre: "Pedro Fernández" });
db.directivos.deleteOne({ nombre: "Laura Díaz" });
