-- mi_proyecto.sql
-- Proyecto de ejemplo: Gestión de turnos en una clínica (normalizado hasta 3FN)

CREATE DATABASE IF NOT EXISTS clinica_turnos;
USE clinica_turnos;

-- Pacientes
CREATE TABLE pacientes (
  id_paciente INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  documento VARCHAR(50),
  telefono VARCHAR(50),
  email VARCHAR(100)
);

-- Médicos
CREATE TABLE medicos (
  id_medico INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  especialidad VARCHAR(100)
);

-- Salas
CREATE TABLE salas (
  id_sala INT PRIMARY KEY AUTO_INCREMENT,
  nombre_sala VARCHAR(100),
  ubicacion VARCHAR(100)
);

-- Turnos
CREATE TABLE turnos (
  id_turno INT PRIMARY KEY AUTO_INCREMENT,
  id_paciente INT NOT NULL,
  id_medico INT NOT NULL,
  id_sala INT,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  estado VARCHAR(50),
  FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
  FOREIGN KEY (id_medico) REFERENCES medicos(id_medico),
  FOREIGN KEY (id_sala) REFERENCES salas(id_sala)
);

-- Historial de atenciones (información complementaria que no se repite)
CREATE TABLE atenciones (
  id_atencion INT PRIMARY KEY AUTO_INCREMENT,
  id_turno INT NOT NULL,
  diagnostico TEXT,
  receta TEXT,
  observaciones TEXT,
  FOREIGN KEY (id_turno) REFERENCES turnos(id_turno)
);