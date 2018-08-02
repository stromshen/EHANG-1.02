<?php
require("../init.php");
$sql="select * from index_s where type>1";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));
?>
