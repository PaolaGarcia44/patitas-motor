const Nodo = require("../src/Nodo");

// Primera atención: vacunación
const atencion1 = {
    fecha: "02/02",
    motivo: "Vacunación",
    veterinario: "Dra. Ríos",
    costo: 85000
};

// Segunda atención: control de peso
const atencion2 = {
    fecha: "15/03",
    motivo: "Control de peso",
    veterinario: "Dr. Gómez",
    costo: 40000
};

// Tercera atención: limpieza dental
const atencion3 = {
    fecha: "20/05",
    motivo: "Limpieza dental",
    veterinario: "Dra. Ríos",
    costo: 150000
};

// Crear los nodos
const nodo1 = new Nodo(atencion1);
const nodo2 = new Nodo(atencion2);
const nodo3 = new Nodo(atencion3);

// Mostrar resultados
console.log(nodo1);
console.log(nodo2);
console.log(nodo3);


// Enlazar los nodos cronológicamente
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;

// Guardar referencia al primer nodo
const cabeza = nodo1;

// Mostrar la cabeza
console.log(cabeza);




// PRIMER WHILE: mostrar las atenciones
let actual = cabeza;

while (actual !== null) {
    console.log(actual.dato);

    actual = actual.siguiente;
}

//  SEGUNDO WHILE: sumar los costos
let total = 0;

actual = cabeza;

while (actual !== null) {
    total += actual.dato.costo;

    actual = actual.siguiente;
}

console.log("Costo total:", total);