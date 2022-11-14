//4. Extraer el dinero
function extractCurrencyValue(str) {
    if (str.startsWith("$") || str.startsWith("€")) {
        return str.slice(1);
    } else if (str.endsWith("$") || str.endsWith("€")) {
        return str.slice(0, str.length - 1);
    }
    return str;
}

alert(extractCurrencyValue('$120'));
alert(extractCurrencyValue('120$'));
alert(extractCurrencyValue('€120'));
alert(extractCurrencyValue('120€'));