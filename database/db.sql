CREATE DATABASE API_talentimetria;

USE API_talentimetria;

CREATE TABLE empresas(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    cempleados INT NOT NULL,
    codigo INT NOT NULL UNIQUE,
    plan CHAR(1)
);

CREATE TABLE usuarios(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    id_empresa INT NOT NULL
);

ALTER TABLE usuarios
ADD CONSTRAINT usuario_empresa
FOREIGN KEY (id_empresa)
REFERENCES empresas(id);