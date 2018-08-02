SET NAMES UTF8;
USE ehang;
DROP TABLE IF EXISTS products;
CREATE TABLE products (id INT PRIMARY KEY AUTO_INCREMENT,
  shop_title VARCHAR(64),
  shop_text1 VARCHAR(128),
  shop_price INT(10),
  shop_inventory INT(6),
  shop_color VARCHAR(16),
  shop_system VARCHAR(16),
  shop_type VARCHAR(5),
  type_one VARCHAR(5),
  shop_img VARCHAR(255)
);
INSERT INTO products VALUES
("","GHOSTDRONE2.0 《南方有乔木》定制版","智能操控 南乔同款专制（iOS版本）","6999","50","黑色","iOS","1","","img/mall/products/a1.png^img/mall/products/a2.png^img/mall/products/a3.png^img/mall/products/a4.png^img/mall/products/a5.png"),
("","亿航无人机4K高清航拍四轴飞行器vr眼镜智能","马卡龙配色 缤纷色彩 斑斓飞行","5999","50","马卡龙蓝^马卡龙粉^马卡龙黄^马卡龙紫","Android^iOS","1","","img/mall/products/b1.png^img/mall/products/b2.png^img/mall/products/b3.png^img/mall/products/b4.png^img/mall/products/b5.png"),
("", "电视剧《南方有乔木》同款专制 T恤", "纯棉材料 酷炫时尚", "99","50","L^XL^2XL^3XL","","2","","img/mall/products/c1.png"),
("","电视剧《南方有乔木》同款精品 项链","S925银 精美时尚 同款定制","199","50","","","2","","img/mall/products/d1.png^img/mall/products/d2.png^img/mall/products/d3.png^img/mall/products/d4.png"),
("","电视剧《南方有乔木》同款精品 耳坠","S925银 精美时尚 同款定制","299","50","","","2","","img/mall/products/e1.png^img/mall/products/e2.png^img/mall/products/e3.png^img/mall/products/e4.png"),
("","电视剧《南方有乔木》同款精品 手机指环","锌合金材质 工艺精细 凸显LOGO","39","50","","","2","","img/mall/products/f1.png^img/mall/products/f2.png^img/mall/products/f3.png"),
("","电视剧《南方有乔木》同款精品 勋章","纯铜材质 旧仿古浮雕 工艺精细","79","50","","","2","","img/mall/products/g1.png^img/mall/products/g2.png^img/mall/products/g3.png^img/mall/products/g4.png"),
("","GHOSTDRONE2.0无人机旗舰版","手机体感操作 VR图传眼镜 简单智能安全","5999","50","黑色^白色","Android^iOS","1","","img/mall/products/h1.png^img/mall/products/h2.png^img/mall/products/h3.png^img/mall/products/h4.png^img/mall/products/h5.png^img/mall/products/h6.png^img/mall/products/h7.png^img/mall/products/h8.png^"),
("","电源适配器GHOSTDRONE2.0无人机","黑白两色可选 充电快 无忧售后","199","50","白色^黑色","","2","","img/mall/products/i1.png^img/mall/products/i2.png^img/mall/products/i3.png^img/mall/products/i4.png"),
("","防水背包GHOSTDRONE2.0无人机","双层设计 容量大 防震防水 外出必备","399","50","","防水背包","2","","img/mall/products/j1.png^img/mall/products/j2.png^img/mall/products/j3.png^img/mall/products/j4.png"),
("","护圈GHOSTDRONE2.0无人机(1套4个)","轻盈耐磨 安全防护 放心飞行","99","50","白色^黑色","","2","","img/mall/products/k1.png^img/mall/products/k2.png^img/mall/products/k3.png^img/mall/products/k4.png"),
("","螺旋桨GHOSTDRONE2.0无人机(1套4个)","快拆式设计 安装简单便携 多颜色选择","99","50","红色^蓝色^黑色^白色","","2","","img/mall/products/m1.png^img/mall/products/m2.png^img/mall/products/m3.png^img/mall/products/m4.png"),
("","三轴云台GHOSTDRONE2.0无人机","高精度 高稳定 轻量化设计 增稳效果更佳","1299","50","白色^黑色","","2","","img/mall/products/l1.png^img/mall/products/l2.png^img/mall/products/l3.png^img/mall/products/l4.png"),
("","4K高清运动相机GHOSTDRONE2.0无人机","4K高清像素 120°广角 送8G高性能内存卡","999","50","","4K运动相机","2","","img/mall/products/n1.png^img/mall/products/n2.png^img/mall/products/n3.png^img/mall/products/n4.png"),
("","智能电池GHOSTDRONE2.0无人机","4500毫安 插拔式设计 可显示电量 售后无忧","699","50","白色^黑色","","2","","img/mall/products/o1.png^img/mall/products/o2.png^img/mall/products/o3.png^img/mall/products/o4.png^img/mall/products/o5.png^img/mall/products/o6.png"),
("","GHOSTDRONE2.0无人机云台版","4K高清航拍 高稳定云台 APP智能操控 售后无忧","3499","50","白色^黑色","","1","","img/mall/products/p1.png^img/mall/products/p2.png^img/mall/products/p3.png^img/mall/products/p4.png^img/mall/products/p5.png^img/mall/products/p6.png^img/mall/products/p7.png^img/mall/products/p8.png");










--
