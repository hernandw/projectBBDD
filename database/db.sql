-- Creacion de la BBDD
create database users;


--Creación de la tabla usuarios
create table users (
id serial primary key,
name varchar(50) not null,
email varchar(50) not null
);

--inserción de un usuario
insert into users(name, email) values('Juan', 'juan@gmail.com');
insert into users(name, email) values('Maria', 'maria@gmail.com');



