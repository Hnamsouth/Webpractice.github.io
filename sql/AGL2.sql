CREATE DATABASE ASM1_T2204M

USE ASM1_T2204M
--  TABLE-1
CREATE TABLE CUSTEMERS
(
	PhoneNB varchar(11) constraint CHECK_CTM PRIMARY KEY CHECK(PhoneNB LIKE '09%[0-9]'),
	Name NVARCHAR(50) NOT NULL ,
	Address NVARCHAR(255) NOT NULL ,
)

-- TABLE-2
CREATE TABLE ORDERS
(
	OrderID INT PRIMARY KEY ,
	ORDERDATE DATE DEFAULT GETDATE(),
	CustemersID varchar(11) constraint C_ORDERS_CTM FOREIGN KEY REFERENCES CUSTEMERS(PhoneNB) CHECK(CustemersID LIKE '09%[0-9]'),
)


--DROP TABLE PRODUCT,ORDERS
--SELECT * FROM ORDERS
-- TABLE-3
CREATE TABLE PRODUCT
(
	ID INT constraint C_PRODUCT PRIMARY KEY IDENTITY(1,1),
	NAME NVARCHAR(255) NOT NULL UNIQUE ,
	CONTENT NTEXT ,
	Unit NVARCHAR(20) NOT NULL ,
	PRICE INT NOT NULL,
)
-- TABLE-4
CREATE TABLE PRODUCT_ORDERS
(
	PO_ID INT PRIMARY KEY IDENTITY(1,1),
	NUMBER_PR_ORD INT NOT NULL,
	--PRICE_PR_ORD INT NOT NULL,
	ProductID INT constraint C_PO_PRODUCT FOREIGN KEY REFERENCES PRODUCT(ID) ,
	OrderID INT constraint C_PO_ORDERS FOREIGN KEY REFERENCES ORDERS(OrderID),
	PRICE_PR INT NOT NULL,
	--CustemersID varchar(11) constraint C_PO_CTM FOREIGN KEY REFERENCES CUSTEMERS(PhoneNB) CHECK(CustemersID LIKE '09%[0-9]')
)
-- TABLE-5

-- INSERT CUSTEMERS 

INSERT INTO CUSTEMERS VALUES
('0987654321',N'Nguyễn Văn An',N'111 Nguyễn Trãi, Thanh Xuân, Hà Nội'),
('0912345678',N'Hoàng Văn B',N'8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội'),
('0988888888',N'Ngô Văn C',N'Tầng Hầm B1- TTTM The Garden, Phường, Từ Liêm, Hà Nội'),
('0977777777',N'Lò Văn D',N'8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội'),
('0966666666',N'Vội Thị E',N'8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội'),
('0955555555',N'Nguyễn Văn F',N'8a Tôn Thất Thuyết, Mỹ Đình, Cầu Giấy, Hà Nội'),
('0911111111',N'Chân Văn Thật',N'56 Nguyễn N, Thanh Xuân, Hà Nội'),
('0922222222',N'Vập thị ngã',N'111 C Trãi,  Xuân Thanh, Nội Hà '),
('0933333333',N'Nguyễn Văn s',N'111 D Nguyễn, Thanh Xuân1, Hà Nội2')


-- INSERT ORDER
INSERT INTO ORDERS VALUES
(123,'2009/11/18','0987654321'),
(111,'2009/11/18','0988888888'),
(222,'2009/11/18','0966666666'),
(333,'2009/11/18','0966666666'),
(456,'2009/06/13','0955555555'),
(444,'2009/06/13','0955555555'),
(789,'2010/03/17','0912345678')


-- INSERT PRODUCT
INSERT INTO PRODUCT(NAME,CONTENT,Unit,PRICE)
VALUES -- id, name,content,unit,price,ctmID
('Máy Tính T450','Máy nhập mới ','Chiếc','1000'),				--1
('Điện Thoại Nokia5670','Điện thoại đang hot ','Chiếc','200'),	--2
('Máy In Samsung 450','Máy in đang ế ','Chiếc','100'),			--3
('Điện Thoại 11O2','Máy đập không vỡ','Chiếc','500'),			--4
('Điện Thoại 110I','Bảo hành chọn đời ','Chiếc','2000')			--5

-- INSERT PRODUCT_ORDERS
INSERT INTO PRODUCT_ORDERS(NUMBER_PR_ORD,ProductID,OrderID,PRICE_PR)
VALUES -- soluongSP,ProductID,OrderID,CustemersID
(1,3,123,'100'),--1
(7,1,789,'7000'),--2
(4,1,123,'400'),--3
(10,2,123,'2000'),--4
(2,2,123,'400'),--5
(10,1,123,'10000'),--6
(900,4,789,'450000'),--7
(500,5,456,'1000000'),--8
(1,3,123,'100'),--9
(6,2,123,'1200')--10
SELECT * FROM PRODUCT_ORDERS

SELECT SUM(PRICE_PR) FROM PRODUCT_ORDERS
WHERE OrderID = 123
-- CUSTEMERS,ORDERS,PRODUCT,PRODUCT_ORDERS

--a) Liệt kê danh sách khách hàng đã mua hàng ở cửa hàng.
	SELECT * FROM CUSTEMERS
--b) Liệt kê danh sách sản phẩm của của hàng
	SELECT * FROM PRODUCT
--c) Liệt kê danh sách các đơn đặt hàng của cửa hàng.
	SELECT * FROM ORDERS
--a) Liệt kê danh sách khách hàng theo thứ thự alphabet.
	SELECT * FROM CUSTEMERS
	 ORDER BY CUSTEMERS.Name DESC
--b) Liệt kê danh sách sản phẩm của cửa hàng theo thứ thự giá giảm dần.
	SELECT * FROM PRODUCT
	 ORDER BY PRODUCT.Name DESC
--c) Liệt kê các sản phẩm mà khách hàng Nguyễn Văn An đã mua.
	SELECT * FROM PRODUCT  AS PRD 
	WHERE PRD.ID IN 
	(SELECT ProductID FROM PRODUCT_ORDERS
	WHERE PRODUCT_ORDERS.OrderID LIKE 
	(SELECT OrderID FROM ORDERS 
	WHERE ORDERS.CustemersID = 
	(SELECT PhoneNB FROM CUSTEMERS 
	WHERE CUSTEMERS.Name LIKE N'Nguyễn Văn An')
	))

--a) Số khách hàng đã mua ở cửa hàng.
	SELECT COUNT(*) AS SKHDM FROM CUSTEMERS
	WHERE PhoneNB IN (SELECT ORDERS.CustemersID FROM ORDERS )

--b) Số mặt hàng mà cửa hàng bán.
	SELECT COUNT (*) AS AMOUNT_PRODUCT FROM PRODUCT

--c) Tổng tiền của từng đơn hàng.
	SELECT SUM(PO.PRICE_PR) AS TOTAL,PO.OrderID FROM PRODUCT_ORDERS AS PO
	WHERE PO.OrderID IN 
	(SELECT ORDERS.OrderID FROM ORDERS)
	GROUP BY OrderID 

