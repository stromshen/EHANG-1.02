<?php
require("../init.php");
$sql="select * from shop_index where shop_type>1";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>
