
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    $servername = "127.0.0.1:1997";
    $username = "root";
    $password = "AFMhn17397!@#";
    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
    // chon database
    $conn->select_db('test');
    // chon du lieu trong bang
    $query=$conn->query('select * from student');
    $name=$conn->query('select name from student');
    $nam1=$name->fetch_object();
    echo "</br>";
    var_dump ($nam1);
    print_r($nam1);
// 
$data1 = $query->fetch_all();
$data2= $query->fetch_array(MYSQLI_NUM);
$data3= $query->fetch_fields();
$data4= $query->fetch_assoc();
$data5= $query->fetch_column();
$data6= $query->fetch_row();
$data7= $query->fetch_object();
$data8= $query->fetch_field_direct(1);

    ?>
</head>
<body>
    <h3>
        <?php echo "</br> fetch_all() : Tìm nạp tất cả các hàng và trả về tập kết quả dưới dạng một mảng kết hợp: </br>";?>
    </h3>
    <span><?php foreach($data1 as $i){
            var_dump ($i);
            echo "</br>";
        } ?> </span>
</body>
<?php

echo "</br>";
echo "</br> fetch_array(): </br>";
var_dump($data2);
echo "</br>";
echo "</br> fetch_fields(): </br>";
foreach($data3 as $i){
    var_dump ($i);
    echo "</br> </br>";
// var_dump($data3);
}
echo "</br>";
echo "</br> fetch_assoc():  </br>";
var_dump($data4);
echo "</br>";
echo "</br> fetch_column(): </br>";
var_dump($data5);
echo "</br>";
echo "</br> fetch_row(): </br>";
var_dump($data6);
echo "</br>";
echo "</br> fetch_object(): </br>";
var_dump($data7);echo "</br>";
echo "</br> fetch_field_direct(1): </br>" ;
foreach($data8 as $i){
    var_dump ($i);
    echo "</br>";
}
// var_dump($data8);echo "</br>";


// lay du lieu tu server
$data = "SELECT id,Name,Age FROM test.student ";
// thuc hien truy van(querry) cau lenh lay dlieu toi server va lay kqua
$kqua = $conn->query($data);
// krt neu so luong dlieu co hay ko de in ra man hinh
if($kqua->num_rows >0){
    // TRA ve mang  duoi dang 1 mang so: vd a[0], a[1].. a[n]
    $data = $kqua->fetch_array(MYSQLI_NUM);
    // echo $data[1];
    // TRA ve mang  duoi dang 1 mang KET HOP , gtri lay theo ten truong(Fieldnames ): vd a["Name"], a["Age"].. a["id"]
    // ten truong CO phan biet chu HOA va chu thuong
    $data1 = $kqua->fetch_array(MYSQLI_ASSOC);
    // hoac dung ham fetch_assoc()  de tim nap ket qua duoi dang 1 mang KET HOP
    $data2 = $kqua->fetch_assoc();
    // echo $data2["Age"];
    while ($row = $kqua->fetch_assoc()){
        //echo "<br/> id: ". $row["id"]. "Name : ".$row["Name"]." ". "Age: ".$row["Age"]."</br>";
    }
}else{
    echo "empty";
}
// Create database
// $sql = "CREATE DATABASE new1";
// if ($conn->query($sql)) {
//   echo "Database created successfully";
// } else {
//   echo "Error creating database: " . $conn->error;
// }
// ngat ket noi
$conn->close();
?>
</html>