"use strict";

const formulario = document.getElementById("config-form");
const presupuestoInput = document.getElementById("presupuesto");
const resultados = document.getElementById("resultados");
const listaComponentes = document.getElementById("component-list");
const descripcionResultado = document.getElementById("resultado-descripcion");
const botonVolver = document.getElementById("volver-configurar");
const botonImprimir = document.getElementById("imprimir-resultados");

const formatoMXN = cantidad =>
  cantidad.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  });

const iconos = {
  "Procesador": "🧠",
  "Tarjeta madre": "🧩",
  "Memoria RAM": "💾",
  "Almacenamiento": "📀",
  "Tarjeta gráfica": "🎮",
  "Gráficos integrados": "🖥️",
  "Fuente de poder": "⚡",
  "Gabinete": "🖥️",
  "Disipador": "❄️"
};

/*
  Catálogo ilustrativo en pesos mexicanos.
  Actualiza los precios cuando tengas cotizaciones reales.
  Cada configuración incluye todas las piezas necesarias
  para la torre, pero no incluye monitor ni periféricos.
*/

const configuraciones = [
  {
    uso: "gaming",
    nombre: "PC gamer de entrada",
    descripcion: "Para comenzar con juegos ligeros y competitivos.",
    piezas: [
      ["Procesador", "Ryzen 5 4600G", 1800],
      ["Tarjeta madre", "A520M compatible", 1000],
      ["Memoria RAM", "16 GB DDR4 (2 x 8 GB)", 650],
      ["Almacenamiento", "SSD 480 GB", 500],
      ["Gráficos integrados", "Gráficos integrados del procesador", 0],
      ["Fuente de poder", "500 W de calidad", 650],
      ["Gabinete", "Micro-ATX con ventilación", 650]
    ]
  },
  {
    uso: "trabajo",
    nombre: "PC económica para estudio",
    descripcion: "Para tareas, navegación, ofimática y uso diario.",
    piezas: [
      ["Procesador", "Ryzen 5 4600G", 1800],
      ["Tarjeta madre", "A520M compatible", 1000],
      ["Memoria RAM", "16 GB DDR4 (2 x 8 GB)", 650],
      ["Almacenamiento", "SSD 480 GB", 500],
      ["Gráficos integrados", "Gráficos integrados del procesador", 0],
      ["Fuente de poder", "500 W de calidad", 650],
      ["Gabinete", "Micro-ATX", 600]
    ]
  },
  {
    uso: "trabajo",
    nombre: "PC para trabajo multitarea",
    descripcion: "Más memoria y almacenamiento para trabajar cómodamente.",
    piezas: [
      ["Procesador", "Ryzen 5 5600G", 2200],
      ["Tarjeta madre", "A520M compatible", 1000],
      ["Memoria RAM", "32 GB DDR4 (2 x 16 GB)", 1100],
      ["Almacenamiento", "SSD NVMe 1 TB", 800],
      ["Gráficos integrados", "Gráficos integrados del procesador", 0],
      ["Fuente de poder", "550 W de calidad", 750],
      ["Gabinete", "Micro-ATX ventilado", 700]
    ]
  },
  {
    uso: "gaming",
    nombre: "PC gamer con tarjeta gráfica",
    descripcion: "Para gaming con tarjeta gráfica dedicada.",
    piezas: [
      ["Procesador", "Ryzen 5 5500", 1500],
      ["Tarjeta madre", "A520M compatible", 1000],
      ["Memoria RAM", "16 GB DDR4 (2 x 8 GB)", 650],
      ["Almacenamiento", "SSD NVMe 1 TB", 800],
      ["Tarjeta gráfica", "Radeon RX 6600 8 GB", 3500],
      ["Fuente de poder", "550 W de calidad", 850],
      ["Gabinete", "Micro-ATX ventilado", 700]
    ]
  },
  {
    uso: "creacion",
    nombre: "PC para creación de contenido",
    descripcion: "Para edición, multitarea y streaming de nivel inicial.",
    piezas: [
      ["Procesador", "Ryzen 5 5600", 2000],
      ["Tarjeta madre", "B550M compatible", 1400],
      ["Memoria RAM", "32 GB DDR4 (2 x 16 GB)", 1100],
      ["Almacenamiento", "SSD NVMe 1 TB", 800],
      ["Tarjeta gráfica", "Radeon RX 6600 8 GB", 3500],
      ["Fuente de poder", "650 W de calidad", 1000],
      ["Gabinete", "Micro-ATX ventilado", 800]
    ]
  },
  {
    uso: "gaming",
    nombre: "PC gamer mejorada",
    descripcion: "Una configuración con tarjeta gráfica y componentes equilibrados.",
    piezas: [
      ["Procesador", "Ryzen 5 5600", 2000],
      ["Tarjeta madre", "B550M compatible", 1400],
      ["Memoria RAM", "32 GB DDR4 (2 x 16 GB)", 1100],
      ["Almacenamiento", "SSD NVMe 1 TB", 800],
      ["Tarjeta gráfica", "Radeon RX 6600 8 GB", 3500],
      ["Fuente de poder", "650 W de calidad", 1000],
      ["Gabinete", "Micro-ATX con buena ventilación", 800]
    ]
  },
  {
    uso: "creacion",
    nombre: "PC para edición y streaming",
    descripcion: "Más capacidad de procesamiento y memoria para crear contenido.",
    piezas: [
      ["Procesador", "Ryzen 7 5700X", 2700],
      ["Tarjeta madre", "B550M compatible", 1400],
      ["Memoria RAM", "32 GB DDR4 (2 x 16 GB)", 1100],
      ["Almacenamiento", "SSD NVMe 1 TB", 800],
      ["Tarjeta gráfica", "Radeon RX 6600 8 GB", 3500],
      ["Fuente de poder", "650 W de calidad", 1000],
      ["Gabinete", "Micro-ATX ventilado", 800],
      ["Disipador", "Disipador compatible para el procesador", 500]
    ]
  }
];

