let modo = "jugar";

document.getElementById("btn-jugar").addEventListener("click", function(){
    modo = "jugar";
    document.getElementById("btn-jugar").classList.add("activo");
    document.getElementById("btn-trabajar").classList.remove("activo");
});

document.getElementById("btn-trabajar").addEventListener("click", function(){
    modo = "trabajar";
    document.getElementById("btn-trabajar").classList.add("activo");
    document.getElementById("btn-jugar").classList.remove("activo");
});

const opciones = {
    jugar: {
        bajo: {
            cpu: { nombre: "AMD Athlon 3000G", desc: "Con gráficos integrados, ideal para empezar", precio: 1600 },
            mb: { nombre: "Placa A320M", desc: "Básica y confiable", precio: 950 },
            ram: { nombre: "8 GB DDR4 2666MHz", desc: "1 módulo, ampliable después", precio: 750 },
            gpu: { nombre: "Vega 3 Integrados", desc: "Juegos ligeros", precio: 0 },
            ssd: { nombre: "SSD 240 GB", desc: "Rápido para sistema", precio: 550 },
            caja: { nombre: "Gabinete básico", desc: "Funcional", precio: 450 },
            psu: { nombre: "Fuente 450W", desc: "Suficiente y segura", precio: 400 }
        },
        medio: {
            cpu: { nombre: "AMD Ryzen 5 5600", desc: "Excelente para juegos", precio: 3200 },
            mb: { nombre: "Placa B550M", desc: "Buena conectividad", precio: 1800 },
            ram: { nombre: "16 GB DDR4 3200MHz", desc: "Canal dual fluido", precio: 1100 },
            gpu: { nombre: "RX 6600 8GB", desc: "Juega en 1080p", precio: 4500 },
            ssd: { nombre: "SSD NVMe 500 GB", desc: "Muy rápido", precio: 900 },
            caja: { nombre: "Gabinete con vidrio", desc: "Buena ventilación", precio: 800 },
            psu: { nombre: "Fuente 550W 80+ Bronce", desc: "Confiable", precio: 850 }
        },
        alto: {
            cpu: { nombre: "AMD Ryzen 7 5800X3D", desc: "Máximo rendimiento", precio: 5800 },
            mb: { nombre: "Placa B550 con WiFi", desc: "Gama alta", precio: 2800 },
            ram: { nombre: "32 GB DDR4 3600MHz", desc: "Máxima fluidez", precio: 2000 },
            gpu: { nombre: "RX 7700 XT 12GB", desc: "Juega en 1440p", precio: 9500 },
            ssd: { nombre: "SSD NVMe 1 TB", desc: "Espacio de sobra", precio: 1600 },
            caja: { nombre: "Gabinete premium", desc: "Excelente diseño", precio: 1500 },
            psu: { nombre: "Fuente 750W 80+ Oro", desc: "Máxima eficiencia", precio: 1600 }
        }
    },
    trabajar: {
        bajo: {
            cpu: { nombre: "Intel Core i3-12100", desc: "Rápido para ofimática", precio: 2400 },
            mb: { nombre: "Placa H610M", desc: "Confiable", precio: 1300 },
            ram: { nombre: "16 GB DDR4", desc: "Multitarea fluida", precio: 1000 },
            gpu: { nombre: "Intel UHD 730", desc: "Integrados", precio: 0 },
            ssd: { nombre: "SSD 480 GB", desc: "Espacio amplio", precio: 800 },
            caja: { nombre: "Gabinete oficina", desc: "Silencioso", precio: 500 },
            psu: { nombre: "Fuente 400W", desc: "Eficiente", precio: 350 }
        },
        medio: {
            cpu: { nombre: "AMD Ryzen 5 5600G", desc: "Programas pesados", precio: 2900 },
            mb: { nombre: "Placa B550M", desc: "Estable", precio: 1800 },
            ram: { nombre: "32 GB DDR4", desc: "Muchas apps abiertas", precio: 1900 },
            gpu: { nombre: "Gráficos Radeon", desc: "Edición ligera", precio: 0 },
            ssd: { nombre: "SSD NVMe 1 TB", desc: "Rápido y amplio", precio: 1500 },
            caja: { nombre: "Gabinete ventilado", desc: "Uso prolongado", precio: 900 },
            psu: { nombre: "Fuente 500W 80+ Bronce", desc: "Confiable todo el día", precio: 750 }
        },
        alto: {
            cpu: { nombre: "AMD Ryzen 7 7700", desc: "Edición profesional", precio: 5200 },
            mb: { nombre: "Placa B650 con WiFi", desc: "Conectividad moderna", precio: 2600 },
            ram: { nombre: "64 GB DDR5", desc: "Proyectos grandes", precio: 3800 },
            gpu: { nombre: "RTX 4060 Ti 16GB", desc: "3D y renderizado", precio: 8500 },
            ssd: { nombre: "SSD NVMe 2 TB", desc: "Almacenamiento masivo", precio: 2800 },
            caja: { nombre: "Gabinete profesional", desc: "Diseño elegante", precio: 1300 },
            psu: { nombre: "Fuente 750W 80+ Oro", desc: "Durabilidad", precio: 1400 }
        }
    }
};

