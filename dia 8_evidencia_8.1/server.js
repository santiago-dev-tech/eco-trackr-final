const express = require('express');
const cors = require('cors');
const path = require('path');
const { ecoCalculadora } = require('./ecoCalculadora');

const app = express();
const PUERTO = 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'eco-trackr-voz.html'));
});

/*  API  */

// SUMAR
app.get('/api/sumar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  res.json({
    operacion: 'suma',
    a,
    b,
    resultado: ecoCalculadora.sumar(a, b)
  });
});

// RESTAR
app.get('/api/restar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  res.json({
    operacion: 'resta',
    a,
    b,
    resultado: ecoCalculadora.restar(a, b)
  });
});

// MULTIPLICAR
app.get('/api/multiplicar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  res.json({
    operacion: 'multiplicación',
    a,
    b,
    resultado: ecoCalculadora.multiplicar(a, b)
  });
});

// DIVIDIR
app.get('/api/dividir', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  if (b === 0) {
    return res.status(400).json({ error: 'No se puede dividir por cero' });
  }

  res.json({
    operacion: 'división',
    a,
    b,
    resultado: ecoCalculadora.dividir(a, b)
  });
});

// PORCENTAJE
app.get('/api/porcentaje', (req, res) => {
  const total = Number(req.query.total);
  const porcentaje = Number(req.query.porcentaje);

  if (isNaN(total) || isNaN(porcentaje)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  res.json({
    operacion: 'porcentaje',
    total,
    porcentaje,
    resultado: ecoCalculadora.calcularPorcentaje(total, porcentaje)
  });
});

// SALUDAR
app.get('/api/saludar', (req, res) => {
  const nombre = req.query.nombre || 'Visitante';
  res.json({ mensaje: ecoCalculadora.saludar(nombre) });
});

// POTENCIA
app.get('/api/potencia', (req, res) => {
  const base = Number(req.query.base);
  const exponente = Number(req.query.exponente);

  if (isNaN(base) || isNaN(exponente)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }

  res.json({
    operacion: 'potencia',
    base,
    exponente,
    resultado: ecoCalculadora.potencia(base, exponente)
  });
});

app.listen(PUERTO, () => {
  console.log(`🚀 Servidor EcoCalc corriendo en http://localhost:${PUERTO}`);
});