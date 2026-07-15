import { useState } from "react";
import { 
  Cpu, 
  Wrench, 
  ChevronRight, 
  Monitor, 
  Calendar, 
  Layers, 
  Zap, 
  Database, 
  Video, 
  CheckCircle, 
  ShieldAlert, 
  Terminal, 
  Settings, 
  Server, 
  Clock, 
  Sparkles, 
  Trash2, 
  Camera, 
  Printer, 
  MousePointer, 
  Volume2, 
  Mic, 
  AlertTriangle,
  Info
} from "lucide-react";

// Local SectionTitle aligned with global styling
const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-16 text-center">
    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-3">{children}</h2>
    {subtitle && <p className="text-indigo-600 font-bold uppercase tracking-wider text-xs md:text-sm">{subtitle}</p>}
    <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full shadow-sm" />
  </div>
);

export default function Practice5() {
  // Checklist state for cleaning guide
  const [checkedSteps, setCheckedSteps] = useState<string[]>([]);
  
  const toggleStep = (id: string) => {
    setCheckedSteps(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // State to toggle consequence display in risks grid
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  // Data Arrays
  const risks = [
    {
      id: 1,
      title: "Sobrecalentamiento Crítico (Thermal Throttling)",
      cause: "Acumulación masiva de polvo en las aletas de disipación de calor, ventiladores obstruidos y resecamiento/degradación de la pasta térmica en CPU/GPU.",
      consequence: "Pérdida drástica de rendimiento para regular temperatura, apagados espontáneos de seguridad (Kernel Panic / BSOD), desgaste acelerado de los ventiladores y daño físico irreversible por estrés térmico en el silicio.",
      icon: ShieldAlert,
      severity: "Crítico"
    },
    {
      id: 2,
      title: "Fallas de Almacenamiento y Pérdida de Datos",
      cause: "Sectores defectuosos no detectados, falta de desfragmentación (en HDD), saturación de archivos temporales e inactividad de las lecturas SMART.",
      consequence: "Corrupción del sistema de archivos del sistema operativo, errores de pantalla azul irremediables, lentitud extrema y falla mecánica o lógica del disco duro con pérdida absoluta de información de usuario.",
      icon: Database,
      severity: "Alto"
    },
    {
      id: 3,
      title: "Daño Físico por Estática y Polvo Conductor",
      cause: "Acumulación de polvo higroscópico (que absorbe humedad ambiental) sobre la placa base, zócalos de memoria y soldaduras de la tarjeta madre.",
      consequence: "Cortocircuitos microscópicos en condensadores y MOSFETs al encender el equipo, daño inmediato por descarga electroestática al manipular componentes sin protección y falla permanente de la placa base.",
      icon: AlertTriangle,
      severity: "Crítico"
    },
    {
      id: 4,
      title: "Degradación del S.O. y Vulnerabilidad ante Malware",
      cause: "Falta de escaneos de seguridad periódicos, desactualización del sistema operativo y controladores principales, y acumulación excesiva de claves de registro rotas.",
      consequence: "Vulnerabilidades críticas expuestas ante ransomware o virus, pérdida de privacidad de datos, lentitud generalizada por procesos de inicio basura en segundo plano e inestabilidad general del sistema operativo.",
      icon: Trash2,
      severity: "Alto"
    },
    {
      id: 5,
      title: "Inestabilidad Eléctrica por Fuente de Poder Saturada",
      cause: "Obstrucción de la rejilla de ventilación de la fuente de alimentación (PSU), pelusa acumulada en sus componentes internos y capacitores inflados.",
      consequence: "Suministro irregular de voltajes que deteriora progresivamente los circuitos de la placa base y discos duros, cortocircuitos internos con riesgo de cortafuegos en la fuente y apagado súbito del sistema.",
      icon: Zap,
      severity: "Crítico"
    }
  ];

  const maintenancePlan = {
    hardware: [
      { task: "Soplado interno de polvo y remoción de pelusa", frequency: "Cada 3 a 6 meses", tools: "Soplador eléctrico / Aire comprimido, Pinceles antiestáticos, Pulsera ESD" },
      { task: "Limpieza externa de chasis, teclado y periféricos", frequency: "Mensual", tools: "Paño de microfibra, Alcohol isopropílico, Pinceles" },
      { task: "Cambio de pasta térmica en procesador (CPU) y gráfica (GPU)", frequency: "Cada 12 meses (Anual)", tools: "Pasta térmica, Alcohol isopropílico, Servilleta industrial / Hisopo" },
      { task: "Limpieza de contactos dorados de RAM y ranuras PCIe", frequency: "Cada 6 meses", tools: "Borrador de goma, Cepillo ESD, Alcohol isopropílico" },
      { task: "Limpieza de rejilla y ventilador de Fuente de Poder", frequency: "Cada 6 meses", tools: "Soplador eléctrico, Pinceles antiestáticos" }
    ],
    software: [
      { task: "Eliminación de archivos temporales e historiales de navegador", frequency: "Mensual", tools: "Liberador de espacio en disco (Windows) / Comandos de consola" },
      { task: "Optimización de programas de inicio y servicios", frequency: "Mensual", tools: "Administrador de tareas, MSConfig" },
      { task: "Escaneo profundo con Antivirus y Antimalware", frequency: "Quincenal", tools: "Windows Defender, Malwarebytes, ESET Online" },
      { task: "Instalación de actualizaciones críticas del S.O. y Drivers", frequency: "Mensual", tools: "Windows Update / Gestores de paquetes Linux" },
      { task: "Revisión de salud del disco con diagnóstico S.M.A.R.T.", frequency: "Trimestral", tools: "CrystalDiskInfo, smartctl (Linux)" },
      { task: "Respaldo completo de datos críticos (Backup)", frequency: "Semanal / Mensual", tools: "Almacenamiento en la Nube (Drive, OneDrive) / Disco Externo" }
    ]
  };

  const tools = [
    { id: 1, name: "Destornilladores de Precisión", category: "Desmontaje", desc: "Destornilladores Phillips, Torx e imantados planos de escala pequeña. Permiten abrir el chasis y desensamblar placas base sin deformar las cabezas de los tornillos.", icon: Wrench, color: "bg-indigo-50 text-indigo-750 border-indigo-100" },
    { id: 2, name: "Pinzas de Precisión ESD", category: "Desmontaje", desc: "Pinzas delgadas con recubrimiento no conductor que facilitan la colocación de tornillos y cables diminutos en ranuras o conectores difíciles.", icon: Layers, color: "bg-indigo-50 text-indigo-750 border-indigo-100" },
    { id: 3, name: "Pulsera Antiestática (ESD)", category: "Seguridad", desc: "Pulsera de conductividad moderada anclada al chasis. Disipa las cargas electroestáticas de nuestro cuerpo para no fundir los microchips sensibles.", icon: ShieldAlert, color: "bg-emerald-50 text-emerald-755 border-emerald-100" },
    { id: 4, name: "Multímetro Digital", category: "Seguridad", desc: "Instrumento para medir voltajes de corriente continua. Indispensable para diagnosticar rieles de alimentación principal y detectar caídas eléctricas.", icon: Terminal, color: "bg-emerald-50 text-emerald-755 border-emerald-100" },
    { id: 5, name: "Soplador / Aire Comprimido", category: "Limpieza", desc: "Genera ráfagas limpias neumáticas para remover el polvo grueso acumulado en disipadores y chasis sin inducir fricción mecánica.", icon: Wrench, color: "bg-blue-50 text-blue-750 border-blue-100" },
    { id: 6, name: "Alcohol Isopropílico (99%)", category: "Limpieza", desc: "Solvente con nivel de pureza del 99% libre de agua. Remueve grasa y pasta térmica vieja de procesadores de forma rápida y segura.", icon: Zap, color: "bg-blue-50 text-blue-750 border-blue-100" },
    { id: 7, name: "Brochas Antiestáticas", category: "Limpieza", desc: "Cepillos de fibras conductivas para limpiar componentes lógicos y zócalos de memoria sin generar electricidad estática.", icon: Server, color: "bg-blue-50 text-blue-755 border-blue-100" },
    { id: 8, name: "Paño de Microfibra", category: "Limpieza", desc: "Tejido suave libre de hilachas, diseñado para limpiar cubiertas externas de plástico y pantallas LCD de forma suave y sin rayar.", icon: Monitor, color: "bg-blue-50 text-blue-755 border-blue-100" },
    { id: 9, name: "Borrador de Goma Blando", category: "Limpieza", desc: "Goma de borrar común de dibujo. Remueve de forma segura y eficaz la película de óxido acumulada en los pines dorados de la RAM.", icon: Trash2, color: "bg-blue-50 text-blue-755 border-blue-100" },
    { id: 10, name: "Pasta Térmica de Plata", category: "Interfaz", desc: "Compuesto conductor de calor que se introduce en los micro-poros de aire entre la CPU y el disipador para optimizar la conductividad térmica.", icon: Cpu, color: "bg-amber-50 text-amber-755 border-amber-100" }
  ];

  const cleaningSteps = [
    { id: "cpu-clean", title: "1. Limpieza Interna del CPU", icon: Cpu, desc: "Desconecte el equipo del tomacorriente, pulse el encendido por 5 segundos para drenar los condensadores y use la pulsera ESD. Soplete el gabinete a una distancia de 15 cm. Fije mecánicamente las aspas de los ventiladores para evitar corrientes de inducción inversas. Use cepillos antiestáticos en áreas de componentes tupidos.", tips: "Retire la pasta térmica degradada con alcohol isopropílico y aplique pasta nueva en el centro del silicio." },
    { id: "monitor-clean", title: "2. Limpieza del Monitor", icon: Monitor, desc: "Apague el panel. Use un paño de microfibra completamente seco para quitar el polvo en círculos pequeños. Para huellas persistentes, humedezca levemente el paño con alcohol isopropílico diluido en agua destilada. Nunca aplique líquidos de forma directa en los bordes de la pantalla.", tips: "No use limpiadores comerciales con amoniaco, ya que degradan los filtros antirreflejantes LCD." },
    { id: "teclado-clean", title: "3. Limpieza del Teclado", icon: Layers, desc: "Desconecte el periférico. Colóquelo boca abajo y sacúdalo con firmeza. Use ráfagas de aire comprimido entre ranuras. Para desinfección interna, use un extractor de teclas plástico, lave las cubiertas con agua jabonosa y limpie los domos o switches con hisopos húmedos en alcohol isopropílico.", tips: "Deje secar las keycaps por lo menos 3 horas para evitar que retengan humedad interna que cause cortos lógicos." },
    { id: "mouse-clean", title: "4. Ratón / Mouse", icon: MousePointer, desc: "Hisope suavemente el orificio del sensor óptico inferior. Utilice un palillo plástico para remover la suciedad incrustada alrededor de los deslizadores de teflón. Limpie el chasis exterior y la rueda de desplazamiento con un paño de microfibra humedecido con alcohol isopropílico.", tips: "La acumulación en los deslizadores incrementa la fricción y deteriora la precisión del puntero." },
    { id: "printer-clean", title: "5. Impresora", icon: Printer, desc: "Apague y desconecte el equipo. Limpie el exterior con microfibra húmeda. Remueva restos de papel y virutas internas con una mini-aspiradora de mano (nunca sople con aire a presión el tóner, ya que se dispersa). Limpie los rodillos con paños ligeramente humedecidos.", tips: "Use el programa de mantenimiento del fabricante para realizar limpiezas de inyectores y alineación de cabezales." },
    { id: "webcam-clean", title: "6. Cámara Web / Webcam", icon: Camera, desc: "Limpie el cristal del lente óptico utilizando exclusivamente un paño de microfibra de alta calidad mediante giros concéntricos ligeros para evitar rayar la lente. Desinfecte el chasis exterior con un paño humedecido en alcohol isopropílico.", tips: "No frote la lente con hisopos de algodón común, ya que dejan fibras residuales en los costados de la óptica." },
    { id: "audio-clean", title: "7. Auriculares y Parlantes", icon: Volume2, desc: "Desmonte las almohadillas protectoras lavándolas con agua templada jabonosa. Con un cepillo de dientes de cerdas suaves y secas, limpie suavemente la rejilla de los auriculares apuntando hacia abajo para favorecer la salida de residuos.", tips: "No use chorro de aire comprimido directo en las bocinas de auriculares, ya que la presión puede romper el diafragma." },
    { id: "mic-clean", title: "8. Micrófono de Escritorio", icon: Mic, desc: "Desmonte el filtro antipop de espuma y lávelo con jabón neutro dejando secar al aire libre. Pase un paño humedecido con alcohol isopropílico por la rejilla exterior metálica protectora para desinfectar.", tips: "Evite la entrada de humedad al núcleo de la cápsula de condensador para no dañar las membranas." }
  ];

  // Corrective Data
  const hardwareSymptoms = [
    { name: "Procesador (CPU)", icon: Cpu, symptoms: "Congelamientos del sistema, pantallas azules (BSOD) continuas, apagado repentino del PC bajo estrés térmico por seguridad, o error 'CPU Fan Error' en el POST de arranque." },
    { name: "Memoria RAM", icon: Layers, symptoms: "Reinicios aleatorios e imprevistos de la máquina, pantallas azules con múltiples códigos de error del kernel, o pitidos seguidos al encender la PC sin señal de video." },
    { name: "Tarjeta Gráfica (GPU)", icon: Monitor, symptoms: "Distorsiones geométricas en la pantalla (artefactos), parpadeo del monitor, congelamiento total en aplicaciones 3D o caída súbita del controlador gráfico." },
    { name: "Almacenamiento (HDD/SSD)", icon: Database, symptoms: "Lentitud extrema al abrir archivos, congelamientos recurrentes del S.O., error 'No bootable device found' en la BIOS o ruidos metálicos de clics físicos." },
    { name: "Placa Base (Motherboard)", icon: Server, symptoms: "El equipo no enciende al presionar el botón de inicio, puertos E/S traseros inoperantes por completo, desconfiguración de fecha y hora en BIOS (CMOS Error)." },
    { name: "Fuente de Poder (PSU)", icon: Zap, symptoms: "Apagados repentinos de la PC al abrir juegos o renders, ruidos de chillido eléctrico interno, ventilador inactivo o imposibilidad de prender." }
  ];

  const diagProcedures = [
    {
      id: "ram",
      title: "1. Memoria RAM (Diagnóstico de Celdas)",
      steps: [
        "Desconecte el cable de corriente AC de la fuente de poder y mantenga presionado el botón de inicio por 5 segundos para vaciar capacitores.",
        "Equípese con la pulsera antiestática ESD y retírele la tapa lateral al gabinete. Desmonte los módulos RAM abriendo las pestañas laterales.",
        "Con un borrador de goma blando, friccione con suavidad los pines dorados de contacto en ambas caras para remover la sulfatación microscópica.",
        "Sopletee con aire comprimido las ranuras de la placa madre e instale un solo módulo de RAM en el slot principal (usualmente el A2).",
        "Arranque el computador. De dar video, corra el 'Diagnóstico de memoria de Windows' (mdsched.exe) o MemTest86 en booteo USB para escanear celdas."
      ],
      tools: "Pulsera antiestática, borrador de goma blando, aire comprimido, pendrive con MemTest86."
    },
    {
      id: "storage",
      title: "2. Unidad de Disco (Salud S.M.A.R.T.)",
      steps: [
        "Encienda el equipo. Descargue y abra CrystalDiskInfo para inspeccionar el estado físico y temperatura del disco.",
        "Si la salud arroja 'Riesgo' o 'Malo', examine los valores del contador de sectores reasignados o pendientes. Si es superior a cero, el disco tiene daño.",
        "Si la PC no enciende, retire el disco e instálelo en otra computadora como secundario usando un adaptador SATA a USB o puerto directo.",
        "Abra el Símbolo del Sistema (CMD) con permisos de administrador y corra el comando: chkdsk C: /f /r para reparar el sistema de archivos.",
        "Si el disco genera ruidos metálicos continuos, congela el sistema al intentar leer carpetas o no aparece listado en BIOS, requiere reemplazo."
      ],
      tools: "Software CrystalDiskInfo, adaptador SATA a USB, consola CMD (comando chkdsk)."
    },
    {
      id: "psu",
      title: "3. Fuente de Poder (Prueba de Voltajes)",
      steps: [
        "Desconecte el cable AC de alimentación. Desconecte todos los cables de poder de la placa madre (24 pines y CPU), tarjetas PCIe y discos.",
        "Realice el 'Puente de Arranque' conectando un clip metálico doblado en la terminal del conector de 24 pines: del cable VERDE al cable NEGRO (GND).",
        "Conecte el cable AC de la fuente. Si el ventilador interno de la fuente de poder no gira en absoluto, el fusible o electrónica interna falló.",
        "Si gira, use un multímetro digital en escala de 20 VDC. Mida voltaje en pines: cable Amarillo (+12V), cable Rojo (+5V), cable Naranja (+3.3V) respecto a tierra.",
        "Los voltajes deben estar dentro de la tolerancia estricta del ±5% (ej: 12V estable entre 11.4V y 12.6V). Si caen a cero o fluctúan, sustituya la fuente."
      ],
      tools: "Clip metálico, multímetro digital, pulsera ESD antiestática."
    }
  ];

  const bootProblems = [
    {
      id: 1,
      symptom: "El equipo enciende (luces y ventiladores giran), pero la pantalla permanece en negro absoluto y no emite pitidos de alerta.",
      cause: "Falla física del microprocesador (mal colocado, sin pasta térmica o quemado), BIOS corrupto, o fallas en el circuito VRM de la placa base.",
      solution: "Realizar un Clear CMOS retirando la pila de litio CR2032 de la placa por 5 minutos con la fuente desenchufada. Si persiste, probar con otra CPU compatible."
    },
    {
      id: 2,
      symptom: "La PC emite 3 pitidos largos y repetitivos al encender y no da señal de video.",
      cause: "Falla de detección o lectura física en los módulos de la memoria de acceso aleatorio (RAM) en sus ranuras correspondientes.",
      solution: "Desconectar la PC, retirar las memorias, frotar pines dorados con goma de borrar, limpiar ranuras con aire comprimido e insertar un módulo."
    },
    {
      id: 3,
      symptom: "El equipo enciende, muestra el logotipo de la placa base, pero se congela allí o arroja la advertencia 'No bootable device'.",
      cause: "El cable de alimentación o datos SATA del disco se encuentra desconectado, el disco está dañado, o el orden de booteo UEFI se desconfiguró.",
      solution: "Ingresar a BIOS (F2/Supr) y verificar si la unidad de disco es listada. Si es visible, reordenar arranque. Si no, chequear cableado o cambiar disco."
    },
    {
      id: 4,
      symptom: "El equipo se reinicia cíclicamente (Boot Loop) antes de poder cargar la pantalla del sistema operativo.",
      cause: "Daño lógico en archivos clave del kernel debido a apagados inesperados, actualizaciones del sistema corruptas o infección de malware.",
      solution: "Entrar al menú de Recuperación de Windows (RE). Iniciar en Modo Seguro para revertir los controladores recientes o reparar el arranque."
    }
  ];

  const commonFaults = [
    {
      id: 1,
      title: "1. Problemas de Audio",
      diag: "Confirmar que el conector jack de 3.5mm de los altavoces esté en la salida de color verde. Comprobar que no figuren alertas amarillas de drivers en el Administrador de Dispositivos.",
      solution: "Seleccionar el canal de salida correcto de audio en la barra de tareas de Windows. Si el controlador presenta fallas, desinstálelo del Administrador de Dispositivos y reinicie el sistema para forzar la instalación de fábrica.",
      icon: Volume2
    },
    {
      id: 2,
      title: "2. Conectividad de Red",
      diag: "Validar que el conector de red Ethernet tenga el pestillo plástico sano y las luces parpadeen. En WiFi, confirmar que la tarjeta inalámbrica no esté en modo avión y se encuentre habilitada.",
      solution: "Iniciar la consola CMD como administrador y ejecutar los comandos 'ipconfig /release', 'ipconfig /renew' y 'ipconfig /flushdns'. Si continúa con fallas, utilizar la opción 'Restablecimiento de red' de Windows.",
      icon: Server
    },
    {
      id: 3,
      title: "3. Lentitud en el Sistema",
      diag: "Revisar los procesos en el Administrador de Tareas (Ctrl + Shift + Esc) y verificar qué programas absorben el 100% de la CPU o Disco. Ejecutar CrystalDiskInfo para evaluar el desgaste físico del disco.",
      solution: "Deshabilitar las aplicaciones innecesarias en la pestaña 'Inicio', depurar carpetas de temporales de usuario y correr análisis antimalware. La solución definitiva recomendada es migrar a un disco SSD.",
      icon: Clock
    },
    {
      id: 4,
      title: "4. Pantalla Distorsionada (Artefactos)",
      diag: "Probar el monitor con otro cable HDMI/DisplayPort. Si las distorsiones de líneas de colores o cuadros se aprecian desde el encendido en la BIOS, es una falla por desprendimiento BGA del chip gráfico (GPU) o la VRAM.",
      solution: "Apagar la PC, retirar la GPU, limpiar sus contactos con goma de borrar blanda y reinstalar. Si ocurre en el S.O., reiniciar en Modo Seguro y remover los controladores antiguos usando DDU antes de instalar el oficial.",
      icon: Monitor
    },
    {
      id: 5,
      title: "5. Problemas de Encendido",
      diag: "Comprobar corriente en la toma de pared y el cable AC de la fuente. Abrir el gabinete, desconectar el panel frontal (PW_SW) y puentear brevemente los pines correspondientes con la punta de un destornillador plano.",
      solution: "Si la PC enciende al hacer el puente, el botón del chasis está roto y debe sustituirse. Si la máquina prende 2 segundos y se apaga, revise el anclaje térmico del disipador de calor y verifique que no esté suelto.",
      icon: Zap
    },
    {
      id: 6,
      title: "6. Pila CMOS Agotada",
      diag: "Aparece la pantalla de error 'CMOS Checksum Error' al prender. La hora y fecha del sistema se restablecen a valores de fábrica cada vez que la PC se desconecta del enchufe, inhabilitando la navegación segura.",
      solution: "Desconectar la corriente AC, utilizar pulsera antiestática y abrir el chasis. Presionar la lengüeta metálica del zócalo de la batería en la placa base para retirar la pila CR2032 vieja. Colocar una pila de 3V de litio nueva.",
      icon: Calendar
    }
  ];

  return (
    <section id="practica5" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title Aligned with practices 1-4 */}
        <SectionTitle subtitle="Práctica de Laboratorio 5">
          Mantenimiento Preventivo y Correctivo del Computador
        </SectionTitle>
        
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* ========================================================================= */}
          {/* SECCIÓN I: MANTENIMIENTO PREVENTIVO                                       */}
          {/* ========================================================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-indigo-100 pb-4 flex items-center gap-3">
              <ShieldAlert className="text-indigo-650" size={32} />
              Mantenimiento Preventivo del Computador
            </h3>

            {/* --- 1.1 Introducción & Análisis de Riesgos --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  1.1 Diagnóstico de Vulnerabilidades
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Análisis de Riesgos por Ausencia de Limpieza y Mantenimiento
                </h4>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-justify mb-8">
                  La falta de rutinas preventivas periódicas disminuye exponencialmente la fiabilidad física del hardware y la integridad lógica de la información. El polvo obstruye rejillas, la pasta térmica se solidifica y los temporales saturan los sectores del disco. A continuación, se detallan los 5 riesgos críticos detectados en el laboratorio; haz clic sobre cada tarjeta para desplegar el efecto final en el sistema:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {risks.map((risk) => {
                    const RiskIcon = risk.icon;
                    const isSelected = expandedRisk === risk.id;
                    return (
                      <div 
                        key={risk.id}
                        onClick={() => setExpandedRisk(isSelected ? null : risk.id)}
                        className={`bg-slate-50/75 backdrop-blur-sm rounded-2xl border transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer hover:shadow-md ${
                          isSelected 
                            ? 'border-indigo-500 ring-2 ring-indigo-100 bg-white shadow-sm' 
                            : 'border-slate-200 hover:border-indigo-300'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-white text-indigo-650 rounded-xl shadow-sm border border-slate-100">
                              <RiskIcon size={20} />
                            </div>
                            <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded ${
                              risk.severity === 'Crítico' ? 'bg-red-100 text-red-750' : 'bg-amber-100 text-amber-750'
                            }`}>
                              {risk.severity}
                            </span>
                          </div>
                          
                          <h5 className="font-bold text-slate-800 text-base mb-3 leading-snug">{risk.title}</h5>
                          
                          <div className="space-y-3">
                            <div>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Causa Inicial</span>
                              <p className="text-xs text-slate-500 text-justify leading-relaxed line-clamp-3">{risk.cause}</p>
                            </div>
                            
                            {isSelected && (
                              <div className="pt-3 border-t border-slate-200">
                                <span className="text-[10px] font-bold text-indigo-650 uppercase tracking-wider block">Consecuencia y Efecto</span>
                                <p className="text-xs text-slate-700 text-justify leading-relaxed font-medium bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/50 mt-1">{risk.consequence}</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-indigo-650 pt-2 border-t border-slate-200/50">
                          <span>{isSelected ? 'Ocultar detalle' : 'Ver consecuencia'}</span>
                          <ChevronRight size={14} className={`transform transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- 1.2 Plan Maestro de Mantenimiento --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  1.2 Cronograma Técnico
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Plan Maestro de Mantenimiento Periódico
                </h4>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-justify mb-8">
                  Plan de contingencia estructurado que establece la frecuencia de operaciones preventivas de limpieza física y optimizaciones lógicas del sistema operativo para mantener el rendimiento al máximo.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 mt-6">
                  {/* Hardware Plan */}
                  <div className="space-y-4">
                    <h5 className="font-bold text-slate-800 text-lg border-b pb-2 flex items-center gap-2">
                      <Cpu size={18} className="text-indigo-600" />
                      Rutina de Mantenimiento Físico (Hardware)
                    </h5>
                    <div className="space-y-3">
                      {maintenancePlan.hardware.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50/75 rounded-2xl border border-slate-105 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
                          <div className="flex justify-between items-start gap-2 mb-1.5">
                            <span className="font-bold text-sm text-slate-800 leading-snug">{item.task}</span>
                            <span className="bg-indigo-100 text-indigo-750 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{item.frequency}</span>
                          </div>
                          <p className="text-xs text-slate-500"><strong className="text-slate-700">Herramientas:</strong> {item.tools}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Software Plan */}
                  <div className="space-y-4">
                    <h5 className="font-bold text-slate-800 text-lg border-b pb-2 flex items-center gap-2">
                      <Settings size={18} className="text-indigo-600" />
                      Rutina de Mantenimiento Lógico (Software)
                    </h5>
                    <div className="space-y-3">
                      {maintenancePlan.software.map((item, idx) => (
                        <div key={idx} className="p-4 bg-slate-50/75 rounded-2xl border border-slate-105 hover:bg-white hover:border-indigo-200 hover:shadow-sm transition-all duration-200">
                          <div className="flex justify-between items-start gap-2 mb-1.5">
                            <span className="font-bold text-sm text-slate-800 leading-snug">{item.task}</span>
                            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">{item.frequency}</span>
                          </div>
                          <p className="text-xs text-slate-500"><strong className="text-slate-700">Entorno:</strong> {item.tools}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 1.3 Kit de Herramientas --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  1.3 Instrumental Técnico
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Lista de Herramientas del Técnico
                </h4>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-justify mb-8">
                  Clasificación conceptual del equipamiento químico, mecánico y de seguridad electroestática indispensable para llevar a cabo la intervención física y el mantenimiento del computador de forma segura.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {tools.map((t) => {
                    const ToolIcon = t.icon;
                    return (
                      <div key={t.id} className="bg-slate-50/75 rounded-2xl p-5 border border-slate-105 flex flex-col sm:flex-row gap-4 items-start hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-300">
                        <div className={`p-3 rounded-xl flex-shrink-0 bg-white shadow-sm border border-slate-100 ${t.color.split(' ')[1]}`}>
                          <ToolIcon size={20} />
                        </div>
                        <div className="space-y-1.5 flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                            <h5 className="font-bold text-slate-800 text-base leading-tight">{t.name}</h5>
                            <span className="text-xs font-bold text-indigo-500 bg-indigo-50/50 px-2 py-0.5 rounded border border-indigo-100 w-max">
                              {t.category}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500 leading-relaxed text-justify">{t.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- 1.4 Guía de Limpieza Exhaustiva (Checklist) --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  1.4 Manual de Procedimiento
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Guía Paso a Paso para una Limpieza Físico-Química
                </h4>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-justify mb-8">
                  Protocolo técnico estandarizado de limpieza para remover contaminantes en el procesador, ventiladores, periféricos y 5 dispositivos de Entrada/Salida habituales:
                </p>
                <p className="text-xs text-slate-500 italic mb-8 flex items-center gap-1.5">
                  <Info size={14} className="text-indigo-650" />
                  Haz clic en el recuadro de la izquierda de cada tarea para marcarla como finalizada y comprobar el avance.
                </p>

                <div className="space-y-4">
                  {cleaningSteps.map((step) => {
                    const StepIcon = step.icon;
                    const isChecked = checkedSteps.includes(step.id);
                    return (
                      <div 
                        key={step.id}
                        onClick={() => toggleStep(step.id)}
                        className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex gap-4 items-start select-none ${
                          isChecked 
                            ? 'border-indigo-500 bg-indigo-50/15 shadow-md shadow-indigo-50' 
                            : 'border-slate-105 bg-slate-50/50 hover:bg-white hover:border-slate-350 hover:shadow-sm'
                        }`}
                      >
                        <button 
                          className={`w-6 h-6 rounded-lg border mt-1 flex items-center justify-center flex-shrink-0 transition-colors ${
                            isChecked 
                              ? 'bg-indigo-650 border-indigo-650 text-white' 
                              : 'border-slate-300 bg-white hover:border-indigo-500'
                          }`}
                        >
                          {isChecked && <CheckCircle size={16} className="text-white" />}
                        </button>

                        <div className="space-y-2.5 flex-1">
                          <div className="flex items-center gap-2.5">
                            <div className={`p-2 rounded-xl ${isChecked ? 'bg-indigo-650 text-white' : 'bg-white text-slate-500 shadow-sm border border-slate-100'}`}>
                              <StepIcon size={16} />
                            </div>
                            <h5 className={`font-bold text-base ${isChecked ? 'text-indigo-900 line-through' : 'text-slate-800'}`}>
                              {step.title}
                            </h5>
                          </div>
                          <p className={`text-sm text-justify leading-relaxed ${isChecked ? 'text-slate-450' : 'text-slate-600'}`}>
                            {step.desc}
                          </p>
                          
                          <div className={`p-3 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 mt-3 transition-all ${
                            isChecked 
                              ? 'bg-white/80 border-indigo-100 text-indigo-950 shadow-sm' 
                              : 'bg-white border-slate-200 text-slate-550'
                          }`}>
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mt-0.5 flex-shrink-0 ${
                              isChecked ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'
                            }`}>
                              Pro-Tip
                            </span>
                            <p className="leading-relaxed">{step.tips}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- 1.5 Videodocumentación de Hardware --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                  1.5 Evidencia de Laboratorio
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Videodocumentación del Mantenimiento de Hardware
                </h4>
                
                <div className="grid md:grid-cols-[1fr_240px] gap-10 items-center">
                  <div className="space-y-4">
                    <span className="inline-block py-0.5 px-3 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
                      YouTube Short
                    </span>
                    <h5 className="font-bold text-slate-800 text-xl leading-tight">Limpieza Física Explicada en Cámara</h5>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                      El video a continuación documenta la aplicación práctica del mantenimiento preventivo a nivel físico de hardware. El tutorial abarca aspectos clave de la limpieza interna del chasis y la remoción de polvo, cumpliendo con la exigencia institucional de mostrar al estudiante visible en cámara y relatando el procedimiento técnico detallado.
                    </p>
                    
                    <div className="p-4 bg-slate-50/75 rounded-2xl border border-slate-100">
                      <h6 className="font-bold text-slate-800 text-sm mb-3">Requisitos de Evaluación Cumplidos:</h6>
                      <ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                        <li className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-emerald-500" />
                          Expositor visible
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-emerald-500" />
                          Limpieza soplador
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-emerald-500" />
                          Seguridad antiestática
                        </li>
                        <li className="flex items-center gap-1.5">
                          <CheckCircle size={14} className="text-emerald-500" />
                          Explicación detallada
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Vertical Video Embed with Premium Notch Layout */}
                  <div className="relative mx-auto border-4 border-slate-800 bg-slate-900 rounded-[2rem] shadow-xl h-[420px] w-[220px] p-2 flex flex-col justify-between overflow-hidden flex-shrink-0">
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-3.5 w-20 bg-slate-900 rounded-full z-20 flex items-center justify-center border border-slate-800/80">
                      <div className="w-8 h-0.5 bg-slate-800 rounded-full mr-2" />
                      <div className="w-1 h-1 bg-slate-800 rounded-full" />
                    </div>
                    <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black relative">
                      <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/kLTKhlkcadg"
                        title="Videodocumentacion Mantenimiento"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECCIÓN II: MANTENIMIENTO CORRECTIVO                                      */}
          {/* ========================================================================= */}
          <div>
            <h3 className="font-display text-3xl font-bold text-slate-800 mb-8 border-b-2 border-violet-100 pb-4 flex items-center gap-3">
              <Settings className="text-violet-600" size={32} />
              Mantenimiento Correctivo del Computador
            </h3>

            {/* --- 2.1 Identificación y Diagnóstico de Fallas --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-50 border border-violet-200 text-violet-750 text-xs font-bold uppercase tracking-wider mb-4">
                  2.1 Diagnóstico Técnico
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Síntomas de Falla y Diagnóstico de Componentes
                </h4>
                <p className="text-slate-655 text-sm md:text-base leading-relaxed text-justify mb-8">
                  El mantenimiento correctivo se activa ante averías del POST o inestabilidad en caliente. A continuación, se clasifican los síntomas de fallos de hardware y los manuales paso a paso de confirmación electrónica:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {hardwareSymptoms.map((comp, idx) => {
                    const IconComp = comp.icon;
                    return (
                      <div key={idx} className="bg-slate-50/75 rounded-2xl p-5 border border-slate-105 flex flex-col justify-between hover:bg-white hover:border-violet-300 hover:shadow-sm transition-all duration-200">
                        <div>
                          <div className="flex items-center gap-2.5 mb-3.5 border-b border-slate-200/50 pb-2.5">
                            <div className="p-2.5 bg-white text-violet-650 rounded-xl shadow-sm border border-slate-100">
                              <IconComp size={16} />
                            </div>
                            <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wider">{comp.name}</h5>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed text-justify">{comp.symptoms}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Console view for Diagnostic procedures */}
                <h5 className="font-bold text-slate-850 text-base mb-4 flex items-center gap-2">
                  <Terminal size={18} className="text-violet-650" />
                  Procedimientos Técnicos de Aislamiento de Fallas
                </h5>
                <div className="grid md:grid-cols-3 gap-6">
                  {diagProcedures.map((proc) => (
                    <div key={proc.id} className="bg-[#1e1e2e] text-[#cdd6f4] rounded-2xl p-6 font-mono text-sm leading-relaxed border border-slate-800 flex flex-col justify-between shadow-xl">
                      <div>
                        {/* macOS style dots header */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#f38ba8]" />
                            <div className="w-3 h-3 rounded-full bg-[#f9e2af]" />
                            <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
                          </div>
                          <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">{proc.title.split(' ')[1]}</span>
                        </div>
                        
                        <div className="space-y-3">
                          {proc.steps.map((st, i) => (
                            <div key={i} className="flex gap-2.5 items-start">
                              <span className="text-[#a6e3a1] font-bold">[{i+1}]</span>
                              <p className="text-slate-300 text-xs text-justify leading-relaxed">{st}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-800 pt-3.5 mt-5 text-[10px] text-slate-500">
                        <strong className="text-violet-300">Herramientas:</strong> {proc.tools}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- 2.2 Pruebas de Estabilidad y Arranque --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-5 border border-violet-200 text-violet-750 text-xs font-bold uppercase tracking-wider mb-4">
                  2.2 Pruebas en Caliente
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Pruebas de Estabilidad y Errores de POST
                </h4>
                
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
                  {/* Heat stress log */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-slate-800 text-base mb-3.5 flex items-center gap-1.5 border-b pb-2">
                        <AlertTriangle size={18} className="text-rose-500" />
                        Anomalía Térmica Registrada (AIDA64)
                      </h5>
                      <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4">
                        Durante la prueba de estrés de CPU en el laboratorio, se registró una temperatura de 95°C en 2 minutos. Para proteger el chip, la BIOS activó el estrangulamiento térmico (**Thermal Throttling**) reduciendo el reloj 25%. A los 5 minutos, el sensor térmico superó los 100°C forzando el apagado de seguridad.
                      </p>

                      <div className="p-4 bg-white rounded-xl border border-slate-200 text-sm">
                        <strong className="block text-slate-800 mb-2 font-bold">Diagnóstico Causa Raíz:</strong>
                        <ol className="list-decimal list-inside text-slate-600 space-y-1.5 leading-relaxed">
                          <li>Inspección del motor del cooler (girando normalmente).</li>
                          <li>Comprobación de anclajes de sujeción (fijados de forma correcta).</li>
                          <li>Desensamble del radiador: pasta térmica degradada y seca.</li>
                        </ol>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 mt-6 pt-3.5 border-t border-slate-200 leading-relaxed">
                      <strong className="text-violet-750 font-bold">Solución Aplicada:</strong> Limpieza y cambio de la interfaz térmica por pasta a base de plata (8.5 W/mK). Temperatura máxima estabilizada a 68°C.
                    </p>
                  </div>

                  {/* Boot Issues */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 space-y-4">
                    <h5 className="font-bold text-slate-800 text-base border-b pb-2">Fallas de Arranque y POST de la BIOS</h5>
                    <div className="space-y-3.5">
                      {bootProblems.map((boot) => (
                        <div key={boot.id} className="p-4 bg-white rounded-xl border border-slate-205 text-sm hover:shadow-sm transition-all">
                          <strong className="text-slate-800 block mb-1">Falla {boot.id}: {boot.symptom}</strong>
                          <p className="text-slate-550 text-xs mt-1.5"><strong className="text-slate-700">Causa:</strong> {boot.cause}</p>
                          <p className="text-violet-750 font-medium text-xs mt-1 bg-violet-50/40 p-2 rounded-lg border border-violet-100/50"><strong className="text-violet-900">Solución:</strong> {boot.solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 2.3 Reemplazo de Hardware & Reinstalación de Sistema --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-5 border border-violet-200 text-violet-750 text-xs font-bold uppercase tracking-wider mb-4">
                  2.3 Reparación y Migración
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Reemplazo Físico de Componentes e Instalación Limpia de S.O.
                </h4>
                
                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  {/* Upgrade mechanics */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-violet-650 bg-white border border-violet-100 px-3 py-0.5 rounded-full uppercase tracking-wider mb-3 inline-block">
                        Acción Correctiva Física (Hardware)
                      </span>
                      <h5 className="font-bold text-slate-800 text-base mb-3">Sustitución de Unidad de Almacenamiento HDD por SSD</h5>
                      <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4">
                        Procedimiento de taller para retirar un disco mecánico de 3.5" inestable (causante de fallas y pantallas azules lógicas) y montar una unidad SSD de 2.5" SATA de alta velocidad:
                      </p>

                      <div className="space-y-4">
                        {[
                          { idx: "A", title: "Descarga de Energía", text: "Apagar la fuente, desconectar el cable de la corriente y presionar el botón de inicio de la CPU 5 segundos para vaciar la corriente latente." },
                          { idx: "B", title: "Retiro del HDD dañado", text: "Con pulsera ESD colocada, retirar los cables SATA de datos y poder. Destornillar la unidad lateralmente y deslizarla del bastidor." },
                          { idx: "C", title: "Fijación del SSD", text: "Fijar el disco SSD de 2.5 pulgadas en el soporte adaptador, atornillar al riel del chasis y re-conectar cables SATA en el puerto principal (SATA_0)." }
                        ].map((item) => (
                          <div key={item.idx} className="p-3.5 bg-white rounded-xl border border-slate-200 text-sm">
                            <strong className="text-slate-800 block mb-1">{item.idx}. {item.title}</strong>
                            <p className="text-slate-500 text-xs leading-relaxed text-justify">{item.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean OS install */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-violet-650 bg-white border border-violet-100 px-3 py-0.5 rounded-full uppercase tracking-wider mb-3 inline-block">
                        Acción Correctiva Lógica (Software)
                      </span>
                      <h5 className="font-bold text-slate-800 text-base mb-3">Reinstalación de Windows ante Ransomware</h5>
                      
                      <div className="p-4 bg-red-50 text-red-950 border border-red-100 rounded-xl text-sm mb-4 text-justify leading-relaxed">
                        <strong>Escenario de Soporte Técnico:</strong> La laptop de un estudiante de informática fue atacada por malware encriptando archivos y bloqueando el inicio del S.O. con pantallas azules. Se requiere un purgado completo del disco.
                      </div>

                      <div className="space-y-3.5">
                        {[
                          { phase: "1. Grabación del Pendrive USB", desc: "Crear pendrive USB booteable en Rufus configurando la ISO oficial de Windows en esquema de partición GPT con modo UEFI exclusivo." },
                          { phase: "2. Formateo y Purgado", desc: "Arrancar el portátil desde el USB UEFI. En la ventana de discos, eliminar todas las particiones del SSD infectadas para borrar los residuos del malware." },
                          { phase: "3. Configuración Post-Instalación", desc: "Correr Windows Update para obtener el driver de red y gráficos de fabricante. Reinstalar herramientas críticas como Git, VS Code y antivirus." }
                        ].map((item, idx) => (
                          <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-205 text-sm">
                            <strong className="text-violet-750 block text-xs mb-1 font-bold">{item.phase}</strong>
                            <p className="text-slate-600 text-xs leading-relaxed text-justify">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 2.4 Limpieza de Temporales & Recuperación de Datos --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-5 border border-violet-200 text-violet-750 text-xs font-bold uppercase tracking-wider mb-4">
                  2.4 Liberación & Rescate
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Depuración de Archivos del Sistema y Recuperación de Datos
                </h4>
                
                <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
                  {/* Temporary cleaner commands */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-slate-800 text-base mb-4">Limpieza de Archivos Temporales</h5>
                      <div className="space-y-4 font-mono text-sm">
                        <div className="p-3.5 bg-slate-900 text-[#a6e3a1] rounded-xl border border-slate-850">
                          <span className="text-slate-500 block mb-1.5 text-xs"># Comandos de Consola (Windows CMD)</span>
                          <ul className="space-y-1.5 text-slate-300 text-xs">
                            <li><span className="text-[#89b4fa]">temp</span> - Purgado de temporales globales de Windows.</li>
                            <li><span className="text-[#89b4fa]">%temp%</span> - Purgado de temporales de usuario local.</li>
                            <li><span className="text-[#89b4fa]">prefetch</span> - Borrado de precarga de procesos obsoletos.</li>
                          </ul>
                        </div>

                        <div className="p-3.5 bg-slate-900 text-[#89b4fa] rounded-xl border border-slate-850">
                          <span className="text-slate-500 block mb-1.5 text-xs"># Liberador Lógico (Cleanmgr)</span>
                          <p className="text-slate-300 text-xs leading-relaxed text-justify">
                            Correr 'cleanmgr.exe', seleccionar disco C y hacer clic en 'Limpiar archivos de sistema' para borrar cachés de Windows Update viejos.
                          </p>
                        </div>

                        <div className="p-3.5 bg-slate-900 text-[#f9e2af] rounded-xl border border-slate-855">
                          <span className="text-slate-500 block mb-1.5 text-xs"># Comandos en Terminal Linux</span>
                          <ul className="space-y-1 text-slate-300 text-xs">
                            <li>$ <span className="text-white">rm -rf ~/.cache/*</span> <span className="text-slate-500">// Caché local</span></li>
                            <li>$ <span className="text-white">sudo apt-get clean</span> <span className="text-slate-500">// Caché de descargas apt</span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recuva recovery steps */}
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-slate-800 text-base mb-3">Recuperación de Datos en Medios Formateados</h5>
                      <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4">
                        Pasos técnicos recomendados para rescatar archivos de laboratorios perdidos por un formateo accidental en una memoria USB (FAT32):
                      </p>

                      <div className="space-y-4 text-sm text-slate-650">
                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <strong className="text-slate-800 block mb-1 text-sm">La Regla de Oro del Rescate</strong>
                          <p className="text-slate-500 text-xs leading-relaxed text-justify font-semibold text-rose-650">
                            Detenga inmediatamente la escritura o copiado en la unidad USB. Cualquier dato nuevo sobreescribirá los clústeres físicos lógicos donde se encuentran los archivos borrados, perdiéndose permanentemente.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <strong className="text-slate-800 block mb-1 text-sm">Restauración con Recuva (Gráfico)</strong>
                          <p className="text-slate-500 text-xs leading-relaxed text-justify">
                            Insertar el USB, correr Recuva en escaneo profundo buscando firmas de archivos. Restaurar la información guardándola en un disco local diferente.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-xl border border-slate-200">
                          <strong className="text-slate-800 block mb-1 text-sm">Restauración con PhotoRec (Consola)</strong>
                          <p className="text-slate-500 text-xs leading-relaxed text-justify">
                            En caso de que el USB figure como formato dañado 'RAW', correr PhotoRec por terminal para barrer y recuperar las cabeceras binarias de los archivos en bruto.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 2.5 Solución de 6 Fallas Comunes --- */}
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-violet-100/50 rounded-bl-full opacity-40 z-0"></div>
              
              <div className="relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-violet-5 border border-violet-200 text-violet-750 text-xs font-bold uppercase tracking-wider mb-4">
                  2.5 Soporte Diario
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-slate-900 leading-tight">
                  Base de Conocimiento: Solución de 6 Fallas Comunes
                </h4>
                <p className="text-slate-655 text-sm md:text-base leading-relaxed text-justify mb-8">
                  Soluciones rápidas y de aplicación inmediata para problemas de soporte diarios en hardware, software de red, audio, distorsiones visuales y BIOS del equipo:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {commonFaults.map((fault) => {
                    const FaultIcon = fault.icon;
                    return (
                      <div key={fault.id} className="bg-slate-50/75 rounded-2xl p-6 border border-slate-105 flex flex-col justify-between hover:bg-white hover:border-violet-350 hover:shadow-md transition-all duration-200">
                        <div>
                          <div className="flex items-center gap-2.5 mb-4 border-b border-slate-200/60 pb-3">
                            <div className="p-2.5 bg-white text-violet-700 rounded-xl shadow-sm border border-slate-100">
                              <FaultIcon size={16} />
                            </div>
                            <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wider">{fault.title.substring(3)}</h5>
                          </div>
                          
                          <div className="space-y-4 text-xs leading-relaxed">
                            <div>
                              <span className="text-[10px] font-bold text-slate-450 uppercase tracking-wider block">Diagnóstico Técnico</span>
                              <p className="text-slate-600 text-justify text-xs mt-1 leading-relaxed">{fault.diag}</p>
                            </div>
                            <div className="pt-3 border-t border-slate-205">
                              <span className="text-[10px] font-bold text-violet-650 uppercase tracking-wider block">Solución Técnica</span>
                              <p className="text-slate-800 text-justify text-xs font-medium bg-violet-50/40 p-3 rounded-xl border border-violet-150/40 mt-1.5 leading-relaxed">
                                {fault.solution}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
