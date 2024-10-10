//1. Introducción a JavaScript

  console.log("1. Introducción a JavaScript");
  console.log("Ejercicio 1.1");

  let a = 3;
  let b = 4;
  let c = b+a;

  console.log("El valor de a es:", a);
  console.log("El valor de b es:", b);
  console.log("La suma de a y b es:", c);

  console.log("Ejercicio 1.2");
  let nombre = prompt("¿Cual es tu nombre?");
  console.log("¡Hola, " + nombre + "!");


//2. Operadores lógicos y condicionales


  console.log("2. Operadores lógicos y condicionales");
  console.log("Ejercicio 2.1");
  function encontrarMayor(a, b, c) {
    let mayor;
    if (a >= b && a >= c) {
        mayor = a;
    } else if (b >= a && b >= c) {
        mayor = b;
    } else {
        mayor = c;
    }

    return mayor;
  }

{
  let a = 5;
  let b = 10;
  let c = 7;

  let mayor = encontrarMayor(a, b, c);

  console.log("El valor de a es:", a);
  console.log("El valor de b es:", b);
  console.log("El valor de c es:", c);
  console.log("El mayor de los tres números es:", mayor);

  console.log("Ejercicio 2.2");
  function esNumeroValido(input) {
    return !isNaN(input) && !isNaN(parseFloat(input));
  }

  let numeroIngresado = prompt("Por favor, ingresa un número:");

  while (!esNumeroValido(numeroIngresado)) {
    numeroIngresado = prompt("Entrada no válida. Por favor, ingresa un número:");
  }

  let numero = parseInt(numeroIngresado);

  if (numero % 2 === 0) {
      console.log("El número " + numero + " es par.");
  } else {
      console.log("El número " + numero + " es impar.");
  }
}


//3. Operadores de asignación y bucles

  console.log("3. Operadores de asignación y bucles");
  
  console.log("Ejercicio 3.1");

  let numero = 10;

  while (numero >= 0) {
    console.log("El valor de la variable es:", numero);
    numero--; 
  }

  console.log("Ejercicio 3.2");
  let num;

  do {
    num = prompt("Por favor, ingresa un número mayor a 100:");
    num = parseFloat(num); 
  } while (num <= 100 || isNaN(num));


  console.log("Ingresaste un numero mayor a 100: ", num);




//4. Funciones de JavaScript
{
  console.log("4. Funciones de JavaScript");

  console.log("Ejercicio 4.1");
  function esPar(numero) {
    return numero % 2 === 0; 
  }

  let a = 4;
  let b = 7;

  console.log("El numero "+ a + " es par: ",esPar(a));  
  console.log("El numero "+ b + " es par: ",esPar(7));  
}
  console.log("Ejercicio 4.2");

  
  function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32; 
    console.log(celsius + "°C son equivalentes a " + fahrenheit + "°F");
  }

  convertirCelsiusAFahrenheit(0);   
  convertirCelsiusAFahrenheit(25);  
  convertirCelsiusAFahrenheit(100); 
  convertirCelsiusAFahrenheit(-10); 



//5. Objetos en JavaScript

  console.log("5. Objetos en JavaScript");

  console.log("Ejercicio 5.1");
  
  let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Mendoza",

  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };


  console.log("Propiedades iniciales:");
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Ciudad:", persona.ciudad);

  persona.cambiarCiudad("Cordoba");


  console.log("Propiedades actualizadas:");
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Ciudad:", persona.ciudad);

  console.log("Ejercicio 5.2");
  
  function esAntiguo(añoPublicacion) {
      let añoActual = new Date().getFullYear();
      let añosDesdePublicacion = añoActual - añoPublicacion;
    return añosDesdePublicacion > 10; // Retorna true si tiene más de 10 años, false si no
  }


  let libro1 = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 2005,
  };

  let libro2 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 2020,
  };

  console.log("El libro '" + libro1.titulo + "' es antiguo: " + esAntiguo(libro1.año));
  console.log("El libro '" + libro2.titulo + "' es antiguo: " + esAntiguo(libro2.año));


//6. Arrays

  console.log("6. Arrays");
  console.log("Ejercicio 6.1");
  
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosMultiplicados = [];

  for (let i = 0; i < numeros.length; i++) {
      numerosMultiplicados.push(numeros[i] * 2);
  }

  console.log("Numeros originales:", numeros);
  console.log("Numeros multiplicados por 2:", numerosMultiplicados);

  console.log("Ejercicio 6.2");
  
  let pares = [];

  for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
          pares.push(i);
      }
      if (pares.length === 10) {
          break;
      }
  }

  console.log("Primeros 10 números pares:", pares);

//7. Introducción al DOM
  
  //Ejercicio 7.1
  function cambiarColorAzul() {
    let parrafos = document.getElementsByTagName("p");

    for (let i = 0; i < parrafos.length; i++) {
      parrafos[i].style.color = "blue";
    }
  }

  //Ejercicio 7.2
  function mostrarAlerta() {
      let valorTexto = document.getElementById("texto").value; 
      alert("Has ingresado: " + valorTexto); 
  }

//8. Eventos de DOM

//Ejercicio 8.1
  const lista = document.getElementById("miLista");

  const elementos = lista.getElementsByTagName("li");

  for (let i = 0; i < elementos.length; i++) {
      elementos[i].addEventListener("click", function() {
          console.log("Texto del elemento:", this.innerText); 
      });
  }

  console.log("Ejercicio 8.2");
  
  const campoTexto = document.getElementById("campoTexto");
  const btnDeshabilitar = document.getElementById("btnDeshabilitar");
  const btnHabilitar = document.getElementById("btnHabilitar");


  btnDeshabilitar.addEventListener("click", function() {
      campoTexto.disabled = true; 
  });

  btnHabilitar.addEventListener("click", function() {
      campoTexto.disabled = false; 
  });

//9. LocalStorage 
  
//Ejercicio 9.1

  const formCorreo = document.getElementById('formCorreo');
  const correoInput = document.getElementById('correo');
  const correoGuardadoDiv = document.getElementById('correoGuardado');


  function mostrarCorreoGuardado() {
      const correoGuardado = localStorage.getItem('correo'); 

      if (correoGuardado) {
          correoGuardadoDiv.innerHTML = `
              <p>Correo guardado: ${correoGuardado}</p>
              <button id="btnEliminar">Eliminar Correo</button>
        ` ;

        document.getElementById('btnEliminar').addEventListener('click', function() {
              localStorage.removeItem('correo'); 
              correoGuardadoDiv.innerHTML = '';  
        });
      }
  }


  mostrarCorreoGuardado();


formCorreo.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const correo = correoInput.value; 
    localStorage.setItem('correo', correo); 

    
    mostrarCorreoGuardado();
    
   
    correoInput.value = '';
});