// Calcula el costo total de una configuración.
function calcularTotal(pc) {
  return pc.piezas.reduce((total, pieza) => total + pieza[2], 0);
}

// Lee el uso elegido por el visitante.
function obtenerUso() {
  const seleccionado = document.querySelector('input[name="uso"]:checked');
  return seleccionado ? seleccionado.value : "gaming";
}

// Marca visualmente el presupuesto rápido seleccionado.
function actualizarBotonesPresupuesto() {
  document.querySelectorAll("[data-budget]").forEach(boton => {
    const activo = Number(boton.dataset.budget) === Number(presupuestoInput.value);
    boton.classList.toggle("active", activo);
  });
}

// Los botones rellenan el campo sin impedir que se escriba manualmente.
document.querySelectorAll("[data-budget]").forEach(boton => {
  boton.addEventListener("click", () => {
    presupuestoInput.value = boton.dataset.budget;
    actualizarBotonesPresupuesto();
  });
});

presupuestoInput.addEventListener("input", actualizarBotonesPresupuesto);

// Construye la lista completa de piezas.
function mostrarResultados(pc, presupuesto) {
  const total = calcularTotal(pc);
  const restante = presupuesto - total;

  const filas = pc.piezas.map(([categoria, nombre, precio]) => `
    <div class="component-row">
      <div class="component-icon" aria-hidden="true">
        ${iconos[categoria] || "🔧"}
      </div>
      <div class="component-info">
        <strong>${categoria}</strong>
        <p>${nombre}</p>
      </div>
      <div class="component-price">${formatoMXN(precio)}</div>
    </div>
  `).join("");

  listaComponentes.innerHTML = `
    <div class="result-summary">
      <div class="summary-card highlight">
        <span>Presupuesto disponible</span>
        <strong>${formatoMXN(presupuesto)}</strong>
      </div>
      <div class="summary-card">
        <span>Dinero restante</span>
        <strong>${formatoMXN(restante)}</strong>
      </div>
    </div>

    <article class="result-pc">
      <div class="result-pc-header">
        <span class="eyebrow">CONFIGURACIÓN RECOMENDADA</span>
        <h3>${pc.nombre}</h3>
        <p>${pc.descripcion}</p>
      </div>

      ${filas}

      <div class="result-total">
        <span>Total estimado de la torre</span>
        <strong>${formatoMXN(total)}</strong>
      </div>

      <p class="result-note">
        El precio de cada pieza es una estimación de ejemplo.
        Comprueba disponibilidad, costos de envío y compatibilidad
        antes de realizar una compra.
      </p>
    </article>
  `;

  descripcionResultado.textContent =
    Configuración para ${etiquetaUso(obtenerUso())}, con un total de ${formatoMXN(total)}.;

  resultados.hidden = false;
  resultados.scrollIntoView({ behavior: "smooth", block: "start" });
}

function etiquetaUso(uso) {
  const nombres = {
    gaming: "gaming",
    trabajo: "trabajo y estudio",
    creacion: "creación de contenido"
  };
  return nombres[uso] || "uso general";
}

function mostrarSinResultados(presupuesto, uso) {
  listaComponentes.innerHTML = `
    <article class="result-pc">
      <div class="result-pc-header">
        <h3>No encontramos una configuración registrada</h3>
        <p>Tu presupuesto es de ${formatoMXN(presupuesto)} para ${etiquetaUso(uso)}.</p>
      </div>
      <p class="result-note">
        Nuestro catálogo todavía es limitado para esta combinación.
        Prueba otro uso o una cantidad distinta. Podemos ampliar el catálogo
        con más componentes y precios para ofrecer más alternativas.
      </p>
    </article>
  `;

  descripcionResultado.textContent =
    "No hay una configuración registrada que cumpla con ese presupuesto.";

  resultados.hidden = false;
  resultados.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Al enviar, busca la configuración registrada más completa que no exceda el máximo.
formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const presupuesto = Number(presupuestoInput.value);
  const uso = obtenerUso();

  if (
    !Number.isFinite(presupuesto) ||
    presupuesto < 4000 ||
    presupuesto > 100000
  ) {
    alert("Escribe un presupuesto entre $4,000 y $100,000 MXN.");
    presupuestoInput.focus();
    return;
  }

  const opciones = configuraciones
    .filter(pc => pc.uso === uso)
    .map(pc => ({ ...pc, total: calcularTotal(pc) }))
    .filter(pc => pc.total <= presupuesto)
    .sort((a, b) => b.total - a.total);

  if (opciones.length === 0) {
    mostrarSinResultados(presupuesto, uso);
    return;
  }

  mostrarResultados(opciones[0], presupuesto);
});

botonVolver.addEventListener("click", () => {
  document.getElementById("configurador").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

botonImprimir.addEventListener("click", () => {
  window.print();
});

// Año automático en el pie de página.
document.getElementById("year").textContent = new Date().getFullYear();

actualizarBotonesPresupuesto();
