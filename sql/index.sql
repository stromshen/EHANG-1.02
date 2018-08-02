SET NAMES UTF8;
USE ehang;
CREATE TABLE index_s (id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  text1 VARCHAR(128),
  banner VARCHAR(128),
  type VARCHAR(5),
  type_one VARCHAR(5),
  img VARCHAR(255)
);
INSERT INTO index_s VALUES
("","","","","1","","./img/index/banner18.jpg"),
("","","","","1","","./img/index/banner16.jpg"),
("","","","","1","","./img/index/banner14.jpg"),
("","GHOSTDRONE2.0","智能无人机","","2","","./img/index/product_ghost_new.jpg"),
("","FALCON","高性能行业应用无人机","","2","","./img/index/product_falcon_new.jpg"),
("","EHANG184","自动驾驶飞行器","","2","","./img/index/product_ehang184_new.jpg"),
("","无人机编队","会飞的空中媒体","","2","","./img/index/product_formation_new.jpg"),
("","授权经销商","官方授权无人机经销商","我们一起携手，共创未来","3","","./img/index/index_server_1.jpg"),
("","免费飞行体验","无人机免费体验活动","Fly into the future","3","","./img/index/index_tiyan.jpg"),
("","精彩航拍视频","无人机精彩航拍视频","换个角度瞰世界","3","","./img/index/index_video.jpg"),
("","EHANG PLAY 下载","亿航无人机操控APP下载","手机控制，智能安全简单","3","","./img/index/index_down.jpg");
