<?php

class Controller{

  public function getProducts(){
   try{
        $list = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $query = "SELECT * FROM product ORDER BY name";
        $statement = $db->prepare($query);
        $statement->execute();
        while($row = $statement->fetch()) {
           $list[] = array(
                 "id" => $row['id'],
                 "name" => $row['name'],
                 "price" => $row['price'],
                 "quantity" => $row['quantity']);
        }//fin del ciclo while 

        return $list;

      }catch(PDOException $e){
        echo "¡Error!: " . $e->getMessage() . "<br/>";
      }
  }
  public function addProduct($producto){
    print_r($producto['json']);

    $separateJson = $producto['json'];
    $Json_decode = json_decode($separateJson);
    $dataProduct = get_object_vars($Json_decode);
    print_r($dataProduct);
    $name = $dataProduct['name'];
    $price = $dataProduct['price'];
    $quantity = $dataProduct['quantity'];
    try{
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $query = ("INSERT INTO product (name, price, quantity)values ('$name', $price, $quantity)");
    $statement = $db->prepare($query);
    $statement->execute();
    }catch(PDOException $e){
      echo "¡Error!: " . $e->getMessage() . "<br/>"; 
    }
  }
}

?>