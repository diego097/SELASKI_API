CREATE DATABASE selaski;
USE selaski;

CREATE TABLE User(
IdUser INT NOT NULL auto_increment unique,
Name VARCHAR(50) NOT NULL,
Email VARCHAR(100),
Status INT,
primary key (IdUser)
);

CREATE TABLE Orders(
IdOrder INT NOT NULL auto_increment unique,
IdUser INT NOT NULL,
OrderNumber INT NOT NULL,
DateTime DATETIME ,
ProviderName VARCHAR(100),
DateCreated DATETIME,
Observation VARCHAR(500),
TotalValue  FLOAT8 NOT NULL,
Status INT,
PRIMARY KEY (IdOrder),
FOREIGN KEY (IdUser) REFERENCES User(IdUser)
);

CREATE TABLE OrdersProducts(
IdOrdersProducts INT NOT NULL auto_increment unique,
IdOrder INT NOT NULL,
ValueUnit  FLOAT NOT NULL,
Unit  VARCHAR(20) NOT NULL,
Description  VARCHAR(500),
SKU  VARCHAR(100),
Quantity  INT NOT NULL,
QtyBox  INT NOT NULL,
Weight VARCHAR(50),
Volumen  VARCHAR(50),
Mark VARCHAR(50),
Status INT,
PRIMARY KEY (IdOrdersProducts),
FOREIGN KEY (IdOrder) REFERENCES Orders(IdOrder)
);
