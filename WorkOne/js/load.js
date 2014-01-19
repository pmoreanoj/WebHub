//Declaro mis variables globales
var g_pPrimero;
var g_pSegundo;
var g_pTercero;
var g_pCuarto;

window.onload = function() {
  Init();
  Interval();
};
function Init(){
	/*
	 * Esta funcion de inicializar los datos de JSON cuando se carga la pagina
	 * Creo variable de punteros de cuatro diferentes ID's para
	 * cargar los datos de JSON en unos div del index.html
	 */
	g_pPrimero = document.getElementById("Primero");
	g_pSegundo = document.getElementById("Segundo");
	g_pTercero = document.getElementById("Tercero");
	g_pCuarto = document.getElementById("Cuarto");
	LoaderJSON();
	
}
	/*
	 * Interval es la funcion que se dedica a cargar los datos
	 * suponiendo que se haya realizado un cambio en el archivo .txt
	 * para luego poder despeglar los datos actualizados.
	 */
function Interval(){
	setInterval(function(){
		CleanDivs();
		LoaderJSON();
	},10000);		
}
	/*
	 * LoaderJSON es la funcion encargada de realizar
	 * las operaciones de comunicacion entre mi archivo
	 * .txt con estructura JSON y desplegarlos en mi index.html
	 * asi puedo llamar a esta funcion para actualizar cambios
	 * en un intervalo de tiempo.
	 */
function LoaderJSON(){
	/*
	 * creo el objeto de solicitud y registro el evento en load
	 * despues abro el .txt donde tengo la estructura JSON escrita ahi.
	 * para luego enviar a que se ejecute el OnLoad y cargue los datos
	 */
	var m_pRequest = new XMLHttpRequest();
	
	m_pRequest.addEventListener("load", OnLoad, false);
	
	m_pRequest.open("GET", "DatosJSON.txt", true);			
	
	m_pRequest.send();
	/*
	 * la funcion OnLoad se dedica a manejar el evento
	 * es cuando los datos de mi archivo .txt se manejan como JSON
	 * para despues cargarlos en elementos html de index.html
	 */
	function OnLoad(evt)
	{
		// chequeamos el estado de la respuesta
		if(m_pRequest.status == 200 && m_pRequest.readyState == 4)
		{
			// JSON.parse convierte el texto de la respuesta
			// en un árbol de propiedades que podemos consultar con facilidad
			var mDatos = JSON.parse(m_pRequest.responseText);
			// escribimos los datos primera figura
			g_pPrimero.innerHTML += "Nombre: "+ mDatos.Figuras[0].Name + "<br/>";
			g_pPrimero.innerHTML += "Img: "+ mDatos.Figuras[0].NameImg + "<br/>";
			g_pPrimero.innerHTML += "Coordenada x: "+ mDatos.Figuras[0].x + "<br/>";
			g_pPrimero.innerHTML += "Coordenada y: "+ mDatos.Figuras[0].y + "<br/>";
			g_pPrimero.style.position="absolute";
			g_pPrimero.style.top= mDatos.Figuras[0].y;
			g_pPrimero.style.left= mDatos.Figuras[0].x;
			g_pPrimero.innerHTML += "<img src='"+ mDatos.Figuras[0].NameImg +"'/>"+ "<br/>";
			// escribimos los datos segunda figura
			g_pSegundo.innerHTML += "Nombre: "+ mDatos.Figuras[1].Name + "<br/>";
			g_pSegundo.innerHTML += "Img: "+ mDatos.Figuras[1].NameImg + "<br/>";
			g_pSegundo.innerHTML += "Coordenada x: "+ mDatos.Figuras[1].x + "<br/>";
			g_pSegundo.innerHTML += "Coordenada y: "+ mDatos.Figuras[1].y + "<br/>";
			g_pSegundo.style.position="absolute";
			g_pSegundo.style.top= mDatos.Figuras[1].y;
			g_pSegundo.style.left= mDatos.Figuras[1].x;
			g_pSegundo.innerHTML += "<img src='"+ mDatos.Figuras[1].NameImg +"'/>"+ "<br/>";
			// escribimos los datos tercera figura
			g_pTercero.innerHTML += "Nombre: "+ mDatos.Figuras[2].Name + "<br/>";
			g_pTercero.innerHTML += "Img: "+ mDatos.Figuras[2].NameImg + "<br/>";
			g_pTercero.innerHTML += "Coordenada x: "+ mDatos.Figuras[2].x + "<br/>";
			g_pTercero.innerHTML += "Coordenada y: "+ mDatos.Figuras[2].y + "<br/>";
			g_pTercero.style.position="absolute";
			g_pTercero.style.top= mDatos.Figuras[2].y;
			g_pTercero.style.left= mDatos.Figuras[2].x;
			g_pTercero.innerHTML += "<img src='"+ mDatos.Figuras[2].NameImg +"'/>"+ "<br/>";
			// escribimos los datos cuarta figura
			g_pCuarto.innerHTML += "Nombre: "+ mDatos.Figuras[3].Name + "<br/>";
			g_pCuarto.innerHTML += "Img: "+ mDatos.Figuras[3].NameImg + "<br/>";
			g_pCuarto.innerHTML += "Coordenada x: "+ mDatos.Figuras[3].x + "<br/>";
			g_pCuarto.innerHTML += "Coordenada y: "+ mDatos.Figuras[3].y + "<br/>";
			g_pCuarto.style.position="absolute";
			g_pCuarto.style.top= mDatos.Figuras[3].y;
			g_pCuarto.style.left= mDatos.Figuras[3].x;
			g_pCuarto.innerHTML += "<img src='"+ mDatos.Figuras[3].NameImg +"'/>"+ "<br/>";		
		}
	}
}
/*
 *limpio todo los hijos dentro de los elementos div primarios 
 */ 
function CleanDivs(){
	g_pPrimero.innerHTML = "";
	g_pSegundo.innerHTML = "";
	g_pTercero.innerHTML = "";
	g_pCuarto.innerHTML = "";
}
