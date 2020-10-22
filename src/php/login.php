<?php
header('content-type:text/html;charset=utf-8;');

$uname=$_GET['username'];
$upass=$_GET['password'];

$conn=mysqli_connect('127.0.0.1','root','root','user');
$sql="SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    header('location:../pages/yhindex.html');
}else{
    echo '用户名或密码错误';
}

?>