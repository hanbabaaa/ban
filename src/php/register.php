<?php

header('content-type:text/html;charset=utf-8;');

$uname=$_POST['username'];
$upass=$_POST['password'];
$conn=mysqli_connect("127.0.0.1",'root','root','user');
$sql="INSERT INTO `info` VALUE (null,'$uname','$upass')";
$res=mysqli_query($conn,$sql);
mysqli_close($conn);
if($res){
    header('location:../pages/yhindex.html');
}else{
    echo "服务器错误";
}
?>
