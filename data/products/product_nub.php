<?php
require("../init.php");
$sql="select * from products where shop_type>0";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>
