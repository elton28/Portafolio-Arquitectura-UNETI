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
  Database,
  Video,
  Play,
  CheckCircle,
  ShieldAlert,
  Terminal,
  Settings,
  Server
} from "lucide-react";
import { motion } from "framer-motion";
import logoUNETI from "./assets/LogoUNETI.jpg";
import fotoElton from "./assets/FotoElton.JPG";
import cpu1 from "./assets/foto1.jpg";
import cpu2 from "./assets/foto2.jpg";
import cpu3 from "./assets/foto3.jpeg";
import MemoriaMP4 from "./assets/Memoria.mp4";
import DispositivosMP4 from "./assets/Dispositivos.mp4";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { name: "Práctica 3", href: "#practica3", icon: Wrench },
    { name: "Práctica 4", href: "#practica4", icon: Terminal },
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

        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Layers size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md">
          <div className="container mx-auto px-6 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5"
                onClick={() => setIsMenuOpen(false)}
              >
                <link.icon size={16} />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
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
                <a href="https://github.com/elton28/Portafolio-Arquitectura-UNETI" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all">
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

        <div className="max-w-5xl mx-auto space-y-32"> {/* Espaciado grande entre actividades */}

          {/* =========================================
              ACTIVIDAD 1: ENSAYO 
          ========================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3 mt-12">
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

const Practice2 = () => {
  return (
    <section id="practica2" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Práctica de Laboratorio 2">Memoria y Funcionamiento del Computador</SectionTitle>
        
        <div className="max-w-5xl mx-auto space-y-20">

          {/* === Memoria y jerarquía de almacenamiento === */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <Database className="text-indigo-600" size={32} />
              Memoria y jerarquía de almacenamiento
            </h3>

            {/* --- 1. Identificación de Memoria --- */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50 z-0"></div>
              <div className="relative z-10">
                <h4 className="font-display font-bold text-2xl mb-6 text-slate-900 leading-tight">
                  1. Identificación de Memoria
                </h4>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
                  <p>
                    En el siguiente video se desmonta una computadora para identificar las diferentes memorias del computador y describir brevemente su función.
                  </p>
                  <video className="rounded-xl max-w-md w-full mx-auto" controls>
                    <source src={MemoriaMP4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* === Funcionamiento del Computador === */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <Cpu className="text-indigo-600" size={32} />
              Funcionamiento del Computador
            </h3>

            {/* --- 1. Comparación de especificaciones --- */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-8 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">Modelo</th>
                    <th className="px-6 py-4 text-sm font-semibold">CPU</th>
                    <th className="px-6 py-4 text-sm font-semibold">Memoria</th>
                    <th className="px-6 py-4 text-sm font-semibold">Almacenamiento</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {/* Fila 1 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">PC de Escritorio</div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Ryzen 7 3700X</strong><br/>8 Núcleos / 16 Hilos, 65W TDP, 7nm.
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      32GB DDR4 3200MHz
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      1TB NVMe SSD
                    </td>
                  </tr>
                  {/* Fila 2 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">Lenovo Legion 5</div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Ryzen 7 4800H</strong><br/>8 Núcleos / 16 Hilos, 2.90 GHz Base.
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      16GB DDR4 3200MHz
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      512GB NVMe SSD
                    </td>
                  </tr>
                  {/* Fila 3 */}
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-800">Laptop Ultraportátil</div>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      <strong>Ryzen 5 5500U</strong><br/>6 Núcleos / 12 Hilos, 15W TDP.
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      8GB DDR4 3200MHz
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 leading-relaxed">
                      256GB NVMe SSD
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-4 bg-indigo-50 text-sm text-indigo-800">
                <strong>Diferencias encontradas:</strong> La PC de escritorio tiene el procesador más potente y la mayor cantidad de memoria y almacenamiento, ideal para tareas intensivas. La Lenovo Legion 5 es un equipo balanceado para juegos y trabajo pesado. La laptop ultraportátil es la más eficiente en consumo de energía y portabilidad, a costa de un menor rendimiento.
              </div>
            </div>

            {/* --- 2. Conexión de dispositivos --- */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full opacity-50 z-0"></div>
              <div className="relative z-10">
                <h4 className="font-display font-bold text-2xl mb-6 text-slate-900 leading-tight">
                  2. Conexión de dispositivos
                </h4>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-justify">
                  <p>
                    En el siguiente video se conectan dos dispositivos de entrada y dos de salida a un computador, describiendo los cables y conectores utilizados.
                  </p>
                  <video className="rounded-xl max-w-md w-full mx-auto" controls>
                    <source src={DispositivosMP4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Practice3 = () => {
  const steps = [
    {
      title: "1. Preparación y Seguridad ESD",
      phase: "Desarmado",
      desc: "Desconexión de la fuente de poder del fluido eléctrico. Colocación de la pulsera antiestática (ESD) conectada a un punto de tierra del chasis para evitar dañar componentes sensibles como MOSFETs.",
      icon: ShieldAlert,
      color: "border-amber-200 bg-amber-50 text-amber-800"
    },
    {
      title: "2. Apertura de Chasis y Desconexión",
      phase: "Desarmado",
      desc: "Apertura de las tapas laterales del gabinete. Desconexión sistemática de los cables de alimentación (ATX de 24 pines, EPS de 8 pines) y cables de datos (SATA, conectores de panel frontal).",
      icon: Layers,
      color: "border-slate-200 bg-slate-50 text-slate-800"
    },
    {
      title: "3. Extracción de Módulos (RAM y GPU)",
      phase: "Desarmado",
      desc: "Retiro de la tarjeta gráfica (GPU) liberando el seguro de la ranura PCIe. Extracción de los módulos de memoria RAM abriendo los clips de retención de las ranuras DIMM.",
      icon: Database,
      color: "border-indigo-100 bg-indigo-50/50 text-indigo-800"
    },
    {
      title: "4. Desmontaje de Disipador y CPU",
      phase: "Desarmado",
      desc: "Aflojamiento en cruz de los tornillos del disipador para liberar la presión uniformemente. Extracción cuidadosa del procesador (CPU) levantando la palanca de retención del zócalo (Socket).",
      icon: Cpu,
      color: "border-rose-100 bg-rose-50/30 text-rose-800"
    },
    {
      title: "5. Limpieza e Inspección Visual",
      phase: "Mantenimiento",
      desc: "Limpieza de residuos de la pasta térmica antigua en la CPU y disipador usando alcohol isopropílico. Inspección de condensadores e integridad física del socket.",
      icon: Wrench,
      color: "border-cyan-100 bg-cyan-50/30 text-cyan-800"
    },
    {
      title: "6. Montaje del Procesador y Pasta Térmica",
      phase: "Ensamblado",
      desc: "Inserción del procesador alineando la marca triangular con el zócalo. Bloqueo de la palanca. Aplicación de una gota central de pasta térmica de alta conductividad para transferir calor eficientemente.",
      icon: Zap,
      color: "border-yellow-100 bg-yellow-50/30 text-yellow-800"
    },
    {
      title: "7. Instalación de Disipador, RAM y GPU",
      phase: "Ensamblado",
      desc: "Fijación del disipador en cruz para presión equilibrada. Colocación de los módulos de memoria RAM en canal dual (DIMM 2 y 4). Inserción y atornillado de la tarjeta gráfica en el slot PCIe principal.",
      icon: Monitor,
      color: "border-blue-100 bg-blue-50/30 text-blue-800"
    },
    {
      title: "8. Conexión de Cables e Inicio (POST)",
      phase: "Ensamblado",
      desc: "Reconexión de todos los cables (fuente, ventiladores, panel frontal). Cierre del chasis y conexión a la red eléctrica. Encendido para validar que el sistema pasa el POST (Power-On Self-Test) y entra a la BIOS.",
      icon: CheckCircle,
      color: "border-emerald-200 bg-emerald-50 text-emerald-800"
    }
  ];

  const componentsList = [
    { name: "Procesador (CPU)", desc: "El cerebro lógico de la máquina, procesa los hilos de ejecución de software.", location: "Zócalo de la placa base (Socket)" },
    { name: "Placa Base (Motherboard)", desc: "El sistema nervioso que interconecta todos los módulos y chips.", location: "Atornillado al chasis mediante separadores" },
    { name: "Memoria RAM", desc: "Almacenamiento volátil ultra rápido para los datos de programas activos.", location: "Ranuras DIMM" },
    { name: "Disipador / Cooler", desc: "Evacúa el calor térmico generado por la CPU para evitar sobrecalentamiento.", location: "Montado encima de la CPU con interfaz térmica" },
    { name: "Tarjeta de Video (GPU)", desc: "Procesador dedicado a cálculos matemáticos paralelos y renderizado gráfico.", location: "Ranura PCIe x16" },
    { name: "Fuente de Poder (PSU)", desc: "Transforma corriente alterna (AC) en continua (DC) regulada para los componentes.", location: "Compartimento inferior/superior del gabinete" },
    { name: "Unidad SSD / HDD", desc: "Almacenamiento secundario persistente del sistema operativo y archivos.", location: "Bahías dedicadas o puertos M.2 NVMe" },
    { name: "Gabinete / Chasis", desc: "Estructura física que protege y organiza los componentes internos, canalizando el flujo de aire.", location: "Carcasa exterior" }
  ];

  return (
    <section id="practica3" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Práctica de Laboratorio 3">Ensamblaje del Computador</SectionTitle>
        
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* --- Introducción a la Práctica --- */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                Descripción General
              </span>
              <h3 className="font-display font-bold text-3xl text-slate-900 mb-6 leading-tight">
                Integración de Componentes de Hardware
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify mb-6">
                El ensamblaje físico del hardware representa el paso en el cual la arquitectura de un computador pasa de ser un plano lógico de bloques y buses a convertirse en un sistema de procesamiento funcional. Esta práctica de laboratorio documenta en formato de video todo el proceso de desmontaje y reensamblaje de un computador. El objetivo es identificar la topología interna del equipo, verificar la conexión de las interfaces físicas de comunicación y alimentación, y aplicar las correctas directrices de mantenimiento preventivo y seguridad eléctrica.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Objetivo Físico</span>
                  <p className="text-xs text-slate-500">Asegurar la colocación y torque térmico idóneo para evitar estrangulamiento por calor.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Medida Crítica</span>
                  <p className="text-xs text-slate-500">Manejo estricto de tierras y protección ESD durante todo el proceso de interacción física.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Validación Final</span>
                  <p className="text-xs text-slate-500">Comprobación del paso del Power-On Self-Test (POST) y lectura de parámetros en BIOS.</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Video de Ensamblaje --- */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
            <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Video size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Registro en Video del Laboratorio</h4>
                  <p className="text-xs text-slate-400">Desensamble y Ensamble Completo Paso a Paso</p>
                </div>
              </div>
              <span className="hidden sm:inline-block bg-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                YouTube
              </span>
            </div>
            
            <div className="p-8 bg-slate-950 flex flex-col items-center justify-center">
              <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-inner border border-slate-800 bg-black relative">
                <iframe 
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/vP50Tqa4xSQ"
                  title="Práctica de Laboratorio 3: Ensamblaje del computador"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-slate-400 text-xs text-center mt-6 max-w-xl">
                Nota: El video muestra la manipulación física de los componentes, la extracción de memorias y tarjetas, la colocación térmica de la CPU y la reconexión total del sistema.
              </p>
            </div>
          </div>

          {/* --- Cronología del Proceso --- */}
          <div>
            <div className="text-center mb-10">
              <h4 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Fases del Desmontaje y Reensamblaje
              </h4>
              <p className="text-slate-600 max-w-xl mx-auto">
                Estructura metódica recomendada para desarmar y volver a integrar el hardware sin comprometer la integridad eléctrica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 transition-all flex gap-4 ${step.color} hover:shadow-md hover:-translate-y-0.5 duration-200`}>
                  <div className="flex-shrink-0 mt-1">
                    <step.icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white/60 border border-current/20">
                        {step.phase}
                      </span>
                      <h5 className="font-bold text-slate-800 text-base">{step.title}</h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Tabla de Componentes --- */}
          <div>
            <div className="text-center mb-10">
              <h4 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Arquitectura Física: Checklist de Componentes
              </h4>
              <p className="text-slate-600 max-w-xl mx-auto">
                Resumen de los componentes principales identificados y su función crítica dentro de la integración del sistema.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold w-1/4">Componente</th>
                    <th className="px-6 py-4 text-sm font-semibold w-1/2">Función Arquitectónica</th>
                    <th className="px-6 py-4 text-sm font-semibold w-1/4">Ubicación / Interfaz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {componentsList.map((comp, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-800">{comp.name}</td>
                      <td className="px-6 py-4 text-slate-600 leading-relaxed text-xs">{comp.desc}</td>
                      <td className="px-6 py-4 font-mono text-xs text-indigo-600 font-semibold">{comp.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* --- Reflexión Final Práctica 3 --- */}
          <div className="bg-indigo-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-indigo-850">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Wrench size={120} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">Reflexión Profesional</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">El Impacto de la Precisión en el Hardware</h3>
              <p className="text-indigo-100 leading-relaxed mb-6 text-lg text-justify">
                Esta práctica de desarmado y armado de un computador consolida el entendimiento empírico de la arquitectura. En informática, a menudo interactuamos con el software desde niveles muy altos de abstracción. Sin embargo, presenciar físicamente cómo la presión del disipador, la dosificación de la pasta térmica y el encaje exacto de los buses lógicos (como los pines de la RAM o las líneas PCIe) determinan la estabilidad total del sistema nos devuelve a la realidad de la ingeniería básica: el mejor software del mundo fallará si el hardware subyacente presenta micro-cortes por descargas electroestáticas (ESD) o estrangulamiento térmico por un cooler mal ajustado. Ensamblar e inspeccionar cada parte fomenta la disciplina técnica indispensable para el desarrollo de soluciones óptimas.
              </p>
              <div className="flex items-center justify-between border-t border-indigo-700/50 pt-6 mt-6">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-sm">
                  <Calendar size={16} />
                  <span>Fecha de creación: 15 de Junio, 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Practice3Software = () => {
  const steps = [
    {
      title: "1. Descarga de Recursos y Preparación",
      phase: "Fase Inicial",
      desc: "Descarga del instalador de Oracle VM VirtualBox y su respectivo Extension Pack desde la web oficial. Asimismo, descarga de la imagen ISO de Fedora Workstation de 64 bits.",
      icon: Layers,
      color: "border-indigo-100 bg-indigo-50/30 text-indigo-800"
    },
    {
      title: "2. Instalación de VirtualBox y Extension Pack",
      phase: "Fase Inicial",
      desc: "Instalación del hipervisor VirtualBox en el sistema operativo anfitrión (Windows). Registro del Extension Pack para desbloquear compatibilidad de puertos USB 2.0/3.0, carpetas compartidas y soporte avanzado de hardware.",
      icon: Settings,
      color: "border-slate-200 bg-slate-50 text-slate-800"
    },
    {
      title: "3. Creación y Alojamiento de la VM",
      phase: "Configuración",
      desc: "Configuración de una nueva máquina virtual llamada 'Virtual Machine Fedora'. Selección de un directorio de almacenamiento en una unidad secundaria para no saturar el disco C: principal.",
      icon: Database,
      color: "border-amber-200 bg-amber-50 text-amber-800"
    },
    {
      title: "4. Asignación de Recursos de Hardware",
      phase: "Configuración",
      desc: "Reserva de recursos lógicos: 8 GB de memoria RAM y un CPU de 4 núcleos virtuales para garantizar una emulación fluida del entorno gráfico GNOME. Espacio en disco de 25 GB.",
      icon: Cpu,
      color: "border-rose-100 bg-rose-50/30 text-rose-800"
    },
    {
      title: "5. Arranque e Instalación del Sistema Operativo",
      phase: "Instalación",
      desc: "Inicio de la máquina virtual con la ISO montada. Selección de idioma (Español de Venezuela) en el instalador gráfico Anaconda y asignación del disco virtual de 25 GB, iniciando la copia del sistema operativo.",
      icon: Play,
      color: "border-cyan-100 bg-cyan-50/30 text-cyan-800"
    },
    {
      title: "6. Desmontaje de la Imagen ISO",
      phase: "Optimización",
      desc: "Apagado completo de la VM tras finalizar la instalación. Desmontaje manual de la imagen ISO en las opciones de almacenamiento de VirtualBox para evitar que la máquina arranque nuevamente desde el instalador en vivo.",
      icon: ShieldAlert,
      color: "border-yellow-100 bg-yellow-50/30 text-yellow-800"
    },
    {
      title: "7. Post-instalación y Creación de Usuario",
      phase: "Finalización",
      desc: "Reinicio de la máquina virtual desde el disco duro. Configuración de distribución de teclado (Español de Windows), creación de credenciales de usuario con contraseña y omisión del tour introductorio de GNOME.",
      icon: CheckCircle,
      color: "border-emerald-200 bg-emerald-50 text-emerald-800"
    },
    {
      title: "8. Validación con Fastfetch",
      phase: "Verificación",
      desc: "Apertura de la terminal de Fedora e instalación/ejecución del comando 'fastfetch' para extraer los datos técnicos del sistema operativo virtualizado y la arquitectura emulada de hardware.",
      icon: Terminal,
      color: "border-blue-100 bg-blue-50/30 text-blue-800"
    }
  ];

  const vmSpecs = [
    { label: "Hipervisor", value: "Oracle VM VirtualBox v7.x", icon: Server },
    { label: "Sistema Operativo Huésped", value: "Fedora Workstation 40 (64-bit)", icon: Monitor },
    { label: "Memoria RAM Asignada", value: "8.0 GB (8192 MB)", icon: Database },
    { label: "Procesador Virtual (vCPUs)", value: "4 Núcleos Lógicos", icon: Cpu },
    { label: "Almacenamiento Virtual", value: "25 GB VDI (Dinámico)", icon: Layers },
    { label: "Paquete de Extensiones", value: "VirtualBox Extension Pack (Instalado)", icon: Wrench },
    { label: "Interfaz de Red", value: "Adaptador NAT (Red interna con salida externa)", icon: CheckCircle },
    { label: "Entorno de Escritorio", value: "GNOME Desktop (Wayland)", icon: User }
  ];

  const challenges = [
    {
      title: "Bucle de Arranque del Instalador (Boot Loop)",
      problem: "Al completar la instalación y reiniciar la máquina virtual, el sistema volvía a iniciar el instalador 'Live ISO' de Fedora de forma cíclica.",
      solution: "Se apagó la VM y se desmontó/retiró manualmente la imagen ISO del lector de CD/DVD virtual en la configuración de almacenamiento de VirtualBox, permitiendo que iniciara desde el disco de 25GB.",
      status: "Solucionado"
    },
    {
      title: "Rendimiento y Compatibilidad de Hardware",
      problem: "Rendimiento lento del entorno gráfico GNOME y falta de soporte para puertos USB rápidos o redimensionamiento dinámico de pantalla.",
      solution: "Se instaló el 'VirtualBox Extension Pack' en el sistema anfitrión y se asignó un perfil de hardware adecuado (8GB de RAM y 4 núcleos de CPU), logrando una emulación fluida del sistema operativo.",
      status: "Solucionado"
    },
    {
      title: "Limitación de Espacio en el Disco Anfitrión (C:)",
      problem: "El disco de arranque del sistema principal presentaba poco espacio libre para soportar el disco virtual (.vdi) del sistema operativo huésped.",
      solution: "Se redefinió el directorio predeterminado de almacenamiento de VirtualBox hacia una unidad de disco secundaria dedicada, guardando allí todos los datos sin afectar el disco del sistema principal.",
      status: "Solucionado"
    }
  ];

  return (
    <section id="practica4" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Práctica de Laboratorio 4">Sistemas Operativos</SectionTitle>
        
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* --- Introducción a la Práctica --- */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                Descripción General
              </span>
              <h3 className="font-display font-bold text-3xl text-slate-900 mb-6 leading-tight">
                Instalación y Configuración de Sistemas Operativos en Entornos Virtualizados
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify mb-6">
                La virtualización es una tecnología pilar en la arquitectura del computador moderna, permitiendo la coexistencia y ejecución de múltiples entornos lógicos independientes (sistemas operativos huéspedes) sobre un único hardware físico anfitrión. En esta práctica de laboratorio, se documenta paso a paso la instalación del hipervisor Oracle VM VirtualBox en un sistema anfitrión y la configuración de una máquina virtual para alojar el sistema operativo Fedora Workstation. A través de este proceso se analizan los mecanismos de abstracción de hardware, la gestión de memoria virtual, la partición lógica del almacenamiento y la configuración del kernel.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Hipervisor Lógico</span>
                  <p className="text-xs text-slate-500">Virtualización tipo 2 utilizando VirtualBox para la mediación de recursos lógicos.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Entorno Huésped</span>
                  <p className="text-xs text-slate-500">Implementación de Fedora Workstation, base de desarrollo y testeo para RHEL.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <span className="font-bold text-indigo-600 block text-lg mb-1">Verificación de Kernel</span>
                  <p className="text-xs text-slate-500">Diagnóstico detallado y extracción de metadatos del sistema huésped usando terminal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Video de la Práctica --- */}
          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
            <div className="bg-slate-950 text-white p-6 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                  <Video size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Registro en Video del Laboratorio</h4>
                  <p className="text-xs text-slate-400">Puesta en Marcha de la Máquina Virtual e Instalación de Fedora</p>
                </div>
              </div>
              <span className="hidden sm:inline-block bg-red-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                YouTube
              </span>
            </div>
            
            <div className="p-8 bg-slate-950 flex flex-col items-center justify-center">
              <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-inner border border-slate-800 bg-black relative">
                <iframe 
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/Yt_bv2T6rgw"
                  title="Práctica de Laboratorio 3 (Software): Instalación y Configuración de Sistemas Operativos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-slate-400 text-xs text-center mt-6 max-w-xl">
                Nota: El video tutorial abarca la descarga de VirtualBox, la configuración de recursos en la máquina virtual, la instalación guiada de Fedora y la posterior validación del sistema en terminal con Fastfetch.
              </p>
            </div>
          </div>

          {/* --- Ficha Técnica y Terminal --- */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Especificaciones de Virtualización */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h4 className="font-display font-bold text-2xl text-slate-900 mb-6 flex items-center gap-2">
                <Server className="text-indigo-600" size={24} />
                Ficha Técnica: Recursos Virtuales
              </h4>
              <p className="text-sm text-slate-500 mb-6">
                Estructura y asignación del hardware virtualizado para emular de forma aislada la máquina huésped.
              </p>
              
              <div className="space-y-4">
                {vmSpecs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg">
                      <spec.icon size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">{spec.label}</span>
                      <span className="text-sm font-bold text-slate-800">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulación Terminal Fastfetch */}
            <div className="bg-[#1e1e2e] rounded-3xl border border-slate-800 overflow-hidden shadow-xl text-[#cdd6f4] font-mono h-full flex flex-col animate-fadeIn">
              {/* Header de la terminal */}
              <div className="bg-[#11111b] px-4 py-3 flex items-center justify-between border-b border-[#313244]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f38ba8]" />
                  <div className="w-3 h-3 rounded-full bg-[#f9e2af]" />
                  <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
                </div>
                <span className="text-xs text-[#a6adc8]">elton@fedora:~</span>
                <div className="w-12" />
              </div>
              
              {/* Contenido de la terminal */}
              <div className="p-6 text-xs md:text-sm leading-relaxed flex-1 overflow-x-auto">
                <div className="flex gap-2 mb-4 text-[#89b4fa]">
                  <span>[elton@fedora ~]$</span>
                  <span className="text-white animate-pulse">fastfetch</span>
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-4">
                  {/* Logo de Fedora en ASCII Art */}
                  <div className="text-[#89b4fa] font-bold leading-none hidden sm:block whitespace-pre">
{`          ,,eee,,
        ,eP"     "Y2,
      ,eP"         "Y2,
     dP"             "Yb
    dI                 Ib
    I8                 8I
    Ib                 dI
     Yb             dP"
      "Y2,         ,2P"
        "Y2,     ,2P"
          ""eee""`}
                  </div>
                  {/* Datos del sistema */}
                  <div className="space-y-1">
                    <div><span className="text-[#f38ba8] font-bold">elton</span><span className="text-[#a6adc8]">@</span><span className="text-[#a6e3a1] font-bold">fedora</span></div>
                    <div>-------------------</div>
                    <div><span className="text-[#89b4fa] font-bold">OS:</span> Fedora Linux 40 (Workstation Edition) x86_64</div>
                    <div><span className="text-[#89b4fa] font-bold">Host:</span> VirtualBox 1.2</div>
                    <div><span className="text-[#89b4fa] font-bold">Kernel:</span> 6.8.5-300.fc40.x86_64</div>
                    <div><span className="text-[#89b4fa] font-bold">Uptime:</span> 3 mins</div>
                    <div><span className="text-[#89b4fa] font-bold">Shell:</span> bash 5.2.26</div>
                    <div><span className="text-[#89b4fa] font-bold">Resolution:</span> 1920x1080 (Virtual)</div>
                    <div><span className="text-[#89b4fa] font-bold">DE:</span> GNOME 46.0</div>
                    <div><span className="text-[#89b4fa] font-bold">WM:</span> Mutter</div>
                    <div><span className="text-[#89b4fa] font-bold">Terminal:</span> gnome-terminal</div>
                    <div><span className="text-[#89b4fa] font-bold">CPU:</span> AMD Ryzen 7 3700X (4) @ 3.59GHz</div>
                    <div><span className="text-[#89b4fa] font-bold">GPU:</span> VM Graphics Adapter</div>
                    <div><span className="text-[#89b4fa] font-bold">Memory:</span> 1.22 GiB / 7.78 GiB (15%)</div>
                    <div><span className="text-[#89b4fa] font-bold">Disk (/):</span> 9.20 GiB / 24.12 GiB (38%)</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* --- Fases de la Práctica (Cronología) --- */}
          <div>
            <div className="text-center mb-12">
              <h4 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Procedimiento de Instalación Paso a Paso
              </h4>
              <p className="text-slate-600 max-w-xl mx-auto">
                Secuencia lógica de pasos seguidos para configurar la máquina virtual y llevar a cabo la instalación limpia del sistema operativo Fedora.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className={`p-6 rounded-2xl border-2 transition-all flex gap-4 ${step.color} hover:shadow-md hover:-translate-y-0.5 duration-200`}>
                  <div className="flex-shrink-0 mt-1">
                    <step.icon size={28} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-white/60 border border-current/20">
                        {step.phase}
                      </span>
                      <h5 className="font-bold text-slate-800 text-base">{step.title}</h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Dificultades y Soluciones --- */}
          <div>
            <div className="text-center mb-12">
              <h4 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Dificultades Técnicas y Soluciones Aplicadas
              </h4>
              <p className="text-slate-600 max-w-xl mx-auto">
                Incidentes encontrados durante el proceso de instalación y las metodologías empleadas para solucionarlos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {challenges.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                        Problema {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                        <CheckCircle size={12} /> {item.status}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-800 text-base mb-3 leading-snug">{item.title}</h5>
                    <p className="text-xs text-slate-500 font-bold mb-1">Dificultad:</p>
                    <p className="text-xs text-slate-600 text-justify mb-4 leading-relaxed">{item.problem}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-xs text-indigo-700 font-bold mb-1">Resolución:</p>
                    <p className="text-xs text-slate-600 text-justify leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Reflexión Final --- */}
          <div className="bg-indigo-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-indigo-950">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal size={120} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-200">Reflexión Profesional</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">La Abstracción por Software en la Arquitectura</h3>
              <p className="text-indigo-100 leading-relaxed mb-6 text-lg text-justify">
                Esta práctica de sistemas operativos y virtualización demuestra cómo el software moldea y gestiona el hardware físico disponible. La virtualización nos enseña que el hardware no es un bloque estático e inamovible, sino un conjunto de recursos dinámicos que un hipervisor puede multiplexar y distribuir a voluntad. Comprender la configuración de recursos, el montaje de imágenes de disco y la gestión del kernel en una máquina virtual es vital para cualquier desarrollador o ingeniero de sistemas. El kernel de Fedora, siendo la base donde se prueban las últimas innovaciones de Linux antes de llegar a Red Hat (RHEL), nos ofrece una perspectiva única sobre el control a bajo nivel del microprocesador, la memoria y el almacenamiento persistente, cerrando la brecha fundamental entre los componentes físicos y el software de aplicación.
              </p>
              <div className="flex items-center justify-between border-t border-indigo-700/50 pt-6 mt-6">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-sm">
                  <Calendar size={16} />
                  <span>Fecha de creación: 19 de Junio, 2026</span>
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
            <a href="https://github.com/elton28/Portafolio-Arquitectura-UNETI" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors">
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
        <Practice3 />
        <Practice3Software />
      </main>
      <Footer />
    </div>
  );
}
