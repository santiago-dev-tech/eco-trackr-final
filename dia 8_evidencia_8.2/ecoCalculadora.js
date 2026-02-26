const ecoCalculadora = {
    sumar: (a, b) => Number(a) + Number(b),

    restar: (a, b) => Number(a) - Number(b),

    multiplicar: (a, b) => Number(a) * Number(b),

    dividir: (a, b) => {
        if (Number(b) === 0) return "Error: División por cero";
        return Number(a) / Number(b);
    },

    calcularPorcentaje: (total, porcentaje) =>
        (Number(total) * Number(porcentaje)) / 100,

    saludar: (nombre) =>
        `🌿 Hola ${nombre || "Visitante"}, hoy reciclarás código y cuidarás el planeta`,

    // nueva funcion de potencia
    potencia: (base, exponente) =>
        Math.pow(Number(base), Number(exponente))
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ecoCalculadora };
}