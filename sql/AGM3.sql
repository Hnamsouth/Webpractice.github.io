
/*
CREATE DATABASE AGM3
USE AGM3
*/

CREATE TABLE BRAND
(
	ID INT CONSTRAINT C_CPN PRIMARY KEY ,
	Name nvarchar(50) not null unique,
	Address nvarchar(255) not null ,
	PhoneNB varchar(20) constraint C_CPN_PHONE CHECK(PhoneNB LIKE '[0-9]%[0-9]') unique
)
CREATE TABLE PRODUCT
(
	ID INT CONSTRAINT C_PRODUCT_ID PRIMARY KEY IDENTITY(1,1),
	Name nvarchar(255) not null unique,
	Content nvarchar(255) not null ,
	Unit nvarchar(55) not null ,
	Price int default 0,
	Amount int default 1,
	BrandID INT CONSTRAINT C_PR_CPNID FOREIGN KEY REFERENCES BRAND(ID)
)

-- INSERT DATA BRAND
INSERT INTO BRAND VALUES
(123,'TETS TRIGGER','VN','987654'),
(111,'Asus','USA','999999'),
(222,'Dell','USA','868686'),
(333,'Acer','USA','111111'),
(444,'SamSung','USA','222222'),
(555,'Aple','USA','353535'),
(666,'Nokia','USA','666666'),
(777,'HP','USA','696969'),
(888,'SONY','USA','123456')

-- INSERT DATA PRODUCT
INSERT INTO PRODUCT(Name,Content,Unit,Price,Amount,BrandID) VALUES
(N'Điện Thoại Nokia5670',N'Điện thoại đang hot ',N'Chiếc',200,28,666),	--2
(N'Máy In Samsung 450',N'Máy in đang ế ',N'Chiếc',100,64,444),			--3
(N'Điện Thoại 11O2',N'Máy đập không vỡ',N'Chiếc',500,107,666),			--4
(N'Điện Thoại 110I',N'a sời ',N'Chiếc',100,5,333),	
(N'Tai nghe 110I',N'Táo màu xám ',N'Chiếc',2000,11,555),	
(N'Máy In k3',N'bảo Hành mất Phí chọn đời ',N'Chiếc',600,6,777),	
(N'Máy Ảnh SONY01',N'lâu lâu dễ hỏng ',N'Chiếc',1000,50,888)	--5

INSERT INTO PRODUCT(Name,Content,Unit,Price,Amount,BrandID) VALUES
(N'Máy Tính Dell03',N'DELL Bảo hành chọn đời ',N'Chiếc',700,0,222),
(N'Điện Thoại bấm bấm',N'nó kìa ',N'Chiếc',400,1,666),	
(N'Máy Tính T450',N'Máy nhập mới ',N'Chiếc',1000,10,111)
delete from PRODUCT

/*
3. Viết các câu lệnh để thêm dữ liệu vào các bảng
Cho vào hai dữ liệu tưng tự như bảng đề bài trên*/
--4. Viết các câu lênh truy vấn để
--a) Hiển thị tất cả các hãng sản xuất.
	SELECT BRAND.Name FROM BRAND
--b) Hiển thị tất cả các sản phẩm.
	SELECT PRODUCT.Name FROM PRODUCT
--a) Liệt kê danh sách hãng theo thứ thự ngược với alphabet của tên.
	SELECT * FROM BRAND
	ORDER BY BRAND.Name DESC
--b) Liệt kê danh sách sản phẩm của cửa hàng theo thứ thự giá giảm dần.
	SELECT * FROM PRODUCT
	ORDER BY PRODUCT.Price DESC
--c) Hiển thị thông tin của hãng Asus.
	SELECT * FROM BRAND
	WHERE BRAND.Name LIKE 'Asus'
--d) Liệt kê danh sách sản phẩm còn ít hơn 11 chiếc trong kho
	SELECT * FROM PRODUCT
	WHERE PRODUCT.Amount <11
 --liệt kê danh sách sp của hãng asus
	SELECT * FROM PRODUCT
	WHERE PRODUCT.BrandID = 
	(SELECT BRAND.ID FROM BRAND WHERE BRAND.Name = 'Nokia')
-- 6. Viết các câu lệnh truy vấn để lấy
--a) Số hãng sản phẩm mà cửa hàng có.
	SELECT COUNT(*) FROM BRAND
--b) Số mặt hàng mà cửa hàng bán.
	SELECT COUNT(*) FROM PRODUCT
