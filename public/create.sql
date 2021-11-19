create database library;
\c library

CREATE TABLE Books
(
  Book_ID INT NOT NULL,
  Book_Name VARCHAR(30) NOT NULL,
  is_rentable INT NOT NULL,
  PRIMARY KEY (Book_ID),
  UNIQUE (Book_Name)
);

CREATE TABLE Genre
(
  Category_ID INT NOT NULL,
  Category_Name VARCHAR(30) NOT NULL,
  Book_ID INT NOT NULL,
  PRIMARY KEY (Category_ID),
  FOREIGN KEY (Book_ID) REFERENCES Books(Book_ID)
);

CREATE TABLE Reader
(
  First_Name VARCHAR(30) NOT NULL,
  Last_Name VARCHAR(30) NOT NULL,
  User_ID INT NOT NULL,
  Address VARCHAR(50) NOT NULL,
  Phone_Number VARCHAR(10) NOT NULL,
  Email_Address VARCHAR(30) NOT NULL,
  No_of_Books INT NOT NULL,
  Subscription_period INT NOT NULL,
  PRIMARY KEY (User_ID),
  UNIQUE (Email_Address)
);

CREATE TABLE Publisher
(
  Publisher_ID INT NOT NULL,
  Name VARCHAR(30) NOT NULL,
  Year_Of_Publishment INT NOT NULL,
  Book_ID INT NOT NULL,
  PRIMARY KEY (Publisher_ID),
  FOREIGN KEY (Book_ID) REFERENCES Books(Book_ID)
);

CREATE TABLE Staff
(
  Staff_ID INT NOT NULL,
  Name VARCHAR(30) NOT NULL,
  Staff_Type VARCHAR(30) NOT NULL,
  Email VARCHAR(30) NOT NULL,
  Phone_No VARCHAR(10) NOT NULL,
  Address VARCHAR(50) NOT NULL,
  PRIMARY KEY (Staff_ID)
);

CREATE TABLE Reports
(
  Report_ID INT NOT NULL,
  Return_Date DATE NOT NULL,
  Issue_Date DATE NOT NULL,
  Staff_ID INT NOT NULL,
  Book_ID INT NOT NULL,
  User_ID INT NOT NULL,
  PRIMARY KEY (Report_ID),
  FOREIGN KEY (Staff_ID) REFERENCES Staff(Staff_ID),
  FOREIGN KEY (Book_ID) REFERENCES Books(Book_ID),
  FOREIGN KEY (User_ID) REFERENCES Reader(User_ID)
);

CREATE TABLE Payment
(
  Payment_ID INT NOT NULL,
  Price INT NOT NULL,
  Subscription_Period INT NOT NULL,
  User_ID INT NOT NULL,
  PRIMARY KEY (Payment_ID),
  FOREIGN KEY (User_ID) REFERENCES Reader(User_ID)
);

CREATE TABLE Login
(
  Password VARCHAR(30) NOT NULL,
  Account_Type VARCHAR(30) NOT NULL,
  User_ID INT NOT NULL,
  FOREIGN KEY (User_ID) REFERENCES Reader(User_ID)
);

CREATE TABLE Misc_Search
(
  New_Arrival INT NOT NULL,
  Popular INT NOT NULL,
  Trending INT NOT NULL,
  Writer_Choice INT NOT NULL,
  Book_ID INT NOT NULL,
  FOREIGN KEY (Book_ID) REFERENCES Books(Book_ID)
);