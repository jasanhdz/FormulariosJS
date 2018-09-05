const $boton = document.getElementById('empezarbuton')
const $page1 = document.getElementById('iframe1') 
const $oculto1 = document.getElementById('oculto1')
const $oculto2 = document.getElementById('oculto2')
const $oculto3 = document.getElementById('oculto3')
const $oculto4 = document.getElementById('oculto4')
const $oculto5 = document.getElementById('oculto5')
const $oculto6 = document.getElementById('oculto6')
const $oculto7 = document.getElementById('oculto7')
const $oculto8 = document.getElementById('oculto8')



$boton.addEventListener('click', () => {
    menu()
})

menu = () => {
    let usuario = prompt(`:::: MENÚ :::: \n
        1. Realizar la búsqueda de un string clave en un string fuente. \n
        2. Verificar Correo electronico \n
        3. Indetificar si una palabra es un Palindromo\n
        4. Leer frase e implementar funciones\n 
        5. Leer oración y mostrar palabra por orden alfabetico\n
        6. Solicitar el nombre y el password (clave) de un usuario.\n
        7. Crea un menú desplegable que muestre al menos 5 colores de fondo\n
        8. mostrar dos controles donde se pueda seleccionar una "fecha inicial" y una "fecha final"`)

const opc = parseInt(usuario)

switch(opc) {
    case 1:
    $resultado.textContent = `Nuevo string en text textContent`
    $oculto1.style.display = 'flex'
    break
    case 2:
    $oculto2.style.display = 'block'
    break
    case 3:
    $oculto3.style.display = 'flex'
    break
    case 4:
    $oculto4.style.display = 'flex'
    break
    case 5:
    $oculto5.style.display = 'flex'
    break
    case 6:
    $oculto6.style.display = 'flex'
    break
    case 7:
    $oculto7.style.display = 'block'
    break
    case 8:
    $oculto8.style.display = 'block'
    break
    case 9:
    clear()
    break
    default:
    break
}
}

const $form = document.getElementById('form')
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    //location = 'file:///C:/Users/JASAN/Documents/Cursos/TecnologiasWeb/Practica3/index.html#contexto'
})

function BuscarString() { 
  const $parrafo = document.getElementById('parrafo').value
  const $buscarString = document.getElementById('buscarString').value 
  document.getElementById('res1').style.display = 'block'
  const $res1 = document.getElementById('res1').contentWindow.document || document.getElementById('res1').contentDocument 
  let encontrado, posicion;
  const colection = [] 
    const element = $parrafo.indexOf($buscarString)
    let final = element + ($buscarString.length - 1)
    if(element != -1){
      encontrado = `Encontramos el String que buscas:`
      for(let i = element; i <= final; i++){
        colection.push(i)
      }
      posicion = `El String buscado esta en la dirección {${colection}}`
    } else {
      encontrado = `Lo sentimos <strong style="color: red;">-->No encontramos el String que buscas :( <--</strong>`
      posicion = `pd: <em>No existe una posicion para <strong>[${$buscarString}]</strong> dentro del Párrafo </em>`
    }
   $res1.body.innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <p>${encontrado}</p>
    <p>${posicion}</p>
  </body>
  </html>
   `
}

// Verificar Correo electronico
function verificar() {
  const $email = document.getElementById('Correo');
  $email.addEventListener('input', function(event) {
    let campo = event.target;
    debugger;
    const $valido = document.getElementById('valido')
    $valido.innerText = "incorrecto"
    let unicode = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (unicode.test(campo.value)) {
      $valido.innerText = `Correcto`
      $valido.style.color = 'blue'
    } else {
      $valido.innerText = "incorrecto"
    }
  });
}

// Ejercicio 3 
// a. Imprimir la primera mitad de los caracteres de la cadena.
// b. Imprimir el último carácter.
// c. Imprimirlo en forma inversa.
// d. Imprimir cada carácter del string separado con un punto.
// e. Imprimir la cantidad de vocales ‘a’ almacenadas.

function stringMethods() {
  let $str = document.getElementById('str').value
  document.getElementById('res4').style.display = 'block'
  const $res4 = document.getElementById('res4').contentWindow.document || document.getElementById('res4').contentDocument
  debugger
  // Convertimos el String en Minusculas
  $str = $str.toLowerCase();
  // 1. Descomponemos el string en un array, split('') por espacio
  // 2. volteamos o reverseamos el Array reverse()
  // 3. Convertimos el array-reverse en un String nuevamente juntandolo por espacio.
  const res = $str.split('').reverse().join('')
  debugger
  // División de String en 2 partes; firstHalft y secondHalf
  // Las juntamos con un '-' en el alerta.
  const firtsHalf = $str.slice(0, Math.round($str.length / 2))
  const secondHalf = $str.slice(Math.round($str.length / 2))
  let primera = `<em><u>Estas son las partes de el string.</u> </em><strong>Primera parte:</strong> {${firtsHalf}} <strong>Segunda parte:</strong> {${secondHalf}}`
  // Ultimo Cáracter de el texto del párrafo.
  const ultimoChar = $str.slice(-1)
  let msgUltimoChar = `<strong style="color: blue;">El ultimo chart de este párrafo es: ${ultimoChar} </strong>`
  // String Reverse
  let stringReverse = `<strong>Este es el string Reverseado: {${res}}</strong>`
  
  // Recorriendo el String y haciendo un push de las letras + '.'
  // El resultado se almacena en un arreglo el cual luego lo convertimos en String con join('')
  const stringPuntos = []
  for (let i = 0; i < $str.length; i++){
    const y = $str.charAt(i)
    stringPuntos.push(y+'.')
  } let point = `<strong style="color: #59a042;">Este es el String separado por Puntos:</strong><strong style="color: red"> {${stringPuntos.join('')}</strong>}`


  // Arreglo de que almacena Vocales A:
  const vocalA = []
  for(let i = 0; i < $str.length; i++) {
    const x = $str.charAt(i)
    if(x == 'a'){
      vocalA.push(x)
    }
  } let vocal = `<strong>Array de vocales A:</strong><strong style="color: #8200ff;"> {${vocalA.join('')}}</strong><strong> respeticiones: </strong><strong style="color: #8200ff;">${vocalA.length}</strong>`

  $res4.body.innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p>${primera}</p>
    <p>${msgUltimoChar}</p>
    <p>${stringReverse}</p>
    <p>${point}</p>
    <p>${vocal}</p>
  </body>
  </html>`
}

