function mudarCor (cor){
    let body = document.body;

    switch (cor) {
        case 'vermelho': body.style.backgroundColor = 'red'; break;
        case 'azul': body.style.backgroundColor = 'blue'; break;
        case 'amarelo': body.style.backgroundColor = 'yellow'; break;
        case 'verde': body.style.backgroundColor = 'green'; break;
        case 'violeta': body.style.backgroundColor = 'violet'; break;
default: body.style.backgroundColor = 'black';
    }
}