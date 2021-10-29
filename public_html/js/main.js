/*Programacion de JavaScript*/

var btnCerrarPopup = document.getElementById('btn-submit'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	nombre = document.getElementById('nombre'),
	edad = document.getElementById('edad');

var piezas = document.getElementsByClassName('movil');
var marcadas = Array(piezas.length);
var van = 0;
var datos = 0;

var tamWidh = [183,143,231,143,231,143.5,231.7,143,182.5,
			   231,228.7,144,228.7,145,229.3,155.5,228.7,231,
			   181.5,143.3,228.7,143.3,228.7,143.3,228.7,143,181.5,
			   231,228.7,231,228.7,231,228.7,231,228.7,155.5,
			   181.5,231,228.7,231,228.7,231,231,231,181.5,
			   202,230,143,230,143,230,143,230,202];

var tamHeight = [185,213,236.3,189,236.3,213,238,213,202,
				 229,238,230.7,328,230.7,328,229.7,328,229,
				 238,281,328,230.7,328,230.7,328,230.7,238,
				 229,238,229,238,229,238,229,238,229,
				 238,235,238,229,238,229,238,229,238,
				 182.5,280,213,280,213,280,213,382.5,182.5];

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height",tamHeight[i]);
	piezas[i].setAttribute("x", Math.floor((Math.random() * 1) + 2000));
	piezas[i].setAttribute("y", Math.floor((Math.random() * 1) + 0));
	piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)");
	marcadas[i] = false;
}

var elementSelect = 0;  
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
	elementSelect = reordenar(evt);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	currentPosx = parseFloat(elementSelect.getAttribute("x"));     
	currentPosy = parseFloat(elementSelect.getAttribute("y"));
	elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}

function moverElemento(evt){
	var dx = evt.clientX - currentX;
	var dy = evt.clientY - currentY;
	currentPosx = currentPosx + dx;
	currentPosy = currentPosy + dy;
	elementSelect.setAttribute("x",currentPosx);
	elementSelect.setAttribute("y",currentPosy);
	currentX = evt.clientX;        
	currentY = evt.clientY;
	elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
	elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");
	iman();
}

function deseleccionarElemento(evt){
	if(elementSelect != 0){			
		elementSelect.removeAttribute("onmousemove");
		elementSelect.removeAttribute("onmouseout");
		elementSelect.removeAttribute("onmouseup");
		elementSelect = 0;
	}
	testing();
}

var entorno = document.getElementById('entorno');

function reordenar(evt){
	var padre = evt.target.parentNode;
	var clone = padre.cloneNode(true);
	var id = padre.getAttribute("id");
	console.log(id + "reordenar");
	entorno.removeChild(document.getElementById(id));
	entorno.appendChild(clone);
	return entorno.lastChild.firstChild;
}

function reordenarIndices(evt)
{

}


var origX = [200,328.7,418,595.5,684,861.3,951,1129,1218.3,
            153.8,286,461,552.4,728.2,818,988.3,1085.5,1214.8,
            200,328.5,419,595,685,861.5,952.8,1127.3,1218.6,
            154.5,286,418.2,552,685.3,818.6,951,1084.6,1253.6,
            200,285,419,551.4,685,817.3,951,1084.3,1218.6,
            168.5,285,461.6,553.4,728,818,995,1084.5,1230];  

var origY = [77.5,84.5,51.5,96,51.5,84.5,51.5,84.5,68,
            186,181,184.3,136,184.3,136,185.3,136,186,
            314.5,293,269,318,269.5,318,269.5,319,314.5,
            452,448.25,452,447.5,452,447.5,452,447.5,452,
            580.5,582.5,581.5,584.5,581,585,580,585,581,
            717.5,691,702,691,702.5,691,702.5,639,717.5];

function iman(){
		var a = origX[10] - origX[11] *2;
		var b = origY[10] - origY[11] *2;
		origX.push(a);
		origY.push(b);
	for(var i=0;i<piezas.length;i++){
		if (Math.abs(currentPosx-origX[i])<15 && Math.abs(currentPosy-origY[i])<15) {
			elementSelect.setAttribute("x",origX[i]);
			elementSelect.setAttribute("y",origY[i]);
		}
	}
}

function llenar_todo()
{
	for(var o=0; o<piezas.length; o++)
	{
		piezas[o].setAttribute("x", origX[o]);
		piezas[o].setAttribute("y", origY[o]);
	}
}

var minutos = 0;
var segundos = 0;			
var win = document.getElementById("win");
var gano = document.getElementById("gano");