// Determinar si es o no una palabra palíndromo. 
function palindromo() {
  let $palindromo = document.getElementById('Palindromo').value
  document.getElementById('res3').style.display = 'block'
  let $res3 = document.getElementById('res3').contentWindow.document || document.getElementById('res3').contentDocument 
  $palindromo = $palindromo.toLowerCase()
  const res =  $palindromo.split('').reverse().join('')
  let msg, msgReverse;
   if ($palindromo == res) {
    msg = `La palabra que ingresaste es un Palindromo:<strong style="color: blue"> [${$palindromo}]</strong>`
    msgReverse = `<strong>Su Reverse: [${res}] se lee igual a [${$palindromo}] </strong>`
  } else {
    msg = `La Palabra que ingresaste no es un Palindromo`
    msgReverse = `<strong>Su Reverse: [${res}], No se lee igual`
  }
  $res3.body.innerHTML = `
   <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h2>${msg}</h2>
    <p>${msgReverse}</p>
  </body>
  </html>`
}

// Codificar un programa que permita leer una oración por teclado, luego mostrar cada
// Palabra ingresada en una línea distinta, pero ordenadas de forma alfabética.
// Ejemplo: “La mañana está fría.”
/* La
  está
  fría.
  mañana
*/
// charAt(a,d,f,g,h,j,j,g)

// indexOf("adfg")

function OrdenarLine() {
  const $line = document.getElementById('Stringline').value;
  document.getElementById('res5').style.display = 'block'
  let $res5 = document.getElementById('res5').contentWindow.document || document.getElementById('res5').contentDocument
  let arrayDeCadenas = []
  for (let i=0; i < $line.length; i++) {
       const x = $line.charAt(i)
        arrayDeCadenas.push(x)
        if (x == ' ') {
          arrayDeCadenas.push('\n')
        }
   }
   const creadopalabras = arrayDeCadenas.join('').split(' ')
   const ordenandopalabras = creadopalabras.sort()
   const msg = `<strong>Warnin: [</strong> <br><strong style="color: blue" ${ordenandopalabras.join('<br>')}</strong><br>]`
   $res5.body.innerHTML = `
   <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h2>${msg}</h2>
  </body>
  </html>`
}

