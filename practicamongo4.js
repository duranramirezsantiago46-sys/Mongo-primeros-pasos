db.alumnos.updateOne(
  { nombre: "Juan Pérez" }, 
  { $set: { edad: 16, grado: "11" } }
);
db.alumnos.updateOne(
  { nombre: "Ana García" },
  { $set: { edad: 15, grado: "10" } }
);

db.materias.updateOne(
  { nombre: "Matemáticas" },
  { $set: { área: "Ciencias Exactas Avanzadas" } }
);
db.materias.updateOne(
  { nombre: "Física" },
  { $set: { área: "Ciencias Exactas Avanzadas" } }
);

db.maestros.updateOne(
  { nombre: "Eduardo Pérez" },
  { $set: { años_experiencia: 12 } }
);
db.maestros.updateOne(
  { nombre: "Claudia Rodríguez" },
  { $set: { años_experiencia: 9 } }
);

db.especialidades.updateOne(
  { nombre: "Matemáticas" },
  { $set: { descripción: "Estudio de estructuras, patrones y teoría avanzada." } }
);
db.especialidades.updateOne(
  { nombre: "Física" },
  { $set: { descripción: "Estudio de las leyes fundamentales y fenómenos avanzados de la naturaleza." } }
);

db.directivos.updateOne(
  { nombre: "Pedro Fernández" },
  { $set: { años_servicio: 21, cargo: "Director General" } }
);
db.directivos.updateOne(
  { nombre: "Laura Díaz" },
  { $set: { años_servicio: 19, cargo: "Subdirectora Académica" } }
);
