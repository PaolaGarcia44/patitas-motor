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