// Validar Password
function pass() {
  const $password = document.getElementById('contraseña').value
  document.getElementById('res6').style.display = 'block'
  let $res6 = document.getElementById('res6').contentWindow.document || document.getElementById('res6').contentDocument
  let abecedario = "abcdefghijklmnñopqrstuwxyz" 
  abecedario += abecedario.toUpperCase();
  const num = "0123456789"
  let campos = num + abecedario
  function validation(texto){
    if (texto.length >= 8) {
      for(let i = 0; i < texto.length; i++){
          if (abecedario.indexOf(texto.charAt(i), 0) != -1) {
              alert(`Si tiene letras (Y)`)
              break
          }
          else if(num.indexOf(texto.charAt(i), 0) != -1){
            alert(`Si tiene números (Y)`)
            break
          }
      } 
    let good = `La contraseña es valida :)`
    $res6.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <h3>${good}</h3>
    </body>
    </html>` 
    } else {
        alert('Insertaste menos de 8 números porfavor ingresa más')
    }  
  } validation($password)
}
    
// Cambiando Color 1
    const $color1 = document.getElementById('color1')
    $color1.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(28, 95, 126)'
      document.getElementById('home').style.background = 'rgba(28, 95, 126)'
      debugger
      document.getElementById('footer').style.background = 'rgba(28, 95, 126)'
      $oculto1.style.background = 'rgba(28, 95, 126)'
      $oculto2.style.background = 'rgba(28, 95, 126)'
      $oculto3.style.background = 'rgba(28, 95, 126)'
      $oculto4.style.background = 'rgba(28, 95, 126)'
      $oculto5.style.background = 'rgba(28, 95, 126)'
      $oculto6.style.background = 'rgba(28, 95, 126)'
      $oculto7.style.background = 'rgba(28, 95, 126)'
      $oculto8.style.background = 'rgba(28, 95, 126)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue">El Color que Insertaste es: 'rgba(28, 95, 126)' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
     $color1.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(28, 95, 126)'
      document.getElementById('home').style.background = 'rgba(28, 95, 126)'
      debugger
      document.getElementById('footer').style.background = 'rgba(28, 95, 126)'
      $oculto1.style.background = 'rgba(28, 95, 126)'
      $oculto2.style.background = 'rgba(28, 95, 126)'
      $oculto3.style.background = 'rgba(28, 95, 126)'
      $oculto4.style.background = 'rgba(28, 95, 126)'
      $oculto5.style.background = 'rgba(28, 95, 126)'
      $oculto6.style.background = 'rgba(28, 95, 126)'
      $oculto7.style.background = 'rgba(28, 95, 126)'
      $oculto8.style.background = 'rgba(28, 95, 126)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue">El Color que Insertaste es: 'rgba(28, 95, 126)' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

// Cambiando Color 2
    const $color2 = document.getElementById('color2')
    $color2.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(51, 247, 164)'
      document.getElementById('home').style.background = 'rgba(51, 247, 164)'
      debugger
      document.getElementById('footer').style.background = 'rgba(51, 247, 164)'
      $oculto1.style.background = 'rgba(51, 247, 164)'
      $oculto2.style.background = 'rgba(51, 247, 164)'
      $oculto3.style.background = 'rgba(51, 247, 164)'
      $oculto4.style.background = 'rgba(51, 247, 164)'
      $oculto5.style.background = 'rgba(51, 247, 164)'
      $oculto6.style.background = 'rgba(51, 247, 164)'
      $oculto7.style.background = 'rgba(51, 247, 164)'
      $oculto8.style.background = 'rgba(51, 247, 164)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue">El Color que Insertaste es: 'rgba(51, 247, 164)' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
     $color2.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(51, 247, 164)'
      document.getElementById('home').style.background = 'rgba(51, 247, 164)'
      debugger
      document.getElementById('footer').style.background = 'rgba(51, 247, 164)'
      $oculto1.style.background = 'rgba(51, 247, 164)'
      $oculto2.style.background = 'rgba(51, 247, 164)'
      $oculto3.style.background = 'rgba(51, 247, 164)'
      $oculto4.style.background = 'rgba(51, 247, 164)'
      $oculto5.style.background = 'rgba(51, 247, 164)'
      $oculto6.style.background = 'rgba(51, 247, 164)'
      $oculto7.style.background = 'rgba(51, 247, 164)'
      $oculto8.style.background = 'rgba(51, 247, 164)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue">El Color que Insertaste es: 'rgba(51, 247, 164)' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

// Cambiando Color 3
    const $color3 = document.getElementById('color3')
    $color3.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(249, 157, 65)'
      document.getElementById('home').style.background = 'rgba(249, 157, 65)'
      debugger
      document.getElementById('footer').style.background = 'rgba(249, 157, 65)'
      $oculto1.style.background = 'rgba(249, 157, 65)'
      $oculto2.style.background = 'rgba(249, 157, 65)'
      $oculto3.style.background = 'rgba(249, 157, 65)'
      $oculto4.style.background = 'rgba(249, 157, 65)'
      $oculto5.style.background = 'rgba(249, 157, 65)'
      $oculto6.style.background = 'rgba(249, 157, 65)'
      $oculto7.style.background = 'rgba(249, 157, 65)'
      $oculto8.style.background = 'rgba(249, 157, 65)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgba(249, 157, 65);">El Color que Insertaste es: '[rgba(249, 157, 65)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
    $color3.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(249, 157, 65)'
      document.getElementById('home').style.background = 'rgba(249, 157, 65)'
      debugger
      document.getElementById('footer').style.background = 'rgba(249, 157, 65)'
      $oculto1.style.background = 'rgba(249, 157, 65)'
      $oculto2.style.background = 'rgba(249, 157, 65)'
      $oculto3.style.background = 'rgba(249, 157, 65)'
      $oculto4.style.background = 'rgba(249, 157, 65)'
      $oculto5.style.background = 'rgba(249, 157, 65)'
      $oculto6.style.background = 'rgba(249, 157, 65)'
      $oculto7.style.background = 'rgba(249, 157, 65)'
      $oculto8.style.background = 'rgba(249, 157, 65)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgba(249, 157, 65);">El Color que Insertaste es: '[rgba(249, 157, 65)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

// Cambiando Color 4
    const $color4 = document.getElementById('color4')
    $color4.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(255, 241, 226);'
      document.getElementById('home').style.background = 'rgba(255, 241, 226)'
      debugger
      document.getElementById('footer').style.background = 'rgba(255, 241, 226)'
      $oculto1.style.background = 'rgba(255, 241, 226)'
      $oculto2.style.background = 'rgba(255, 241, 226)'
      $oculto3.style.background = 'rgba(255, 241, 226)'
      $oculto4.style.background = 'rgba(255, 241, 226)'
      $oculto5.style.background = 'rgba(255, 241, 226)'
      $oculto6.style.background = 'rgba(255, 241, 226)'
      $oculto7.style.background = 'rgba(255, 241, 226)'
      $oculto8.style.background = 'rgba(255, 241, 226)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue;">El Color que Insertaste es:'[rgba(255, 241, 226)]'</h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
    $color4.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(255, 241, 226);'
      document.getElementById('home').style.background = 'rgba(255, 241, 226)'
      debugger
      document.getElementById('footer').style.background = 'rgba(255, 241, 226)'
      $oculto1.style.background = 'rgba(255, 241, 226)'
      $oculto2.style.background = 'rgba(255, 241, 226)'
      $oculto3.style.background = 'rgba(255, 241, 226)'
      $oculto4.style.background = 'rgba(255, 241, 226)'
      $oculto5.style.background = 'rgba(255, 241, 226)'
      $oculto6.style.background = 'rgba(255, 241, 226)'
      $oculto7.style.background = 'rgba(255, 241, 226)'
      $oculto8.style.background = 'rgba(255, 241, 226)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: blue;">El Color que Insertaste es:'[rgba(255, 241, 226)]'</h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

// Cambiando Color 5
    const $color5 = document.getElementById('color5')
    $color5.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgb(90, 37, 37)'
      document.getElementById('home').style.background = 'rgb(90, 37, 37)'
      debugger
      document.getElementById('footer').style.background = 'rgb(90, 37, 37)'
      $oculto1.style.background = 'rgb(90, 37, 37)'
      $oculto2.style.background = 'rgb(90, 37, 37)'
      $oculto3.style.background = 'rgb(90, 37, 37)'
      $oculto4.style.background = 'rgb(90, 37, 37)'
      $oculto5.style.background = 'rgb(90, 37, 37)'
      $oculto6.style.background = 'rgb(90, 37, 37)'
      $oculto7.style.background = 'rgb(90, 37, 37)'
      $oculto8.style.background = 'rgb(90, 37, 37)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgb(90, 37, 37);">El Color que Insertaste es: '[rgb(90, 37, 37)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
    $color5.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgb(90, 37, 37)'
      document.getElementById('home').style.background = 'rgb(90, 37, 37)'
      debugger
      document.getElementById('footer').style.background = 'rgb(90, 37, 37)'
      $oculto1.style.background = 'rgb(90, 37, 37)'
      $oculto2.style.background = 'rgb(90, 37, 37)'
      $oculto3.style.background = 'rgb(90, 37, 37)'
      $oculto4.style.background = 'rgb(90, 37, 37)'
      $oculto5.style.background = 'rgb(90, 37, 37)'
      $oculto6.style.background = 'rgb(90, 37, 37)'
      $oculto7.style.background = 'rgb(90, 37, 37)'
      $oculto8.style.background = 'rgb(90, 37, 37)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgb(90, 37, 37);">El Color que Insertaste es: '[rgb(90, 37, 37)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

// Cambiando Color 6
    const $color6 = document.getElementById('color6')
    $color6.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(242, 255, 14)'
      document.getElementById('home').style.background = 'rgba(242, 255, 14)'
      debugger
      document.getElementById('footer').style.background = 'rgba(242, 255, 14)'
      $oculto1.style.background = 'rgba(242, 255, 14)'
      $oculto2.style.background = 'rgba(242, 255, 14)'
      $oculto3.style.background = 'rgba(242, 255, 14)'
      $oculto4.style.background = 'rgba(242, 255, 14)'
      $oculto5.style.background = 'rgba(242, 255, 14)'
      $oculto6.style.background = 'rgba(242, 255, 14)'
      $oculto7.style.background = 'rgba(242, 255, 14)'
      $oculto8.style.background = 'rgba(242, 255, 14)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgba(242, 255, 14);">El Color que Insertaste es: '[rgba(242, 255, 14)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })
    $color6.addEventListener('touchstart', function(event) {
      event.preventDefault();
      document.body.style.backgroundColor= 'rgba(242, 255, 14)'
      document.getElementById('home').style.background = 'rgba(242, 255, 14)'
      debugger
      document.getElementById('footer').style.background = 'rgba(242, 255, 14)'
      $oculto1.style.background = 'rgba(242, 255, 14)'
      $oculto2.style.background = 'rgba(242, 255, 14)'
      $oculto3.style.background = 'rgba(242, 255, 14)'
      $oculto4.style.background = 'rgba(242, 255, 14)'
      $oculto5.style.background = 'rgba(242, 255, 14)'
      $oculto6.style.background = 'rgba(242, 255, 14)'
      $oculto7.style.background = 'rgba(242, 255, 14)'
      $oculto8.style.background = 'rgba(242, 255, 14)'
      document.getElementById('res7').style.display = 'block'
      let $res7 = document.getElementById('res7').contentWindow.document || document.getElementById('res7').contentDocument
      $res7.body.innerHTML = `
      <html>
        <head>
        </head>
        <body>
          <p>
            <h3 style="color: rgba(242, 255, 14);">El Color que Insertaste es: '[rgba(242, 255, 14)]' </h3>
          </p>
          <p >
            ${Date()}
          </p>
        </body>
      </html>`
      debugger
    })

function calcularDate() {
  const $dato1 = document.getElementById('fechainicial').value
  const $dato2 = document.getElementById('fechafinal').value
  document.getElementById('res8').style.display = 'block'
  let $res8 = document.getElementById('res8').contentWindow.document || document.getElementById('res8').contentDocument
  let dato1 = new Date($dato1)
  let dato2 = new Date($dato2)
  let hoy = new Date()
  let diasSemana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", 
      "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  let oprHoy = `Operación realizada el dia ${hoy.getDate()} de ${MESES[hoy.getMonth()]} del año ${hoy.getFullYear()}`;

debugger
let fin = `Fecha final: 
  Dia ${dato2.getDate()} del mes ${MESES[dato2.getMonth()]}
  del año ${dato2.getFullYear()}`
debugger
let ini = `Fecha inicial: 
  Dia ${dato1.getDate()} del mes ${MESES[dato1.getMonth()]}
  del año ${dato1.getFullYear()}`
debugger
const tiempo = dato2.getTime() - dato1.getTime();
debugger;
const tiempoDias = tiempo / 1000 / 60 / 60 / 24;
const tiempoAnios = Math.floor(tiempoDias / 365);
const tiempoMeses = Math.floor((tiempoDias - (tiempoAnios * 365)) / 31);
const dias = Math.floor((tiempoDias - (tiempoAnios*365)) / 31);

let diferencia = `Han pasado ${tiempoAnios} años, ${tiempoMeses} meses, 
  y ${dias} días desde la fecha que ingresaste.`

  $res8.body.innerHTML = `
   <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h2>${oprHoy}</h2>
    <p>${fin}</p>
    <p>${ini}</p>
    <h3>${diferencia}</h3>
  </body>
  </html>`

}

function clear(){
const limpiar = setTimeout(() => {
            $oculto1.style.display = 'none'
            $oculto2.style.display = 'none'
            $oculto3.style.display = 'none'
            $oculto4.style.display = 'none'
            $oculto5.style.display = 'none'
            $oculto6.style.display = 'none'
            $oculto7.style.display = 'none'
            $oculto8.style.display = 'none'
            }, 50)
}