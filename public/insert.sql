\c library
insert into books values (1,'Harry Potter',1);
insert into books values (2,'Adventures of Tintin',0);
insert into books values (3,'The Hacker Playbook',1);
insert into books values (4,'Lord of the Rings',1);
insert into books values (5,'Dune',0);
insert into books values (6,'Goosebumps',1);
insert into books values (7,'Percy Jackson',1);
insert into books values (8,'The Jungle Book',0);
insert into books values (9,'Engineering Maths',1);
insert into books values (10,'The Art of Programming',1);
insert into books values (11,'Steve Jobs - Biography',0);

insert into publisher values(1,'Penguin',1935,1);
insert into publisher values(2,'Scholastic',1920,2);
insert into publisher values(3,'Bloomsbury',1986,3);
insert into publisher values(4,'Egmont Group',1995,4);
insert into publisher values(5,'Pearson',1920,5);
insert into publisher values(6,'Penguin',1935,6);
insert into publisher values(7,'Scholastic',1920,7);
insert into publisher values(8,'Bloomsbury',1986,8);
insert into publisher values(9,'Scholastic',1920,9);
insert into publisher values(10,'Bloomsbury',1986,10);


insert into genre values(1,'Fantasy',1);
insert into genre values(2,'Adventure',2);
insert into genre values(3,'Education',3);
insert into genre values(4,'Fantasy',4);
insert into genre values(5,'Fantasy',5);
insert into genre values(6,'Fantasy',6);
insert into genre values(7,'Horror',6);
insert into genre values(8,'Fantasy',7);
insert into genre values(9,'Fantasy',8);
insert into genre values(10,'Education',9);
insert into genre values(11,'Education',10);
insert into genre values(12,'Fiction',7);
insert into genre values(13,'Fiction',1);
insert into genre values(14,'Mythology',7);
insert into genre values(15,'Non-Fiction',3);
insert into genre values(16,'Non-Fiction',9);
insert into genre values(17,'Non-Fiction',10);
insert into genre values(18,'Non-Fiction',11);
insert into genre values(19,'Biograhy',11);
insert into genre values(20,'Kids',1);
insert into genre values(21,'Young Adults',7);
insert into genre values(22,'Kids',6);
insert into genre values(23,'Kids',8);

insert into staff values (1, 'Ram' , 'Admin' ,'ram@mail.com','8023461992','Bangalore');
insert into staff values (2,'Rajesh','Delivery','rajesh@mail.com','8023461122','Bangalore');
insert into staff values (3,'Ramesh','Admin','ramesh@mail.com','7123461432','Bangalore');
insert into staff values (4, 'Suresh' , 'Admin' ,'suresh@mail.com','8034461992','Chennai');
insert into staff values (5,'Mahesh','Delivery','mahesh@mail.com','8873461122','Chennai');
insert into staff values (6,'Pranesh','Admin','pranesh@mail.com','9123461432','Delhi');

insert into reader values ('Shyam','Di',1,'Bangalore','8023461992','shyam@mail.com',1,3);
insert into reader values ('Rahul','P',2,'Bangalore','8023461992','rahul@mail.com',1,5);
insert into reader values ('Raj','S',3,'Bangalore','8023461992','raj@mail.com',1,4);

insert into payment values(1,1000,1,1);
insert into payment values(2,4000,4,2);
insert into payment values(3,2000,2,3);

insert into login values('Pass@123','User',1);
insert into login values('PES@123','User',2);
insert into login values('TrialPass','User',3);

insert into reports values(1,'2021/10/22','2021/10/24',1,1,2);
insert into reports values(2,'2021/10/24','2021/10/27',2,3,1);
insert into reports values(3,'2021/10/27','2021/10/29',3,2,3);

insert into misc_search values(1,0,1,1,1);
insert into misc_search values(1,0,1,1,2);
insert into misc_search values(1,0,1,1,3);
insert into misc_search values(1,0,1,1,4);
insert into misc_search values(0,0,1,1,5);
insert into misc_search values(0,0,1,1,6);
insert into misc_search values(0,0,1,1,7);
insert into misc_search values(0,0,1,1,8);
insert into misc_search values(1,0,1,1,9);
insert into misc_search values(1,0,1,1,10);