SET NAMES UTF8;
#重建数据库tedu
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;

#创建部门信息表dept(did,dname,location)
CREATE TABLE dept(
  did INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(16),
  location VARCHAR(16)
);
INSERT INTO dept VALUES
('10','研发部','北京'),
('20','市场部','上海'),
('30','运营部','杭州'),
('40','测试部','深圳');

#创建员工信息表emp
CREATE TABLE emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(32),
  sex TINYINT,		#1表男  0表女
  birthday DATE,
  salary DECIMAL(8,2),
  deptId INT,
  FOREIGN  KEY(deptId)  REFERENCES  dept(did)
);
#插入14行数据
INSERT INTO emp VALUES
(5801,'TOM','1','1990-1-1','6000','10'),
(5911,'JOE','1','1989-8-25','3000','10'),
(6013,'JERRY','1','1990-1-1','6500','20'),
(6315,'TEA','0','1987-7-13','8000','30'),
(6919,'MARY','0','1990-1-1','7999','10'),
(7002,'KERY','1','1992-3-8','6000','10'),
(7659,'JANE','0','1990-2-5','4000','20'),
(7788,'MARTEN','1','1990-4-3','9000','20'),
(8101,'ELLA','0','1991-1-8','7300','10'),
(8203,'PONE','1','1990-7-15','6200','10'),
(8578,'LAEN','0','1990-3-11','7800','30'),
(9001,'SCOTT','1','1990-1-1','6000','10'),
(9033,'JOEA','0','1990-1-1','6000','30'),
(9111,'KING','1','1990-7-21','12000',NULL);
