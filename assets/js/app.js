const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;

// cambio nombre constante de $n a nameRef
// agrego "#" al querySelector de nameRef
const nameRef = document.querySelector("#name");

// cambio nombre constante de $b a blogRef
// cambio a una section en el html con el id blog
const blogRef = document.querySelector("#blog");

// cambio nombre constante de $l a locationRef
// creo una etiqueta h2 en el html con el id location
const locationRef = document.querySelector("#location");

/* Actualizo nombre de variables y cambio el tipo de función 
displayUser a una asíncrona para permitir el uso de await*/
async function displayUser(username) {
	// Como el atributo textContent no existe cambio por innerHTML
	nameRef.innerHTML = "cargando...";

	/* Coloco response y las acciones posteriores
   dentro de un bloque tryCatch para ejecutar acciones en caso de error */
	try {
		const response = await fetch(`${usersEndpoint}/${username}`);
		// agrego la constante data que guardara los datos de usuario y los convertirá a un objeto
		const data = await response.json();
		console.log(data);
		/* Como el atributo textContent no existe cambio por innerHTML
    Cambio comillas dobles a template literals */
		nameRef.innerHTML = `${data.name}`;
		blogRef.innerHTML = `${data.blog}`;
		locationRef.innerHTML = `${data.location}`;
	} catch (error) {
		// coloco acciones de la función handleError para manejar error desde el bloque catch
		console.log("OH NO!");
		console.log(error);
		// actualizo a nombre correcto de variable nameRef
		nameRef.textContent = `Algo salió mal: ${err}`;
	}
}

// No elimino handleError por si es de utilidad en otra parte del código
function handleError(err) {
	console.log(err);
	console.log("OH NO!");
	n.textContent = `Algo salió mal: ${err}`;
}

// Ejecuto displayUser quitando el catch que ahora es innecesario
displayUser("stolinski");
