/*
2. ¿Por qué 6.35.toFixed(1) == 6.3?

Según la documentación Math.round y toFixed redondean al número más cercano:
decimal comprendido entre 0..4 hacia abajo mientras 5..9 hacia arriba.

Por ejemplo:

alert(1.35.toFixed(1)); // 1.4

En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?

alert(6.35.toFixed(1) ; // 6.3
¿Cómo redondearlo de manera correcta?
*/

alert(`El redondeo de 1.35 con toFixed(1) da 1.4: ${1.35.toFixed(1) == 1.4}`);
alert(`El redondeo de 6.35 con toFixed(1) da 6.4: ${6.35.toFixed(1) == 6.4}`);

alert(Math.round(6.35 * 10) / 10);
alert((6.35 / 10).toFixed(2) * 10);

/*esto se da porque JavaScript (y en otros lenguajes también ocurre) no utiliza los
números flotantes como tal, sino que los interpreta como fracciones binarias. De esta
forma, en ocasiones puede darse la paradoja de que, a partir de cierto número de decimales,
se generen incoherencias en el sistema decimal. Un número que sí tendría lógica en el sistema
binario, donde resultaría ser una fracción binaria sin fin.

Podemos solucionarlo multiplicando por 10, aplicar el Math.round, y dividir entre 10.
Otra forma de resolverlo es diviendo entre 10, hacer .toFixed(2), y multiplicar por 10*/