use picerija;

insert into category (name) values ('pizza');
insert into category (name) values ('dessert');
insert into category (name) values ('vine');
insert into category (name) values ('pasta');
insert into category (name) values ('coffee');


insert into  menu ( name, price, category_id) values ('Capricciosa', 7.5, 1);
insert into  menu ( name, price, category_id) values ('Tiramisu', 3.5, 2);
insert into  menu ( name, price, category_id) values ('Margarita', 8.5, 1);
insert into  menu ( name, price, category_id) values ('Zvonko Bogdan', 7.5, 3);
insert into  menu ( name, price, category_id) values ('Lavazza', 1.5, 5);
insert into  menu ( name, price, category_id) values ('Taggliatelle San Marco', 10.5, 4);
insert into  menu ( name, price, category_id) values ('Chianti', 13.5, 3);

-- insert users
-- password is 12345 (bcrypt encoded) 
insert into security_user (username, password, first_name, last_name, role) values 
	('admin', '$2a$04$4pqDFh9SxLAg/uSH59JCB.LwIS6QoAjM9qcE7H9e2drFuWhvTnDFi', 'Admin', 'Admin', 'ADMINISTRATOR');
-- password is abcdef (bcrypt encoded)
insert into security_user (username, password, first_name, last_name, role) values 
	('petar', '$2a$04$Yr3QD6lbcemnrRNLbUMLBez2oEK15pdacIgfkvymQ9oMhqsEE56EK', 'Petar', 'Petrovic', 'WORKER');
