[2:57 a.m., 28/10/2026] Jesuskarim Cueto: <script src="script.js"></script>
</body>
</html>
[3:01 a.m., 28/10/2026] Jesuskarim Cueto: const catalogo = {
  gaming: [
    {
      id: "cpu",
      categoria: "PROCESADOR",
      nombre: "AMD Ryzen 5 5600",
      descripcion: "6 núcleos y 12 hilos. Necesita tarjeta gráfica dedicada.",
      precio: 2200,
      imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=80",
      specs: ["6 núcleos / 12 hilos", "Socket AM4", "Hasta 4.4 GHz"]
    },
    {
      id: "mb",
      categoria: "PLACA MADRE",
      nombre: "A520M AM4",
      descripcion: "Placa compacta para procesadores compatibles con AM4.",
      precio: 1100,
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      specs: ["Socket AM4", "Micro-ATX", "DDR4"]
    },
    {
      id: "ram",
      categoria: "MEMORIA RAM",
      nombre: "16 GB DDR4",
      descripcion: "Dos módulos de 8 GB para aprovechar el doble canal.",
      precio: 650,
      imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=500&q=80",
      specs: ["16 GB", "2 × 8 GB", "3200 MT/s objetivo"]
    },
    {
      id: "gpu",
      categoria: "TARJETA GRÁFICA",
      nombre: "Radeon RX 6600 8 GB",
      descripcion: "Gráfica dedicada de referencia para juegos a 1080p.",
      precio: 4300,
      imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
      specs: ["8 GB GDDR6", "Gaming 1080p", "PCIe x16"]
    },
    {
      id: "ssd",
      categoria: "ALMACENAMIENTO",
      nombre: "SSD NVMe 1 TB",
      descripcion: "Almacenamiento rápido para Windows, juegos y programas.",
      precio: 950,
      imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
      specs: ["1 TB", "M.2 NVMe", "Estado sólido"]
    },
    {
      id: "case",
      categoria: "GABINETE",
      nombre: "Gabinete Micro-ATX",
      descripcion: "Diseño compacto con ventilación para los componentes.",
      precio: 850,
      imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
      specs: ["Micro-ATX", "Flujo de aire", "Espacio para GPU"]
    },
    {
      id: "psu",
      categoria: "FUENTE DE PODER",
      nombre: "Fuente 650 W 80+ Bronze",
      descripcion: "Fuente de referencia. Comprueba marca, protecciones y conectores.",
      precio: 1050,
      imagen: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=500&q=80",
      specs: ["650 W nominales", "80+ Bronze", "Conectores PCIe"]
    }
  ],

  trabajo: [
    {
      id: "cpu",
      categoria: "PROCESADOR",
      nombre: "AMD Ryzen 5 5600G",
      descripcion: "6 núcleos y 12 hilos con gráficos integrados.",
      precio: 2300,
      imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=80",
      specs: ["6 núcleos / 12 hilos", "AM4", "Gráficos integrados"]
    },
    {
      id: "mb",
      categoria: "PLACA MADRE",
      nombre: "A520M AM4",
      descripcion: "Placa compacta; verifica la compatibilidad de BIOS.",
      precio: 1100,
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      specs: ["Socket AM4", "Micro-ATX", "DDR4"]
    },
    {
      id: "ram",
      categoria: "MEMORIA RAM",
      nombre: "16 GB DDR4",
      descripcion: "Memoria de doble canal para multitarea y gráficos integrados.",
      precio: 650,
      imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=500&q=80",
      specs: ["16 GB", "2 × 8 GB", "3200 MT/s objetivo"]
    },
    {
      id: "gpu",
      categoria: "GRÁFICOS",
      nombre: "Radeon Graphics integrados",
      descripcion: "Gráficos dentro del procesador; no incluye tarjeta dedicada.",
      precio: 0,
      imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
      specs: ["Integrados en CPU", "Sin GPU dedicada", "RAM de doble canal"]
    },
    {
      id: "ssd",
      categoria: "ALMACENAMIENTO",
      nombre: "SSD NVMe 1 TB",
      descripcion: "Espacio para sistema operativo, aplicaciones y archivos.",
      precio: 950,
      imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
      specs: ["1 TB", "M.2 NVMe", "Estado sólido"]
    },
    {
      id: "case",
      categoria: "GABINETE",
      nombre: "Gabinete Micro-ATX",
      descripcion: "Gabinete compacto; comprueba si incluye ventiladores.",
      precio: 850,
      imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
      specs: ["Micro-ATX", "Compacto", "Buena ventilación"]
    },
    {
      id: "psu",
      categoria: "FUENTE DE PODER",
      nombre: "Fuente de calidad 450–550 W",
      descripcion: "Prioriza una unidad fiable con protecciones eléctricas.",
      precio: 850,
      imagen: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=500&q=80",
      specs: ["450–550 W", "Protecciones", "Marca verificable"]
    }
  ],

  creacion: [
    {
      id: "cpu",
      categoria: "PROCESADOR",
      nombre: "AMD Ryzen 7 5700X",
      descripcion: "8 núcleos y 16 hilos para edición y multitarea. Necesita GPU dedicada.",
      precio: 2700,
      imagen: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=500&q=80",
      specs: ["8 núcleos / 16 hilos", "AM4", "Sin gráficos integrados"]
    },
    {
      id: "mb",
      categoria: "PLACA MADRE",
      nombre: "B550M AM4",
      descripcion: "Placa para AM4 con características que varían según el modelo.",
      precio: 1500,
      imagen: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      specs: ["Socket AM4", "Micro-ATX", "DDR4"]
    },
    {
      id: "ram",
      categoria: "MEMORIA RAM",
      nombre: "32 GB DDR4",
      descripcion: "Capacidad de referencia para proyectos creativos y multitarea.",
      precio: 1200,
      imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=500&q=80",
      specs: ["32 GB", "2 × 16 GB", "3200 MT/s objetivo"]
    },
    {
      id: "gpu",
      categoria: "TARJETA GRÁFICA",
      nombre: "Radeon RX 6600 8 GB",
      descripcion: "GPU dedicada de referencia; verifica los requisitos de tus programas.",
      precio: 4300,
      imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=500&q=80",
      specs: ["8 GB GDDR6", "GPU dedicada", "PCIe x16"]
    },
    {
      id: "ssd",
      categoria: "ALMACENAMIENTO",
      nombre: "SSD NVMe 1 TB",
      descripcion: "Almacenamiento rápido para proyectos y aplicaciones.",
      precio: 950,
      imagen: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=500&q=80",
      specs: ["1 TB", "M.2 NVMe", "Estado sólido"]
    },
    {
      id: "case",
      categoria: "GABINETE",
      nombre: "Gabinete Micro-ATX",
      descripcion: "Diseño con espacio para los componentes y ventilación.",
      precio: 850,
      imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=500&q=80",
      specs: ["Micro-ATX", "Flujo de aire", "Espacio para GPU"]
    },
    {
      id: "psu",
      categoria: "FUENTE DE PODER",
      nombre: "Fuente 650 W 80+ Bronze",
      descripcion: "Verifica los conectores y la calidad de la unidad elegida.",
      precio: 1050,
      imagen: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=500&q=80",
      specs: ["650 W nominales", "80+ Bronze", "Conectores PCIe"]
    }
  ]
};

