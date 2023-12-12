<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}
//Llamar archivo que contiene variables de conexion
include("conexion.php");

//Generar conexión a base de datos por medio de clase mysqli

//se crea una instancia de la clase mysqli
$connection = new mysqli($servidor, $usuario, $passkey, $DBname);

//Verificar si hubo algún error en la conexión
//se accede a alas propiedades por medio de ->
if($connection->connect_error) {
    die("Failed docking".$connection->connect_error);
}
//echo "Our connection to the TVA system succeeded";

//Obtener los datos de BD
//Si el método es GET (obtener) se devuelve la información
if($_SERVER['REQUEST_METHOD'] == "GET") {
    //Realizar consulta a la tabla pedidos
    $sql = "SELECT * FROM pedidos";
    //Ejecutar la consulta de la tabla

    $resultado = $connection->query($sql);

    if($resultado->num_rows > 0) {
        //Convertir los archivos en array asociativo
        $pedidos = array();
        while($filas = $resultado->fetch_assoc()) {
            $pedidos[] = $filas;
            //Convertir datos a texto/string

        }

        echo json_encode($pedidos);
    } else {
        //si no hay datos en la tabla
        echo "No encontramos datos en la data";
    }

}

if($_SERVER['REQUEST_METHOD'] == "POST") {
    //Recibir datos del FrontEnd
    $datosPedido = "EDITAR ESTO";
}