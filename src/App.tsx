import { useState, useEffect, ReactNode } from "react";
import { 
  User, 
  BookOpen, 
  Cpu, 
  Wrench, 
  Home, 
  Github, 
  ChevronRight, 
  Monitor, 
  Microchip,
  Calendar,
  Linkedin,
  Layers,
  Zap,
  Database
} from "lucide-react";
import { motion } from "framer-motion";
import logoUNETI from "./assets/LogoUNETI.jpg";
import fotoElton from "./assets/FotoElton.JPG";
import cpu1 from "./assets/foto1.jpg";
import cpu2 from "./assets/foto2.jpg";
import cpu3 from "./assets/foto3.jpeg";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: Home },
    { name: "Autor", href: "#autor", icon: User },
    { name: "Práctica 1", href: "#practica1", icon: Layers },
    { name: "Práctica 2", href: "#practica2", icon: Cpu },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-indigo-100 shadow-lg border border-slate-100">
            <img src={logoUNETI} alt="Logo UNETI" className="w-full h-full object-contain p-1" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-slate-800">
            UNETI - Portafolio
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5"
            >
              <link.icon size={16} />
              {link.name}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2 text-slate-600">
          <Layers size={24} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              Académico 2026-1
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Portafolio Digital <br />
              <span className="text-indigo-600">Elton Isaac Terán Palencia</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl">
              Arquitectura del computador (Informática) <br />
              <span className="font-semibold text-slate-800 underline decoration-indigo-300">Sección 12B-2026-1</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#practica1" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                Explorar Prácticas
              </a>
              <a href="#autor" className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold border border-slate-200 hover:border-slate-300 transition-all transform hover:-translate-y-1">
                Conocer al Autor
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center relative overflow-hidden border border-slate-100">
              <div className="absolute top-0 right-0 p-4">
                <Microchip className="text-indigo-100" size={120} />
              </div>
              {/* Institution Logo */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100">
                  <img src={logoUNETI} alt="Logo UNETI" className="w-full h-full object-contain p-2" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-800">Universidad Nacional Experimental de las Telecomunicaciones e Informática</h3>
                <p className="text-sm text-slate-500">PNF Ingeniería en Informática</p>
                <p className="text-sm text-slate-500 mt-1">Profesor: Ing. Felix Sumoza</p>
              </div>
              {/* Floating tech icons */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-3 bg-white rounded-xl shadow-lg text-indigo-500"
              >
                <Cpu size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-8 p-3 bg-white rounded-xl shadow-lg text-indigo-500"
              >
                <Monitor size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SectionTitle = ({ children, subtitle, id }: { children: ReactNode, subtitle?: string, id?: string }) => (
  <div id={id} className="mb-12 text-center">
    <h2 className="font-display text-4xl font-bold text-slate-900 mb-2">{children}</h2>
    {subtitle && <p className="text-indigo-600 font-medium">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full" />
  </div>
);

const AuthorSection = () => {
  return (
    <section id="autor" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Profesional Cardiopulmonar | Desarrollador Independiente | Estudiante">Mi Perfil</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center gap-10 shadow-sm">

            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-indigo-50 flex-shrink-0 border-4 border-white shadow-xl relative group">
              <img 
                src={fotoElton} 
                alt="Elton Isaac Terán Palencia" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Elton Isaac Terán Palencia</h3>
              <p className="text-indigo-600 font-medium mb-4"></p>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                Licenciado en Tecnología y Terapia Cardiorrespiratoria y Desarrollador de Software Independiente. Mi enfoque profesional es la precisión del área clínica en cardiología y la aplicación de la ingeniería de sistemas para la innovación de la tecnología, especializándome en el desarrollo de videojuegos de alto rendimiento mediante Unreal Engine y C++, así como en la creación de aplicaciones web y móviles escalables.
                <br /><br />
                Actualmente, soy miembro activo de la 'Célula de Desarrollo' del Sistema de Atención Integral al Estudiante y Gestión Académica (SIS-UNETI), donde aporto en la arquitectura y backend del proyecto. Soy estudiante de Ingeniería en Informática en la UNETI, comprometido con la excelencia técnica y la innovación en la arquitectura de computadores.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/eltonisaacteran" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/elton-isaac-teran" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Practice1 = () => {
  // Datos para el organizador gráfico
  const comparisonData = [
    { feature: "Unidad Mínima", classic: "Bit (Estados definidos: 0 o 1)", quantum: "Qubit (Superposición: 0, 1 o ambos simultáneamente)" },
    { feature: "Arquitectura", classic: "Basada en transistores de silicio", classicDetail: "Lógica determinista", quantum: "Circuitos superconductores o trampas de iones", quantumDetail: "Lógica probabilística" },
    { feature: "Funcionamiento", classic: "Procesamiento secuencial. Un camino a la vez.", quantum: "Entrelazamiento cuántico. Múltiples estados simultáneos." },
    { feature: "Almacenamiento", classic: "Magnético (HDD), Estado Sólido (SSD, Flash)", quantum: "Estado cuántico de las partículas (Altamente volátil)" },
    { feature: "Programación", classic: "Lenguajes de alto nivel (C++, Python, Java)", quantum: "Algoritmos específicos (Shor, Grover) y Puertas Cuánticas" },
    { feature: "Dispositivos Clave", classic: "Microprocesadores convencionales (Intel, AMD, ARM)", quantum: "Criostatos (Refrigeración cercana al cero absoluto: -273°C)" },
    { feature: "Modelos Destacados", classic: "NVIDIA H100, Apple M3, AMD EPYC", quantum: "IBM Osprey (433 qubits), Google Sycamore" }
  ];

  return (
    <section id="practica1" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Práctica de Laboratorio 1">Una Mirada al Futuro</SectionTitle>
        
        {/* === Organizador Gráfico: Análisis Comparativo === */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-800">Organizador Gráfico: Computación Clásica vs. Cuántica</h3>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">Análisis comparativo de las arquitecturas que definen el presente y el futuro del procesamiento de datos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Columna Clásica */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Monitor size={100} />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-3">
                <Cpu className="text-slate-600" /> Computadoras Actuales
              </h4>
              <ul className="space-y-5 relative z-10">
                {comparisonData.map((item, idx) => (
                  <li key={`classic-${idx}`} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">{item.feature}</span>
                    <span className="text-slate-800 font-medium">{item.classic}</span>
                    {item.classicDetail && <span className="block text-sm text-slate-500 mt-1">{item.classicDetail}</span>}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="font-bold text-green-800 block mb-1">Ventajas Principales:</span>
                <p className="text-sm text-green-700">Alta fiabilidad, madurez tecnológica, bajo costo de mantenimiento y capacidad para operar a temperatura ambiente.</p>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="font-bold text-red-800 block mb-1">Desventajas / Límites:</span>
                <p className="text-sm text-red-700">Límites físicos en la miniaturización del silicio. Incapacidad para resolver problemas matemáticos hipercomplejos en tiempos razonables.</p>
              </div>
            </div>

            {/* Columna Cuántica */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-indigo-600 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 text-indigo-600">
                <Layers size={100} />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-indigo-700 flex items-center gap-3">
                <Microchip className="text-indigo-500" /> Computadores Cuánticos
              </h4>
              <ul className="space-y-5 relative z-10">
                {comparisonData.map((item, idx) => (
                  <li key={`quantum-${idx}`} className="bg-indigo-50 p-4 rounded-xl border border-indigo-100/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">{item.feature}</span>
                    <span className="text-indigo-900 font-medium">{item.quantum}</span>
                    {item.quantumDetail && <span className="block text-sm text-indigo-600 mt-1">{item.quantumDetail}</span>}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <span className="font-bold text-green-800 block mb-1">Ventajas Principales:</span>
                <p className="text-sm text-green-700">Potencia de cálculo exponencial. Capacidad revolucionaria para la criptografía, simulación molecular y optimización de sistemas masivos.</p>
              </div>
              <div className="mt-4 p-4 bg-red-50 rounded-xl border border-red-100">
                <span className="font-bold text-red-800 block mb-1">Desventajas / Límites:</span>
                <p className="text-sm text-red-700">Alta susceptibilidad al ruido ambiental (decoherencia). Requieren infraestructura criogénica extrema y tienen tasas de error significativas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* === Sección del Algoritmo Cuántico (Infografía de Grover) === */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl mb-12">
          <div className="text-center mb-10">
            <h4 className="font-display font-bold text-3xl mb-4 flex items-center justify-center gap-3 text-slate-900">
              <Microchip className="text-indigo-600" size={32} />
              Infografía: El Algoritmo de Grover
            </h4>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Diseñado en 1996 por Lov Grover, es un algoritmo cuántico que ofrece una aceleración cuadrática para búsquedas en bases de datos no estructuradas.
            </p>
          </div>

          {/* Comparativa de Rendimiento */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
              <h5 className="font-bold text-slate-800 mb-2">Búsqueda Clásica</h5>
              <p className="text-3xl font-mono text-slate-400 mb-2 font-light">O(N)</p>
              <p className="text-sm text-slate-500">Revisa registro por registro secuencialmente.</p>
            </div>
            <div className="flex-1 bg-indigo-50 p-6 rounded-2xl border border-indigo-200 text-center relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-indigo-100/50">
                <Zap size={100} />
              </div>
              <h5 className="font-bold text-indigo-900 mb-2 relative z-10">Búsqueda Cuántica (Grover)</h5>
              <p className="text-3xl font-mono text-indigo-600 mb-2 font-bold relative z-10">O(√N)</p>
              <p className="text-sm text-indigo-700 relative z-10">Amplifica la probabilidad de la respuesta correcta.</p>
            </div>
          </div>

          {/* Pasos del Funcionamiento (Línea de tiempo) */}
          <h5 className="font-bold text-center text-xl text-slate-800 mb-6 border-b border-slate-100 pb-2">Funcionamiento en 3 Fases</h5>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Conector visual (solo desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-indigo-100 -translate-y-1/2 z-0"></div>
            
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm relative z-10 hover:border-indigo-300 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-sm">1</div>
              <h6 className="font-bold text-center text-slate-800 mb-2">Superposición Inicial</h6>
              <p className="text-sm text-slate-600 text-center">El sistema se inicializa creando una superposición equitativa de todos los estados (registros) posibles simultáneamente usando puertas Hadamard.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm relative z-10 hover:border-indigo-400 transition-colors">
              <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-md">2</div>
              <h6 className="font-bold text-center text-slate-800 mb-2">El Oráculo Cuántico</h6>
              <p className="text-sm text-slate-600 text-center">Una función "Oráculo" evalúa todos los estados. Al encontrar el registro correcto, invierte su fase (lo marca negativamente), separándolo del resto.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm relative z-10 hover:border-indigo-600 transition-colors">
              <div className="w-12 h-12 bg-indigo-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto shadow-lg">3</div>
              <h6 className="font-bold text-center text-slate-800 mb-2">Difusión (Amplificación)</h6>
              <p className="text-sm text-slate-600 text-center">El operador de difusión aumenta la probabilidad (amplitud) del estado marcado y reduce la de los demás. Al medir, colapsa en la respuesta correcta.</p>
            </div>
          </div>

          {/* Aplicación Práctica */}
          <div className="mt-10 bg-slate-900 rounded-2xl p-6 text-white flex items-center gap-6 shadow-md">
            <div className="p-4 bg-indigo-500/20 rounded-xl text-indigo-400 hidden sm:block">
              <Database size={40} />
            </div>
            <div>
              <h6 className="font-bold text-lg mb-1">Aplicación Práctica en la Industria</h6>
              <p className="text-slate-300 text-sm leading-relaxed">
                Fundamental para la <strong>ciberseguridad</strong> (inversión de funciones hash criptográficas), resolución de problemas complejos y búsqueda ultra rápida en volúmenes masivos de datos no clasificados donde los índices tradicionales de bases de datos relacionales no son aplicables.
              </p>
            </div>
          </div>
        </div>

        {/* === Reflexión === */}
        <div className="bg-indigo-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Calendar size={120} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">Reflexión Final</span>
            </div>
            <h3 className="text-3xl font-bold mb-6">Aprendizaje sobre el Futuro de la Arquitectura</h3>
            <p className="text-indigo-100 leading-relaxed mb-6 text-lg text-justify">
              Al estructurar esta comparativa, comprendí que la transición hacia la computación cuántica no busca reemplazar a la computación clásica, sino complementarla. Como desarrollador, visualizar que pasaremos de una lógica determinista (transistores de silicio) a una probabilística (superposición de qubits) cambia totalmente el paradigma de cómo se deberán programar las arquitecturas de software del futuro para resolver problemas de optimización hipercomplejos.
            </p>
            <div className="flex items-center justify-between border-t border-indigo-700/50 pt-6 mt-6">
              <div className="flex items-center gap-2 text-indigo-300 font-mono text-sm">
                <Calendar size={16} />
                <span>Fecha de creación: 22 de Abril, 2026</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const Practice2 = () => {
  return (
    <section id="practica2" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Práctica de Laboratorio 2">Introducción a la Arquitectura del Computador</SectionTitle>
        
        <div className="max-w-5xl mx-auto space-y-32"> {/* Espaciado grande entre actividades */}

          {/* =========================================
              ACTIVIDAD 1: ENSAYO 
          ========================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <BookOpen className="text-indigo-600" size={32} />
              1. Futuro de la Ingeniería en Informática
            </h3>
            
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50 z-0"></div>
              <div className="relative z-10">
                <h4 className="font-display font-bold text-2xl mb-6 text-slate-900 leading-tight">
                  Sinergia Cuántica: <br/> 
                  <span className="text-indigo-600">El Latido de las Nuevas Arquitecturas en la Ingeniería del Mañana</span>
                </h4>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
                  <p>
                    La ingeniería en informática se encuentra en un punto de inflexión histórico. Durante décadas, la Ley de Moore dictó el ritmo de la innovación, empujando los límites físicos de los transistores de silicio. Sin embargo, el futuro de la arquitectura del computador ya no depende exclusivamente de la miniaturización, sino de un cambio de paradigma radical hacia modelos híbridos. La irrupción de la computación cuántica, los procesadores neuromórficos y las unidades de procesamiento tensorial (TPU) dedicadas a la inteligencia artificial están redefiniendo lo que significa ser un ingeniero. Ya no seremos simples codificadores de instrucciones secuenciales, sino orquestadores de ecosistemas de hardware altamente especializados, donde la lógica determinista convivirá con la probabilidad cuántica.
                  </p>
                  <p>
                    Esta evolución arquitectónica transformará drásticamente industrias que dependen del alto rendimiento y la precisión absoluta. En el desarrollo de software complejo, como la creación de lógicas interactivas en motores gráficos de nueva generación o la estructuración de infraestructuras backend de microservicios masivos, el entendimiento profundo del manejo de memoria y el paralelismo a nivel de hardware será el diferenciador entre un sistema eficiente y uno obsoleto. Asimismo, en áreas de misión crítica, como la tecnología clínica y la monitorización cardiorrespiratoria, la capacidad de procesar terabytes de datos biométricos en tiempo real exigirá arquitecturas perimetrales (Edge Computing) que eliminen la latencia, garantizando respuestas inmediatas a través de la exactitud de los datos. El ingeniero del mañana deberá diseñar software que no solo se ejecute sobre un sistema operativo, sino que se adapte dinámicamente a la topología física del equipo.
                  </p>
                  <p>
                    En conclusión, el futuro de la ingeniería informática exige una visión holística. Las nuevas tecnologías nos obligan a abandonar la abstracción extrema que, en años recientes, nos alejó de la máquina, para volver a comprender íntimamente los componentes físicos. La sinergia entre el procesamiento clásico, la aceleración neuronal y el entrelazamiento cuántico será el motor de la próxima revolución tecnológica. Nuestro mayor desafío no será únicamente dominar nuevos frameworks o lenguajes de programación, sino reimaginar la arquitectura de las soluciones para aprovechar un hardware que, finalmente, está comenzando a simular la eficiencia matemática de la naturaleza misma.
                  </p>
                </div>
              </div>
            </div>
            {/* Reflexión 1 */}
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex gap-4 items-start">
              <Calendar className="text-indigo-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="font-bold text-indigo-900 mb-2">Reflexión</h5>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Redactar este ensayo consolidó mi comprensión de que el software moderno, desde un microservicio en NestJS hasta mecánicas en C++, está irremediablemente atado a las capacidades físicas del procesador y la memoria.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              ACTIVIDAD 2: IDENTIFICACIÓN CPU
          ========================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <Cpu className="text-indigo-600" size={32} />
              2. Identificación de la CPU
            </h3>

            <p className="text-slate-600 mb-6">Investigación de campo utilizando herramientas de diagnóstico (CPU-Z en Windows y Fastfetch en entorno Linux/Fedora) para identificar procesadores físicos y sus arquitecturas.</p>

            {/* Grid de Fotos / Capturas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Equipo 1 */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video md:aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all">
                <img src={cpu1} alt="Evidencia CPU 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-slate-700">
                    Muestra 1: Desktop
                  </span>
                </div>
              </div>
              {/* Equipo 2 */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video md:aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all">
                <img src={cpu2} alt="Evidencia CPU 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-slate-700">
                    Muestra 2: Legion 5
                  </span>
                </div>
              </div>
              {/* Equipo 3 */}
              <div className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video md:aspect-square flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all">
                <img src={cpu3} alt="Evidencia CPU 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-slate-700">
                    Muestra 3: Laptop Ligera
                  </span>
                </div>
              </div>
            </div>

            {/* Tabla Comparativa CPU (Tus Datos Reales) */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-8 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">Modelo</th>
                    <th className="px-6 py-4 text-sm font-semibold">Marca/Gen</th>
                    <th className="px-6 py-4 text-sm font-semibold">Zócalo (Socket)</th>
                    <th className="px-6 py-4 text-sm font-semibold">Características y Cuidado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Fila 1 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">Ryzen 7 3700X</div>
                      <div className="text-xs text-slate-500">PC de Escritorio</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded block w-max mb-1">AMD</span>
                      <span className="text-xs text-slate-600">Zen 2 (Matisse)</span>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500 font-bold">AM4 (1331)</td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Specs:</strong> 8 Núcleos / 16 Hilos, 65W TDP, 7nm.<br/>
                      <strong>Cuidado:</strong> CPU de escritorio de alto rendimiento. Requiere recambio de pasta térmica anual and mantener el chasis libre de polvo para evitar la obstrucción del disipador.
                    </td>
                  </tr>
                  {/* Fila 2 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">Ryzen 7 4800H</div>
                      <div className="text-xs text-slate-500">Lenovo Legion 5 (Host)</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded block w-max mb-1">AMD</span>
                      <span className="text-xs text-slate-600">Zen 2 (Renoir)</span>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500 font-bold">FP6 (BGA)</td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Specs:</strong> 8 Núcleos / 16 Hilos, 2.90 GHz Base.<br/>
                      <strong>Cuidado:</strong> Procesador móvil de alto voltaje soldado a la placa (BGA). Para cargas pesadas (Unreal Engine / Docker), es vital usar bases refrigerantes y monitorear el *thermal throttling*.
                    </td>
                  </tr>
                  {/* Fila 3 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">Ryzen 5 5500U</div>
                      <div className="text-xs text-slate-500">Laptop Ultraportátil</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded block w-max mb-1">AMD</span>
                      <span className="text-xs text-slate-600">Zen 2 (Lucienne)</span>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500 font-bold">FP6 (BGA)</td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Specs:</strong> 6 Núcleos / 12 Hilos, 15W TDP.<br/>
                      <strong>Cuidado:</strong> Diseñado para eficiencia energética ("U" de Ultra-low power). Evitar usar el equipo sobre superficies blandas (camas, telas) para no ahogar las tomas de aire inferiores.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Reflexión 2 */}
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex gap-4 items-start mb-16">
              <Calendar className="text-indigo-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="font-bold text-indigo-900 mb-2">Reflexión</h5>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Extraer estos datos reales me permitió constatar cómo una misma arquitectura base (Zen 2 de AMD) se adapta a diferentes necesidades físicas: desde el zócalo modular AM4 para configuraciones de escritorio robustas, hasta los zócalos BGA soldados tipo FP6 diseñados para empaquetar rendimiento en chasis portátiles. Comprender las restricciones de TDP (65W vs 15W) es clave para entender por qué las laptops requieren un enfoque térmico mucho más delicado.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              ACTIVIDAD 3: HERRAMIENTAS DE ARQUITECTURA
          ========================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <Wrench className="text-indigo-600" size={32} />
              3. Herramientas de Arquitectura (Hardware & Software)
            </h3>

            <p className="text-slate-600 mb-10 text-justify">
              El mantenimiento y análisis de la arquitectura de un computador requiere un arsenal balanceado. Las herramientas de <strong>Hardware</strong> permiten la intervención física segura en los componentes, mientras que las de <strong>Software</strong> actúan como una capa de introspección para monitorear el comportamiento lógico y eléctrico de los circuitos integrados.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Bloque Hardware */}
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm">H</div>
                  Arsenal de Hardware
                </h4>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 border-b border-slate-100">
                      <tr>
                        <th className="px-4 py-3 text-xs font-bold uppercase text-slate-500">Herramienta</th>
                        <th className="px-4 py-3 text-xs font-bold uppercase text-slate-500">Aplicación Técnica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Destornilladores de Precisión</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Philips / Torx / Hex</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Apertura segura del chasis y desensamble de disipadores. El uso de puntas magnetizadas previene la pérdida de tornillos en zonas críticas de la placa base.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Kit de Desmontaje (Spudgers)</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Palancas Antiestáticas</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Herramientas de nailon o plástico diseñadas para separar conectores ZIF y cables planos sin rayar las pistas de cobre o causar cortocircuitos.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Pulsera Antiestática (ESD)</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Protección Activa</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Ecualiza el potencial eléctrico entre el técnico y el equipo, drenando la carga estática a tierra para proteger los MOSFETs y puertas lógicas sensibles.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Pasta Térmica de Alto Rendimiento</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Material de Interfaz</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Rellena las imperfecciones microscópicas entre el IHS de la CPU y la base del disipador, optimizando la transferencia de calor y evitando el thermal throttling.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bloque Software */}
              <div className="space-y-6">
                <h4 className="font-bold text-xl text-indigo-700 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm">S</div>
                  Arsenal de Software
                </h4>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-indigo-50 border-b border-indigo-100">
                      <tr>
                        <th className="px-4 py-3 text-xs font-bold uppercase text-indigo-400">Software</th>
                        <th className="px-4 py-3 text-xs font-bold uppercase text-indigo-400">Función Analítica</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">CPU-Z / HWiNFO64</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Windows Diagnostic</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Lectura directa de los registros de la CPU. Permite verificar voltajes de núcleo (Vcore), latencias de RAM y la topología de los niveles de caché (L1/L2/L3).
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Fastfetch / Neofetch</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Linux CLI</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Herramientas de terminal para la extracción rápida de metadatos del hardware, incluyendo la versión del Kernel, arquitectura de CPU y consumo de memoria activa.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">MemTest86+</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Integridad de Memoria</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Software de bajo nivel que opera fuera del SO para testear cada dirección de memoria RAM, detectando errores de direccionamiento o fallos en las celdas de memoria.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-bold text-slate-800 text-sm">Cinebench / Prime95</div>
                          <span className="text-[10px] text-indigo-600 font-bold uppercase">Stress Testing</span>
                        </td>
                        <td className="px-4 py-4 text-xs text-slate-600 leading-relaxed">
                          Somete a la arquitectura a cargas de trabajo extremas para validar la estabilidad del sistema y la eficiencia del diseño térmico bajo máxima demanda.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Reflexión 3 */}
            <div className="mt-12 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex gap-4 items-start">
              <Calendar className="text-indigo-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="font-bold text-indigo-900 mb-2">Reflexión Individual</h5>
                <p className="text-indigo-800 text-sm leading-relaxed text-justify">
                  El dominio de estas herramientas marca la diferencia entre un reparador empírico y un ingeniero. Mientras que los destornilladores y la pulsera ESD garantizan la integridad física de los componentes, el software de diagnóstico avanzado nos permite "escuchar" el latido electrónico de la arquitectura, facilitando un mantenimiento preventivo basado en datos reales de funcionamiento.
                </p>
              </div>
            </div>
          </div>

          {/* === Reflexión Final de la Práctica 2 === */}
          <div className="mt-24 bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Cpu size={120} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-4"> 
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-300">Reflexión Final</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-white">De la Teoría a la Introspección del Hardware</h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg text-justify">
                Esta práctica ha sido fundamental para unificar mi visión estratégica sobre el futuro de la informática con la realidad técnica del hardware actual. Al analizar la arquitectura de mi propio equipo y dominar las herramientas de diagnóstico, he comprendido que la eficiencia del software no es una abstracción, sino el resultado directo de optimizar el diálogo con los componentes físicos. Identificar sockets, gestionar el TDP y entender el papel crítico de las herramientas de precisión me prepara como ingeniero para diseñar soluciones robustas que aprovechen al máximo la infraestructura subyacente.
              </p>
              <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm font-bold">
                  <Calendar size={16} />
                  <span>Fecha de Finalización: 22 de Abril, 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 py-12 text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center overflow-hidden shadow-sm">
              <img src={logoUNETI} alt="Logo UNETI" className="w-full h-full object-contain p-0.5" />
            </div>
            <span className="font-display font-bold text-xl text-white">UNETI - Portafolio</span>
          </div>
          <p className="text-slate-400 text-sm text-center md:text-left">
            Portafolio de Arquitectura del Computador. <br />
            © {new Date().getFullYear()} - Elton Isaac Terán Palencia | Sección 12B.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="https://github.com/eltonisaacteran" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/elton-isaac-teran" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-xs text-slate-500">
            Construido con React, Tailwind CSS y la precisión de la ingeniería.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AuthorSection />
        <Practice1 />
        <Practice2 />
      </main>
      <Footer />
    </div>
  );
}