function mostrarPista()
{
	var imagenes = new Array(
        ['img/dato_1.png'],
        ['img/dato_2.png'],
        ['img/dato_3.png'],
        ['img/dato_4.png'],
        ['img/dato_5.png'],
        ['img/dato_6.png'],
        ['img/dato_7.png'],
        ['img/dato_8.png'],
        ['img/dato_9.png']
    );

    var tamX = new Array(
    	[600]
    );

    var tamY = new Array(
    	[200]
    );

    var texto = new Array(
    	['Los elementos que debes utilizar para la higiene de tus dientes son:'],
    	['Cepillarnos los dientes'],
    	['La placa dental te puede producir en los dientes '],
    	['La cantidad de crema dental que debes utilizar en el cepillo es del tamaño de '],
    	['Debes cepillarte '],
    	['El cepillo de dientes debes cambiarlo cada '],
    	['Nunca debes compartir tu cepillo de dientes '],
    	['¿Cómo cepillar tus dientes correctamente?'],
    	['Debes lavarte las manos antes y después  de '],
    );

	document.getElementById('imagen').src = imagenes[datos];
	document.getElementById('texto_dato').innerHTML = texto[datos];

	setTimeout(function() {
       $('#ex1').modal('show');
	}, 200);
	
	datos++;
}


function testing() {

	var bien_ubicada = 0;
	var padres = document.getElementsByClassName('padre');
	for(var i=0;i<piezas.length;i++)
	{
		var posx = parseFloat(padres[i].firstChild.getAttribute("x"));    
		var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
		ide = padres[i].getAttribute("id");

		if(origX[ide] == posx && origY[ide] == posy)
		{
			bien_ubicada = bien_ubicada + 1;
			marcadas[ide] = true;
			console.log("ide: " + ide);
		}
	}

	if(bien_ubicada%6 == 0 && bien_ubicada != 0 && bien_ubicada != 54 && van != bien_ubicada)
		mostrarPista();

	if(van < bien_ubicada && bien_ubicada != 54)
	{
		van = bien_ubicada;
		uno_por_uno();
	}


	console.log("Bien ubicadas" + van);
	
	if(bien_ubicada == 54){
		gana.classList.add('active');
		win.pause();
		gano.play();
		parar();
	}
	
}

function obtenerImagen(ide, piezas)
{
	for(var i = 0; i<piezas.length; i++)
	{
		var ref = piezas[i].getAttribute("xlink:href");

		ref = ref.split("/")[1];
		ref = ref.split(".")[0];
		var te = parseInt(ref)-1;
		if(te == ide)
			return i;
	}
}

function uno_por_uno()
{
	var ide = aleatoria();
	var padres = document.getElementsByClassName('movil');
	var posx;
	var posy;

	ide = obtenerImagen(ide,piezas);

	posx = parseFloat(padres[ide].getAttribute("x"));  
	posy = parseFloat(padres[ide].getAttribute("y"));


	if(origX[ide] != posx || origY[ide] != posy)
	{
		piezas[ide].setAttribute("x",20);
		piezas[ide].setAttribute("y", 500);
	}
	
}

function aleatoria()
{	
	var indices = Array(); 
	var aux = 0;
	var padres = document.getElementsByClassName('movil');

	for(var i=0;i<padres.length;i++)
	{
		var posx = parseFloat(padres[i].getAttribute("x"));    
		var posy = parseFloat(padres[i].getAttribute("y"));
		var ref = padres[i].getAttribute("xlink:href");

		ref = ref.split("/")[1];
		ref = ref.split(".")[0];
		var ide = parseInt(ref)-1;
	

		if(ide!=0)
		{
			if(marcadas[ide] == false)
			{
				indices.push(ide);
			}
		}
		else if(marcadas[0] == false)
		{
			
			indices.push(ide);
		}
	}
	
	if(indices.length > 1)
	{
		var max = indices.length;
		var min = 0;
		var	e= Math.floor(Math.random() * (max - min)) + min;
		marcadas[indices[e]] = true;
		return indices[e];
	}

	else if(indices.length == 1)
	{
		marcadas[indices[0]] = true;
		return indices[0];
	}
	
}

var t = false;
var empezar = false;

function muestraReloj() {
	if(empezar==true)
 	{	
  		if(segundos==60)
  		{
  			segundos = 0;
  			minutos ++;
  			t = true;
  			if(minutos==60)
  				minutos=0;
  		}

  		if(t)
  			if(minutos < 10) { minutos = '0' + minutos; }
  				t=false;
  		if(segundos < 10) { segundos = '0' + segundos; }

  		document.getElementById("reloj").innerHTML = minutos+':'+segundos;
  		document.getElementById("temp").innerHTML =  "	Tiempo = " + minutos+':'+segundos;
  		segundos++;
	}	
}


btnCerrarPopup.addEventListener('click', function(){
	if(!(nombre.value == "" || edad.value == "" ))
	{
		overlay.classList.add('active');
		empezar= true;
		guardar();
		win.play();
	}
});

function parar (){
	clearInterval(cronometro);
}

  window.onload = function() {
  		cronometro = setInterval(muestraReloj, 1000);
  }

var key = 0;

function guardar(){
	uno_por_uno();
	window.localStorage.setItem(key, "Nombre= " + nombre.value + " Edad= " + edad.value);
	key++;
}




