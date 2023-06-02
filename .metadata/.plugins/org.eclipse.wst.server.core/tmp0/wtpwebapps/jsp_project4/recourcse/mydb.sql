--230530--
create user 'juser'@'localhost' IDENTIFIED by 'mysql';

grant all privileges on mydb.* to 'juser'@'localhost' with grant option;

create database mydb;

create table board(
bno int not null auto_increment, 
title varchar(100) not null,
content varchar(1000) not null,
img_file text,
writer varchar(100) not null,
reg_date datetime not null default now(),
last_modify datetime default now(),
read_count int default '0',
primary key(bno)
);

create table member(
pno int not null auto_increment, 
id varchar(100) not null,
password varchar(100) not null,
email varchar(100),
reg_date datetime not null default now(),
last_logout datetime,
grade varchar(45) not null default 'nomal',
primary key(pno)
);

create table comment(
cno int not null auto_increment, 
target_bno int not null, 
writer varchar(100) not null,
content varchar(1000) not null,
reg_date datetime not null default now(),
primary key(cno)
);