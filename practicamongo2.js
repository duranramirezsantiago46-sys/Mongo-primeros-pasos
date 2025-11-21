use('escuela');

db.alumnos.insertMany([
  { nombre: "Juan Pérez", edad: 15, grado: "10", especialidad: "Matemáticas" },
  { nombre: "Ana García", edad: 14, grado: "9", especialidad: "Física" },
  { nombre: "Carlos López", edad: 16, grado: "11", especialidad: "Química" },
  { nombre: "María Sánchez", edad: 17, grado: "12", especialidad: "Biología" },
  { nombre: "Luis Rodríguez", edad: 15, grado: "10", especialidad: "Historia" },
  { nombre: "Laura Martínez", edad: 14, grado: "9", especialidad: "Literatura" },
  { nombre: "Pedro Gómez", edad: 16, grado: "11", especialidad: "Geografía" },
  { nombre: "Sofía Fernández", edad: 17, grado: "12", especialidad: "Arte" },
  { nombre: "Daniela Ramírez", edad: 15, grado: "10", especialidad: "Educación Física" },
  { nombre: "Antonio Díaz", edad: 14, grado: "9", especialidad: "Música" }
]);

db.materias.insertMany([
  { nombre: "Matemáticas", área: "Ciencias Exactas" },
  { nombre: "Física", área: "Ciencias Exactas" },
  { nombre: "Química", área: "Ciencias Exactas" },
  { nombre: "Biología", área: "Ciencias Naturales" },
  { nombre: "Historia", área: "Humanidades" },
  { nombre: "Literatura", área: "Humanidades" },
  { nombre: "Geografía", área: "Ciencias Sociales" },
  { nombre: "Arte", área: "Arte" },
  { nombre: "Educación Física", área: "Deportes" },
  { nombre: "Música", área: "Arte" }
]);

db.maestros.insertMany([
  { nombre: "Eduardo Pérez", materia: "Matemáticas", años_experiencia: 10 },
  { nombre: "Claudia Rodríguez", materia: "Física", años_experiencia: 8 },
  { nombre: "María López", materia: "Química", años_experiencia: 12 },
  { nombre: "Juanita Gómez", materia: "Biología", años_experiencia: 15 },
  { nombre: "Luis Hernández", materia: "Historia", años_experiencia: 5 },
  { nombre: "Sofía Martínez", materia: "Literatura", años_experiencia: 6 },
  { nombre: "Carlos Díaz", materia: "Geografía", años_experiencia: 7 },
  { nombre: "Paola Sánchez", materia: "Arte", años_experiencia: 9 },
  { nombre: "José González", materia: "Educación Física", años_experiencia: 4 },
  { nombre: "Antonio Fernández", materia: "Música", años_experiencia: 11 }
]);


db.especialidades.insertMany([
  { nombre: "Matemáticas", descripción: "Estudio de los números, estructuras y patrones." },
  { nombre: "Física", descripción: "Estudio de las leyes fundamentales de la naturaleza." },
  { nombre: "Química", descripción: "Estudio de la materia y sus interacciones." },
  { nombre: "Biología", descripción: "Estudio de los seres vivos y su relación con el medio ambiente." },
  { nombre: "Historia", descripción: "Estudio de los hechos del pasado." },
  { nombre: "Literatura", descripción: "Estudio de los textos escritos y su análisis." },
  { nombre: "Geografía", descripción: "Estudio de la Tierra y sus características físicas y humanas." },
  { nombre: "Arte", descripción: "Expresión de la creatividad a través de diversas disciplinas artísticas." },
  { nombre: "Educación Física", descripción: "Desarrollo físico y deportivo del estudiante." },
  { nombre: "Música", descripción: "Estudio de la teoría y práctica de los sonidos musicales." }
]);

db.directivos.insertMany([
  { nombre: "Pedro Fernández", cargo: "Director", años_servicio: 20 },
  { nombre: "Laura Díaz", cargo: "Subdirectora", años_servicio: 18 },
  { nombre: "Carlos Ramírez", cargo: "Coordinador de Matemáticas", años_servicio: 12 },
  { nombre: "Ana Torres", cargo: "Coordinadora de Ciencias Sociales", años_servicio: 10 },
  { nombre: "Sofía Gómez", cargo: "Coordinadora de Lenguas", años_servicio: 15 },
  { nombre: "Ricardo López", cargo: "Coordinador de Educación Física", años_servicio: 8 },
  { nombre: "Marta Sánchez", cargo: "Coordinadora de Arte", años_servicio: 7 },
  { nombre: "Juan Pérez", cargo: "Coordinador de Música", años_servicio: 14 },
  { nombre: "Javier Martínez", cargo: "Coordinador de Ciencias Naturales", años_servicio: 16 },
  { nombre: "Luisa González", cargo: "Coordinadora de Deportes", años_servicio: 9 }
]);
