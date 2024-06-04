create table trips (
ID BIGINT primary key,
trip_time TIMESTAMP,
done boolean,
updated_at TIMESTAMP null,
created_at TIMESTAMP null
-- bus_id BIGINT NOT NULL FOREIGN KEY REFERENCES buses(ID),
-- admins_id BIGINT NOT NULL FOREIGN KEY REFERENCES admins(ID),
-- traffic_id BIGINT NOT NULL FOREIGN KEY REFERENCES traffics(ID),
)

create table buses (
ID BIGINT primary key,
bus_number BIGINT,
bus_capacity BIGINT,
created_at TIMESTAMP null,
updated_at TIMESTAMP null
);

create table users(
ID BIGINT primary key,
username varchar(20),
email varchar(50),
userpassword varchar(50),
phonenumber BIGINT(30),
usi BIGINT(30),
created_at TIMESTAMP null,
updated_at TIMESTAMP null
-- traffic_id BIGINT NOT NULL FOREIGN KEY REFERENCES traffics(ID)
);
create table traffics(
ID BIGINT primary key,
lunching varchar(100),
stops varchar(100),
created_at TIMESTAMP null,
updated_at TIMESTAMP null
);
CREATE TABLE reservations (
ID BIGINT(20) primary key,
trip_name varchar(100),
count_reserve BIGINT,
created_at TIMESTAMP null,
updated_at TIMESTAMP null
-- trip_id BIGINT NOT NULL FOREIGN KEY REFERENCES trips (ID),
-- users_id BIGINT NOT NULL FOREIGN KEY REFERENCES users (ID),
-- bus_id BIGINT NOT NULL FOREIGN KEY REFERENCES buses (ID),
-- QRcode_id BIGINT NOT NULL FOREIGN KEY REFERENCES QRcodes(ID),
);
create table Confirms (
ID BIGINT primary key,
count_reserve BIGINT,
created_at TIMESTAMP null,
updated_at TIMESTAMP null
-- reserve_id int NOT NULL FOREIGN KEY REFERENCES reservations (ID),
-- trip_id int NOT NULL FOREIGN KEY REFERENCES trips (ID),
-- users_id int NOT NULL FOREIGN KEY REFERENCES users (ID)
)
create table QRcodes (
ID BIGINT primary key,
QRcode blob
-- users_id int NOT NULL FOREIGN KEY REFERENCES users (ID),
);

create table admins(
ID BIGINT primary key,
admin_name varchar(20),
admin_password varchar(20),
created_at TIMESTAMP NULL,
updated_at TIMESTAMP NULL
);

create table employees(
ID BIGINT primary key,
emp_name varchar(20),
emp_password varchar(20),
created_at TIMESTAMP NULL,
updated_at TIMESTAMP NULL
);
create table schd(
ID BIGINT primary key,
trip_time TIMESTAMP,
created_at TIMESTAMP NULL,
updated_at TIMESTAMP NULL
-- bus_id BIGINT NOT NULL FOREIGN KEY REFERENCES buses(ID),
-- traffic_id BIGINT NOT NULL FOREIGN KEY REFERENCES traffics (ID),
-- admin_id BIGINT NOT NULL FOREIGN KEY REFERENCES admins (ID),
);
create table orders(
ID BIGINT primary key,
order_trip_time TIMESTAMP,
created_at TIMESTAMP NULL,
updated_at TIMESTAMP NULL
-- users_id int NOT NULL FOREIGN KEY REFERENCES users(ID)
);
create table persons(
ID BIGINT primary key,
usi BIGINT,
person_name varchar(20),
type_person varchar(20)
-- employees_id int NOT NULL FOREIGN KEY REFERENCES employees(ID),
);