function seleccionarRango(presupuesto) {
    if (presupuesto <= 8000) return "bajo";
    if (presupuesto <= 18000) return "medio";
    return "alto";
}

function mostrarRecomendaciones() {
    const presupuesto = parseInt(document.getElementById("presupuesto").value);
    
    if (!presupuesto || presupuesto < 1000) {
        alert("Por favor ingresa un presupuesto válido (mínimo 1000)");
        return;
    }

    const rango = seleccionarRango(presupuesto);
    const datos = opciones[modo][rango];

    document.getElementById("cantidad-presupuesto").textContent = "$" + presupuesto.toLocaleString("es-MX");

    document.getElementById("nombre-cpu").textContent = datos.cpu.nombre;
    document.getElementById("descripcion-cpu").textContent = datos.cpu.desc;
    document.getElementById("precio-cpu").textContent = "$" + datos.cpu.precio.toLocaleString("es-MX");

    document.getElementById("nombre-mb").textContent = datos.mb.nombre;
    document.getElementById("descripcion-mb").textContent = datos.mb.desc;
    document.getElementById("precio-mb").textContent = "$" + datos.mb.precio.toLocaleString("es-MX");

    document.getElementById("nombre-ram").textContent = datos.ram.nombre;
    document.getElementById("descripcion-ram").textContent = datos.ram.desc;
    document.getElementById("precio-ram").textContent = "$" + datos.ram.precio.toLocaleString("es-MX");

    document.getElementById("nombre-gpu").textContent = datos.gpu.nombre;
    document.getElementById("descripcion-gpu").textContent = datos.gpu.desc;
    document.getElementById("precio-gpu").textContent = datos.gpu.precio === 0 ? "Integrado" : "$" + datos.gpu.precio.toLocaleString("es-MX");

    document.getElementById("nombre-ssd").textContent = datos.ssd.nombre;
    document.getElementById("descripcion-ssd").textContent = datos.ssd.desc;
    document.getElementById("precio-ssd").textContent = "$" + datos.ssd.precio.toLocaleString("es-MX");

    document.getElementById("nombre-case").textContent = datos.caja.nombre;
    document.getElementById("descripcion-case").textContent = datos.caja.desc;
    document.getElementById("precio-case").textContent = "$" + datos.caja.precio.toLocaleString("es-MX");

    document.getElementById("nombre-psu").textContent = datos.psu.nombre;
    document.getElementById("descripcion-psu").textContent = datos.psu.desc;
    document.getElementById("precio-psu").textContent = "$" + datos.psu.precio.toLocaleString("es-MX");

    const total = datos.cpu.precio + datos.mb.precio + datos.ram.precio + 
                  datos.gpu.precio + datos.ssd.precio + datos.caja.precio + datos.psu.precio;
    
    document.getElementById("total").textContent = "$" + total.toLocaleString("es-MX");
    document.getElementById("resultados").style.display = "block";
    document.getElementById("resultados").scrollIntoView({ behavior: "smooth" });
}

function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("resultados").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
}
