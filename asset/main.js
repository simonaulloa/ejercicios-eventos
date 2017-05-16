function demo(){
	var boton = document.getElementById("demo");
	boton.addEventListener("click", function(){ 
    alert("HOLA MUNDO!!!");
})
}
demo();

function img(){
	var imagen = document.getElementById("img");
	imagen.addEventListener("mouseover", function(){ 
    alert("NO ESTAS SOBRE MI");
})
}
img();