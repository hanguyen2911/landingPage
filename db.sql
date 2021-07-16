create database landing_page;
use landing_page;

create table core_values (
	id int not null primary key  auto_increment,
	name varchar(255) not null,
    content text,
    image text,
       created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp

	
);
create table targets (
	id int not null primary key  auto_increment,
    title varchar(255) not null ,
	name varchar(255) ,
    info varchar(255),
    des text,
    image text,
    created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp

);

create table news (
	id int not null primary key  auto_increment,
	title varchar(255) not null,
    content text,
    image text,
    
       created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp

);

create table partners(
	id int not null primary key auto_increment,
    name text not null,
    image text,
    info text,
    link text,
    top int not null ,
      created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);


create table donations(
	id int not null primary key auto_increment,
    name text not null,
    info text,
    link text,
    amount bigint not null ,
        donation_code varchar(255),
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);


create table notifications(
	id int not null primary key auto_increment,
    message text not null,
    status tinyint,
    link text,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);
