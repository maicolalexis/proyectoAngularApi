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
                 "quantity" => $row['quantity'] );
        }//fin del ciclo while 

        return $list;

      }catch(PDOException $e){
        echo "¡Error!: " . $e->getMessage() . "<br/>";
      }
  }
  public function addProduct($producto){
    print_r($producto['json']);
    $datos = $producto['json'];
    print_r($datos['name']);
  }
}

?>