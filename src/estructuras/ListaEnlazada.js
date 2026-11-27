const Nodo = require("./Nodo");

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.tamanio = 0;
    }

    // Agregar un nodo al final
    agregarAlFinal(dato) {
        const nuevo = new Nodo(dato);

        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.cola = nuevo;
        } else {
            this.cola.siguiente = nuevo;
            this.cola = nuevo;
        }

        this.tamanio++;
    }

    // Agregar un nodo al inicio
    agregarAlInicio(dato) {
        const nuevo = new Nodo(dato);

        if (this.cabeza === null) {
            this.cabeza = nuevo;
            this.cola = nuevo;
        } else {
            nuevo.siguiente = this.cabeza;
            this.cabeza = nuevo;
        }

        this.tamanio++;
    }
}

module.exports = ListaEnlazada;