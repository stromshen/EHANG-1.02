SET NAMES UTF8;
USE ehang;
CREATE TABLE shop_index (id INT PRIMARY KEY AUTO_INCREMENT,
  shop_name varchar(30),
  shop_title varchar(30),
  shop_price int(10),
  shop_type varchar(5),
  order_by varchar(4),
  shop_img varchar(255)
);
INSERT INTO shop_index VALUES
("", '1', NULL, NULL, '1', NULL, './img/mall/index_slide_1.jpg'),
("", '2', NULL, NULL, '1', NULL, './img/mall/index_slide_3.jpg'),
("", 'GHOSTDRONE2.0无人机旗舰版', '手机体感操作 VR图传眼镜 简单智能安全', '5999', '2', NULL, './img/mall/products/h1.png'),
("", 'GHOSTDRONE2.0无人机云台版', '4K高清航拍 高稳定云台 APP智能操控 售后无忧', '3499', '2', NULL, './img/mall/products/p1.png'),
("", '智能电池GHOSTDRONE2.0无人机', '4500毫安 插拔式设计 可显示电量 售后无忧', '699', '3', NULL, './img/mall/products/o1.png'),
("", '4K高清运动相机GHOSTDRONE2.0无人机', '4K高清像素 120°广角 送8G高性能内存卡', '999', '3', NULL, './img/mall/products/n1.png'),
("", '三轴云台GHOSTDRONE2.0无人机', '高精度 高稳定 轻量化设计 增稳效果更佳', '1299', '3', NULL, './img/mall/products/l1.png'),
("", '螺旋桨GHOSTDRONE2.0无人机(1套4个)', '快拆式设计 安装简单便携 多颜色选择', '99', '3', NULL, './img/mall/products/m1.png'),
("", '护圈GHOSTDRONE2.0无人机(1套4个)', '轻盈耐磨 安全防护 放心飞行', '99', '3', NULL, './img/mall/products/k1.png'),
("", '防水背包GHOSTDRONE2.0无人机', '双层设计 容量大 防震防水 外出必备', '399', '3', NULL, './img/mall/products/j1.png'),
("", '电源适配器GHOSTDRONE2.0无人机', '黑白两色可选 充电快 无忧售后', '199', '3', NULL, './img/mall/products/i1.png'),
("", '电视剧《南方有乔木》同款精品 勋章', '纯铜材质 旧仿古浮雕 工艺精细', '79', '3', NULL, './img/mall/products/g1.png'),
("", '电视剧《南方有乔木》同款精品 手机指环', '锌合金材质 工艺精细 凸显LOGO', '39', '3', NULL, './img/mall/products/f1.png'),
("", '电视剧《南方有乔木》同款精品 耳坠', 'S925银 精美时尚 同款定制', '299', '3', NULL, './img/mall/products/e1.png'),
("", '电视剧《南方有乔木》同款精品 项链', 'S925银 精美时尚 同款定制', '199', '3', NULL, './img/mall/products/d1.png'),
("", '电视剧《南方有乔木》同款专制 T恤', '纯棉材料 酷炫时尚', '99', '3', NULL, './img/mall/products/c1.png');