const dinero = cantidad =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0
  }).format(cantidad);

const formulario = document.querySelector("#config-form");
const presupuesto = document.querySelector("#presupuesto");
const resultados = document.querySelector("#resultados");

const nombresUso = {
  gaming: "Gaming",
  trabajo: "Trabajo y estudio",
  creacion: "Creación de contenido"
};

// Botones de presupuesto rápido
document.querySelectorAll("[data-budget]").forEach(boton => {
  boton.addEventListener("click", () => {
    presupuesto.value = boton.dataset.budget;
    document.querySelectorAll("[data-budget]").forEach(b => {
      b.classList.toggle("selected", b === boton);
    });
  });
});

presupuesto.addEventListener("input", () => {
  document.querySelectorAll("[data-budget]").forEach(boton => {
    boton.classList.toggle(
      "selected",
      Number(boton.dataset.budget) === Number(presupuesto.value)
    );
  });
});

// Mostrar componentes
function mostrarComponentes(componentes) {
  const lista = document.querySelector("#component-list");
  lista.replaceChildren();

  componentes.forEach(componente => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "component-card";

    const imagen = document.createElement("img");
    imagen.src = componente.imagen;
    imagen.alt = componente.categoria;
    imagen.loading = "lazy";

    imagen.onerror = () => {
      imagen.onerror = null;
      imagen.src =
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=70";
    };

    const detalles = document.createElement("div");

    const categoria = document.createElement("div");
    categoria.className = "part-category";
    categoria.textContent = componente.categoria;

    const nombre = document.createElement("h4");
    nombre.className = "part-name";
    nombre.textContent = componente.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "part-description";
    descripcion.textContent = componente.descripcion;

    const especificaciones = document.createElement("div");
    especificaciones.className = "specs";

    componente.specs.forEach(especificacion => {
      const etiqueta = document.createElement("span");
      etiqueta.className = "spec-chip";
      etiqueta.textContent = especificacion;
      especificaciones.appendChild(etiqueta);
    });

    detalles.append(categoria, nombre, descripcion, especificaciones);

    const precio = document.createElement("div");
    precio.className = "part-price";

    const precioNumero = document.createElement("strong");
    precioNumero.textContent =
      componente.precio === 0
        ? "No incluido"
        : dinero(componente.precio);

    const notaPrecio = document.createElement("small");
    notaPrecio.textContent =
      componente.precio === 0 ? "Por definir" : "Precio estimado";

    precio.append(precioNumero, notaPrecio);
    tarjeta.append(imagen, detalles, precio);
    lista.appendChild(tarjeta);
  });
}

