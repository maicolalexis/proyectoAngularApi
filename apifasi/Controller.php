<?php

class Controller{

  public function getProducts(){
   try{
        $list = array();
        $conexion = new Conexion();
        $db = $conexion->getConexion();
        $query = "SELECT * FROM product ORDER BY id";
        $statement = $db->prepare($query);
        $statement->execute();
        while($row = $statement->fetch()) {
           $list[] = array(
                 "identificador" => $row['id'],
                 "name" => $row['name'],
                 "price" => $row['price'],
                 "quantity" => $row['quantity']);
        }//fin del ciclo while

        return $list;

      }catch(PDOException $e){
        echo "¡Error!: " . $e->getMessage() . "<br/>";
      }
  }
  public function addProduct($prod){
    print_r("hola". $prod);
    $separateJson = $prod['json'];
    $Json_decode = json_decode($separateJson);
    $dataProduct = get_object_vars($Json_decode);

    $name = $dataProduct['name'];
    $price = $dataProduct['price'];
    $quantity = $dataProduct['quantity'];
    try{
    $conexion = new Conexion();
    $db = $conexion->getConexion();
    $query = ("INSERT INTO product (name, price, quantity)values ('$name', $price, $quantity)");
    $statement = $db->prepare($query);
    $statement->execute();
    return "bien hecho";
    }catch(PDOException $e){
      echo "¡Error!: " . $e->getMessage() . "<br/>";
      return "error";
    }
  }
  public function deleteProduct($producto){
    try{
      $id = $producto['id'];
      $conexion = new Conexion();
      $db = $conexion->getConexion();
      $query = "DELETE FROM product WHERE id = $id";
      $statement = $db->prepare($query);
      $statement->execute();
      return true;
      }catch(PDOException $e){
        echo "¡Error!: " . $e->getMessage() . "<br/>";
        return false;
      }
  }
}

?>
