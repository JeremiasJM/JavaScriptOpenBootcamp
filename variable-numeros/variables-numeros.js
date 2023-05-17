let alturaCentimetros = 183;
let alturaMetros = 1.83;
let pesoKilogramos = 100;
let alturaRedondeada = Math.ceil(alturaMetros);
let pesoRedondeado = Math.floor(pesoKilogramos);
let comparacionMaximo = (Number.MAX_SAFE_INTEGER + 1) === Number.MAX_SAFE_INTEGER;

console.log("Altura en centímetros:", alturaCentimetros);
console.log("Altura en metros:", alturaMetros);
console.log("Peso en kilogramos:", pesoKilogramos);
console.log("Altura redondeada hacia arriba:", alturaRedondeada);
console.log("Peso redondeado hacia abajo:", pesoRedondeado);
console.log("¿La comparación es verdadera?", comparacionMaximo);