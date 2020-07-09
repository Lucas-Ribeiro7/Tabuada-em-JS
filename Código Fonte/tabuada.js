function gerarTab(){
    var num = document.getElementById('num');
    var tab = document.getElementById('sel');
    if (num.value.length == 0){
        alert("Por favor digite um número.");
    } else {
        let n = Number(num.value);
        tab.innerHTML = " ";
        for (var c = 1 ; c <= 10 ; c++){
            var item = document.createElement('option');
            item.innerHTML = n + " x " + c + " = " + (n*c);
            tab.appendChild(item);
    }
}

}