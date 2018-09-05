let hoy = new Date();
let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const MESES = ["", "Enero", "Febrero", "Marzo", "Abril", 
			"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(`Operación realizada el dia ${hoy.getDate()} de ${MESES[hoy.getMonth()]} de ${hoy.getFullYear()}`);

const nacimiento = new Date(1999, 4, 28);

console.log(`Fecha de nacimiento: 
	Dia ${nacimiento.getDate()} del mes ${MESES[nacimiento.getMonth()]}
	del año ${nacimiento.getFullYear()}`)

const tiempo = hoy.getTime() - nacimiento.getTime();

const tiempoDias = tiempo / 1000 / 60 / 60 / 24;
const tiempoAnios = Math.floor(tiempoDias / 365);
const tiempoMeses = Math.floor((tiempoDias - (tiempoAnios * 365)) / 31);
const dias = Math.floor((tiempoDias - (tiempoAnios*365)) / 31);

console.log(`Han pasado ${tiempoAnios} años, ${tiempoMeses} meses, 
	y ${dias} días desde mi ultimo cumpleaños.`)