diagrama de nodos y flechas. Después “pierde” un enlace a propósito

       cabeza
          |
          v
   +----------------+
   |     NODO 1     |
   |   Vacunación   |
   |    $85.000     |
   +----------------+
          |
          v
   +----------------+
   |     NODO 2     |
   | Control de peso|
   |    $40.000     |
   +----------------+
          |
          v
   +----------------+
   |     NODO 3     |
   | Limpieza dental|
   |   $150.000     |
   +----------------+
          |
          v
         null



En este ejercicio aprendí que los nodos necesitan estar conectados para poder recorrer toda la lista. Al principio teníamos las tres atenciones de Lola organizadas por fecha y cada nodo apuntaba al siguiente.

Después hice una prueba cambiando `nodo1.siguiente` por `null`. Al ejecutar el recorrido, solamente apareció la primera atención, porque el programa ya no encontró una conexión para continuar.

Con esto entendí que, aunque los otros nodos todavía existen, si pierdo un enlace ya no puedo llegar a ellos desde la cabeza. ¡Así que hay que tener mucho cuidado con las conexiones para no dejar información por fuera!


# 1. Agregar a una lista vacía

Cuando la lista está vacía, no tenemos ningún nodo y cabeza tiene el valor null.

**Estado inicial:**

```text
cabeza
   |
   v
  null
```

**Agregar al inicio o al final:**

Como no hay ningún nodo, el nuevo será el primero y también el último.

```text
cabeza
   |
   v
+-----------+
|   NUEVO   |
+-----------+
     |
     v
    null
```

**Referencias que cambian:**
- cabeza ahora apunta al nodo nuevo.
- nuevo.siguiente queda en null.

# 2. Agregar a una lista que tiene un nodo

Inicialmente tenemos:

```text
cabeza
   |
   v
+-----------+
|  NODO A   |
+-----------+
     |
     v
    null
```

**A. Agregar al final**

El nuevo nodo se conecta después del nodo A.

```text
cabeza
   |
   v
+-----------+       +-----------+
|  NODO A   | ----> |   NUEVO   |
+-----------+       +-----------+
                         |
                         v
                        null
```

¿Qué cambia?
- nodoA.siguiente ahora apunta al nuevo nodo.
- nuevo.siguiente queda en null.
- cabeza sigue apuntando al nodo A.

**B. Agregar al inicio**

El nuevo nodo queda antes del nodo A.

```text
cabeza
   |
   v
+-----------+       +-----------+
|   NUEVO   | ----> |  NODO A   |
+-----------+       +-----------+
                         |
                         v
                        null
```

¿Qué cambia?
- nuevo.siguiente apunta al nodo A.
- cabeza ahora apunta al nodo nuevo.
- El nodo A conserva su conexión con null.

# 3. Agregar a una lista con varios nodos

Inicialmente tenemos tres nodos conectados:

```text
cabeza
   |
   v
+-----------+     +-----------+     +-----------+
|  NODO A   | --> |  NODO B   | --> |  NODO C   |
+-----------+     +-----------+     +-----------+
                                          |
                                          v
                                         null
```

**A. Agregar al final**

El nuevo nodo se conecta después del último nodo, que es el C.

```text
cabeza
   |
   v
+-----------+     +-----------+     +-----------+     +-----------+
|  NODO A   | --> |  NODO B   | --> |  NODO C   | --> |   NUEVO   |
+-----------+     +-----------+     +-----------+     +-----------+
                                                             |
                                                             v
                                                            null
```

¿Qué cambia?
- nodoC.siguiente ahora apunta al nodo nuevo.
- nuevo.siguiente queda en null.
- cabeza sigue apuntando al nodo A.

**B. Agregar al inicio**

El nuevo nodo se coloca antes del nodo A.

```text
cabeza
   |
   v
+-----------+     +-----------+     +-----------+     +-----------+
|   NUEVO   | --> |  NODO A   | --> |  NODO B   | --> |  NODO C   |
+-----------+     +-----------+     +-----------+     +-----------+
                                                             |
                                                             v
                                                            null
```

¿Qué cambia?
- nuevo.siguiente apunta al nodo A.
- cabeza ahora apunta al nodo nuevo.
- Los demás nodos conservan sus conexiones.