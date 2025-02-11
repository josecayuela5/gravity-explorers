<?php
header("Content-Type: application/json");

// Leer archivo JSON
$likesDatos = json_decode(file_get_contents('../json/likes.json'), true); //Se carga el archivo json en una variable


// Se verifica el método de la solicitud. POST cuando el usuario hace click sobre el botón de like.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Recibir datos enviados por frontend para modificar número de likes
    $frontDatos = json_decode(file_get_contents('php://input'), true); //Se crea un array asociativo
    $postId = $frontDatos['postId'];
    $liked = $frontDatos['liked'];

    // Verificar si el post ya tiene un like, si no lo tuviera inicializa en 0
    if (!isset($likesDatos[$postId])) {
        $likesDatos[$postId] = 0;
    }

    // Actualizar el contador de likes según el estado
    if ($liked) {
        $likesDatos[$postId]++; //Si el post ha sido gustado, se añade el like al json
    } else {
        if ($likesDatos[$postId] > 0) {
            $likesDatos[$postId]--; //Si se ha quitado el like, se retira el like del json
        }
    }

    // Guardar el archivo JSON actualizado
    file_put_contents('../json/likes.json', json_encode($likesDatos));

    // Devolver mensaje en formato JSON con el estado de likes
    echo json_encode(['postId' => $postId, 'likes' => $likesDatos[$postId]]);

} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') { //GET cuando se recarga la página para obtener el estado de los botones y número de likes.

    //Se envían datos de likes al frontend para actualizar contadores
    echo json_encode($likesDatos);
}
