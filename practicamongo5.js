db.alumnos.find({ grado: "10" });
db.alumnos.find({ edad: { $gt: 15 } });
db.alumnos.find({ especialidad: "Matemáticas" });
db.alumnos.find({ nombre: "Ana García" });
db.alumnos.find({ edad: { $in: [14, 15] } });
db.alumnos.find({ nombre: /^M/ });
db.alumnos.aggregate([{ $group: { _id: "$grado", total: { $sum: 1 } } }]);
db.alumnos.find().sort({ edad: 1 });
db.alumnos.find({ especialidad: { $ne: "Arte" } });
db.alumnos.find({}, { nombre: 1, grado: 1, _id: 0 });

db.materias.find({ área: "Ciencias Exactas" });
db.materias.find({ nombre: "Arte" });
db.materias.find({ nombre: { $regex: /^.{9,}$/ } });
db.materias.find({}, { nombre: 1, _id: 0 });
db.materias.find({ área: { $ne: "Humanidades" } });
db.materias.aggregate([{ $group: { _id: "$área", total: { $sum: 1 } } }]);
db.materias.find().sort({ nombre: 1 });
db.materias.find({ área: "Arte" });
db.materias.find({ nombre: /^M/ });
db.materias.find({ nombre: /a/i });

db.maestros.find({ años_experiencia: { $gt: 10 } });
db.maestros.find({ materia: "Matemáticas" });
db.maestros.find({ nombre: /^C/ });
db.maestros.find().sort({ años_experiencia: -1 });
db.maestros.find({ años_experiencia: { $gte: 5, $lte: 10 } });
db.maestros.aggregate([{ $group: { _id: "$materia", total: { $sum: 1 } } }]);
db.maestros.find({}, { nombre: 1, materia: 1, _id: 0 });
db.maestros.find({ nombre: /a/i });
db.maestros.find({ materia: { $in: ["Arte", "Música"] } });
db.maestros.find({ años_experiencia: { $lt: 8 } });


db.especialidades.find({ nombre: "Biología" });
db.especialidades.find({ nombre: /a$/ });
db.especialidades.find({}, { nombre: 1, descripción: 1, _id: 0 });
db.especialidades.find({ descripción: /estudio/i });
db.especialidades.countDocuments();
db.especialidades.find({ nombre: { $regex: /^.{8,}$/ } });
db.especialidades.find({ nombre: { $in: ["Arte", "Música"] } });
db.especialidades.find({ nombre: /^[^AEIOUaeiou]/ });
db.especialidades.find().sort({ nombre: 1 });
db.especialidades.find({ descripción: { $regex: /(materia|medio ambiente)/i } });

db.directivos.find({ cargo: "Director" });
db.directivos.find({ años_servicio: { $gt: 15 } });
db.directivos.find().sort({ años_servicio: 1 });
db.directivos.find({ nombre: /^L/ });
db.directivos.find({ cargo: /Coordinador|Coordinadora/ });
db.directivos.aggregate([{ $group: { _id: "$cargo", total: { $sum: 1 } } }]);
db.directivos.find({}, { nombre: 1, cargo: 1, _id: 0 });
db.directivos.find({ años_servicio: { $gte: 10, $lte: 20 } });
db.directivos.find({ cargo: /Ciencias/ });
db.directivos.find({ nombre: /a/i });