// Calcular y presentar la configuración
formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const cantidad = Number(presupuesto.value);

  if (!Number.isFinite(cantidad) || cantidad < 4000 || cantidad > 100000) {
    presupuesto.setCustomValidity(
      "Ingresa un presupuesto entre $4,000 y $100,000 MXN."
    );
    presupuesto.reportValidity();
    presupuesto.setCustomValidity("");
    return;
  }

  const uso = new FormData(formulario).get("uso");
  const componentes = catalogo[uso];
  const total = componentes.reduce(
    (suma, componente) => suma + componente.precio,
    0
  );

  const ram = componentes.find(c => c.id === "ram");
  const gpu = componentes.find(c => c.id === "gpu");
  const porcentaje = Math.round((total / cantidad) * 100);

  document.querySelector("#results-subtitle").textContent =
    Configuración orientativa para ${nombresUso[uso]}, con un presupuesto de ${dinero(cantidad)}.;

  document.querySelector("#total-price").textContent = dinero(total);
  document.querySelector("#preview-total").textContent = ${dinero(total)} MXN;
  document.querySelector("#summary-purpose").textContent = nombresUso[uso];
  document.querySelector("#summary-ram").textContent =
    ram.specs[0] || "Consultar";
  document.querySelector("#summary-ram-detail").textContent =
    ram.specs.slice(1).join(" · ");

  document.querySelector("#summary-graphics").textContent =
    uso === "trabajo" ? "Integrados" : "Dedicados";

  document.querySelector("#summary-graphics-detail").textContent =
    gpu.specs[0] || "Consultar modelo";

  document.querySelector("#budget-fill").style.width =
    ${Math.min(100, porcentaje)}%;

  document.querySelector("#budget-used").textContent =
    ${porcentaje}% de tu presupuesto;

  const estado = document.querySelector("#budget-status");

  if (total <= cantidad) {
    estado.textContent = Restante: ${dinero(cantidad - total)};
  } else {
    estado.textContent = Excede tu presupuesto por ${dinero(total - cantidad)};
  }

  estado.style.color = total <= cantidad ? "#68e0b0" : "#ff9b9b";

  // Avisar si la configuración cuesta más de lo disponible
  let aviso = document.querySelector("#budget-warning");

  if (!aviso) {
    aviso = document.createElement("p");
    aviso.id = "budget-warning";
    aviso.className = "disclaimer";
    document.querySelector(".summary-grid").after(aviso);
  }

  aviso.textContent = total > cantidad
    ? "Esta configuración supera tu presupuesto. Los componentes mostrados son una referencia y deben sustituirse por alternativas más económicas antes de comprar."
    : "El total cabe en tu presupuesto según los precios de ejemplo. Confirma los precios reales y la compatibilidad antes de comprar.";

  document.querySelector("#component-list").replaceChildren();
  mostrarComponentes(componentes);

  resultados.hidden = false;
  resultados.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// Cambiar el presupuesto
document.querySelector("#edit-config").addEventListener("click", () => {
  document.querySelector("#configurador").scrollIntoView({
    behavior: "smooth"
  });
});

// Imprimir o guardar como PDF
document.querySelector("#print-build").addEventListener("click", () => {
  window.print();
});