--c) Tổng số loại sản phẩm của mỗi hãng có trong cửa hàng.

	SELECT count(BrandID)  AS SLSP, PRODUCT.BrandID FROM PRODUCT
	WHERE PRODUCT.BrandID IN (SELECT BRAND.ID FROM BRAND) 
	GROUP BY PRODUCT.BrandID
	

--d) Tổng số đầu sản phẩm của toàn cửa hàng

--7. Thay đổi những thay đổi sau trên cơ sở dữ liệu
--a) Viết câu lệnh để thay đổi trường giá tiền của từng mặt hàng là dương(>0).
	ALTER TABLE PRODUCT
	ADD CHECK (PRICE >0)
--b) Viết câu lệnh để thay đổi số điện thoại phải bắt đầu bằng 0.
	ALTER TABLE BRAND
	ADD CHECK (PhoneNB LIKE '0%[0-9]')
--c) Viết các câu lệnh để xác định các khóa ngoại và khóa chính của bảng

	/*ALTER TABLE BRAND
	ADD PRIMARY KEY (column...)
	ADD FOREIGN KEY(column_table1) references (column_table2)*/

--a) Thiết lập chỉ mục (Index) cho các cột sau: Tên hàng và Mô tả hàng để tăng hiệu suất truy vấndữ liệu từ 2 cột này
	CREATE INDEX nPRD_ctPRD
	ON PRODUCT(Name,Content)
--b) Viết các View sau:
--◦ View_SanPham: với các cột Mã sản phẩm, Tên sản phẩm, Giá bán
	CREATE VIEW View_SanPham AS
	SELECT ID,Name,Price FROM PRODUCT
	SELECT * FROM View_SanPham

--◦ View_SanPham_Hang: với các cột Mã SP, Tên sản phẩm, Hãng sản xuất

	CREATE VIEW View_SPHang AS
	SELECT PRODUCT.ID ,PRODUCT.Name,PRODUCT.Price,BRAND.Name AS BRAND FROM PRODUCT JOIN BRAND 
	ON BRAND.ID =PRODUCT.BrandID
	SELECT * FROM View_SPHang
--c) Viết các Store Procedure sau:
--◦ SP_SanPham_TenHang: Liệt kê các sản phẩm với tên hãng truyền vào store
	CREATE PROCEDURE SP_SanPham_TenHang @BRAND_NAME nvarchar(50) AS 
	SELECT * FROM PRODUCT 
	WHERE PRODUCT.BrandID = 
	(SELECT BRAND.ID FROM BRAND WHERE BRAND.Name LIKE @BRAND_NAME)

	EXEC SP_SanPham_TenHang @BRAND_NAME='Nokia'
--◦ SP_SanPham_Gia: Liệt kê các sản phẩm có giá bán lớn hơn hoặc bằng giá bán truyềnvào
	CREATE PROCEDURE SP_SanPham_Gia @PRICE INT AS
	SELECT *  FROM PRODUCT 
	WHERE PRODUCT.Price >=  @PRICE

	EXEC SP_SanPham_Gia @PRICE=600
--◦ SP_SanPham_HetHang: Liệt kê các sản phẩm đã hết hàng (số lượng = 0)
	CREATE PROCEDURE SP_SanPham_HetHang  AS
	SELECT * FROM PRODUCT
	WHERE PRODUCT.Amount=0

	EXEC SP_SanPham_HetHang
--d) Viết Trigger sau:
--◦ TG_Xoa_SanPham: Chỉ cho phép xóa các sản phẩm đã hết hàng (số lượng = 0)
CREATE TRIGGER TG_Xoa_SANPHAM
ON PRODUCT FOR DELETE 
AS 
BEGIN
	DECLARE @Count int =0
	SELECT  @Count = count(*) FROM deleted
	WHERE deleted.Amount NOT LIKE 0
	IF (@Count >0)
	BEGIN 
		PRINT 'ko duoc xoa'
		ROLLBACK TRAN
	END
END

DELETE FROM PRODUCT WHERE Amount = 0

--◦ TG_Xoa_Hang: Ngăn không cho xóa hãng
CREATE TRIGGER TG_Xoa_Hang
ON BRAND FOR DELETE AS 
BEGIN
	IF (EXISTS(SELECT * FROM deleted))
	BEGIN 
		PRINT N'KHÔNG ĐƯỢC XOA HÃNG'
		ROLLBACK TRAN
	END
END
DELETE FROM BRAND WHERE BRAND.ID = 111

