# 1. Introducción a la Informática Forense

## 1.1 Definición

La informática forense es el conjunto de técnicas y procedimientos destinados a identificar, adquirir, preservar, analizar y documentar evidencias digitales, manteniendo su integridad para que puedan ser admitidas en procesos judiciales o corporativos.

## 1.2 Principio de Locard

Formulado por Edmond Locard (1910):

**“Todo contacto deja un rastro.”**

Se aplica tanto al crimen físico como al digital: logs, metadatos, artefactos, archivos, trazas de red…

## 1.3 Ámbitos de aplicación

* Investigaciones corporativas
* Investigaciones criminales
* Análisis de incidentes de seguridad
* Auditorías y peritajes tecnológicos

---

# 2. Tipos de Investigación

## 2.1 Corporativa

Requiere autorización interna (legal + RR. HH.).
Ejemplos: fugas de información, accesos no autorizados, malware, sabotaje interno.

## 2.2 Criminal

Requiere orden judicial.
Ejemplos: asesinatos, fraude, estafas, ciberdelitos, pornografía infantil.

> El 70% de los casos judiciales en España incluyen evidencia digital.

---

# 3. Informática Forense vs Respuesta a Incidentes

| Informática Forense | Respuesta a Incidentes          |
| ------------------- | ------------------------------- |
| Busca prueba        | Busca restaurar servicio        |
| Enfoque legal       | Enfoque operativo               |
| Reproducible        | A veces improvisado             |
| Exhaustivo          | Rápido y orientado a mitigación |

---

# 4. Objetivos de la Informática Forense

* Establecer qué ocurrió, cuándo, cómo y quién lo hizo.
* Preservar la integridad de las evidencias.
* Evitar pérdidas económicas y reputacionales.
* Apoyar procesamientos legales.
* Estimar impacto e intención.

---

# 5. Delitos Informáticos Comunes

## Insiders

Personas con acceso legítimo: espionaje, filtraciones, sabotaje.

## Externos

Atacantes que explotan vulnerabilidades.

Ejemplos:

* Malware / troyanos
* Inyección SQL
* Phishing / Spear phishing
* Fuerza bruta
* Escalada de privilegios
* DDoS / DoS
* Ransomware
* Esteganografía
* Ciberguerra / ciberterrorismo

---

# 6. Consecuencias para las Organizaciones

* Pérdida de datos
* Paralización de servicios
* Daños reputacionales
* Multas (GDPR / LOPDGDD)
* Pérdidas económicas

---

# 7. Ramas de la Informática Forense

* Forense de sistemas (Windows, Linux, Mac)
* Forense de red
* Forense de dispositivos móviles
* Forense en la nube (Azure, Google, AWS, O365)
* Forense IoT y dispositivos embebidos

---

# 8. Casos Forenses Trabajados

## 8.1 Caso 1 – Phishing en el astillero “Atlántico”

Spear phishing → robo de credenciales → acceso a servidores internos → exfiltración de 500 MB de planos CAD.

Evidencias analizadas: cabeceras de correo, logs, acceso remoto, rastros de exfiltración.

## 8.2 Caso 2 – Incidente en el Servidor Biomédico

Acceso SSH mediante fuerza bruta → ejecución de binario sospechoso *upd-srv* → creación de usuario *sysbackup* → persistencia, C2 en puerto 4444.

Sospecha: posible exfiltración de datos clínicos.

## 8.3 Caso 3 – Homicidio de Xavier Roldán (forense digital)

Portátil con archivos borrados y sincronización cloud.
Teléfono desbloqueado con chat cifrado.
Cámaras muestran intruso a las 21:12.

Necesidad de montar cronología y correlación de evidencias digitales.

---

# 9. Metodología Forense – Visión General

La metodología debe ser:

* Verificable
* Reproducible
* Documentada
* Independiente

---

# 10. Fases del Proceso Forense

## 10.1 Fase Previa

* Preparación del laboratorio
* Material (guantes, bolsas Faraday, bloqueadores de escritura…)
* Autorización legal
* Planificación

## 10.2 Investigación

* Entrevistas, preguntas 5W+1H
* Identificación de evidencias
* Adquisición (regla RFC 3227)
* Preservación y cadena de custodia

## 10.3 Análisis

Ejemplos en Windows:

* MFT
* Registry
* Event Logs
* RAM
* Artefactos forenses

Sysmon permite mayor nivel de detalle.

## 10.4 Fase Posterior

* Informe pericial (ejecutivo + técnico)
* Presentación y defensa en juicio

---

# 11. Metodologías y Guías Forenses (ISO, UNE, RFC)

## 11.1 Principales Normas ISO y UNE

* **UNE 71505:2013** – Sistema de gestión de evidencias electrónicas.
* **UNE 71506:2013** – Metodología para análisis forense.
* **UNE-EN ISO/IEC 30121:2016** – Gobernanza de riesgos en investigación digital.
* **ISO/IEC 27035** – Gestión de incidentes de seguridad.
* **ISO/IEC 27037** – Identificación y adquisición de evidencias.
* **ISO/IEC 27038** – Redacción digital.
* **ISO/IEC 27040** – Seguridad en almacenamiento.
* **ISO/IEC 27041** – Idoneidad de metodologías de investigación.
* **ISO/IEC 27042** – Análisis e interpretación.
* **ISO/IEC 27043** – Principios de investigación de incidentes.
* **ISO/IEC 27050** – Electronic Discovery.
* **UNE 197010 / UNE 197001** – Elaboración de informes periciales.
* **ISO/IEC 17025** – Requisitos de laboratorios forenses.

## 11.2 RFC Relevantes

* **RFC 3227 (2002)**: Guidelines for Evidence Collection and Archiving
* **RFC 4810**: Long-Term Archive Service Requirements
* **RFC 4998**: Evidence Record Syntax (ERS)
* **RFC 6283**: XML Evidence Record Syntax

## 11.3 Otras Guías Importantes

### Generales:

* ENFSI (Europa) – Best practices
* NIJ / DOJ (EE. UU.) – First Responders
* ACPO / NPCC (Reino Unido) – Evidencia digital

### Dispositivos móviles:

* NIST – Mobile Forensics
* SANS – MD Forensics
* SWGDE – Best Practices

### Organismos:

* SWGDE
* ENFSI
* Antiguos: IOCE (extinto)

---

# 12. Práctica: Borrado Permanente en HDD

## 12.1 Diferencia entre eliminar y borrar permanentemente

* **Eliminar:** borra punteros, pero los datos siguen siendo recuperables.
* **Borrado permanente:** sobrescribe físicamente, no recuperable.

## 12.2 Herramientas vistas:

* PhotoRec
* Recuva
* sdelete (Sysinternals)
* shred / wipe
* foremost / scalpel
* scrub
* CAINE Linux

## 12.3 Ejercicios (síntesis)

**Ex1 y Ex2 – PhotoRec y Recuva en Windows**
Recuperación sencilla tras borrado básico.
Ventajas: simples y efectivos.
Problemas: nombres perdidos, recuperación incompleta.

**Ex3 – sdelete en Windows**
Borrado permanente.
PhotoRec y Recuva no recuperan nada → objetivo cumplido.

**Ex4 – Debian + PhotoRec**
Recuperación tras rm -rf.
Problemas de permisos, montaje y rutas.

**Ex5 – Montaje NTFS en Linux + Foremost/Scalpel**
Recuperación tras borrado normal.

**Ex6 – shred o wipe**
Borrado permanente → recuperación imposible.

**Ex7 – CAINE + scrub**
Destrucción total del disco.
Ninguna herramienta recupera nada.

**Ex8 – Reflexión final**
Diferencia entre eliminar y borrar permanentemente.
Riesgos éticos:

* destrucción de prueba,
* obstrucción a la justicia,
* incumplimiento normativo.

Protocolo recomendado:

* autorización escrita,
* inventario,
* método de destrucción,
* informe final.

---

# 13. Borrado Seguro en SSD

## 13.1 Secure Erase (Fabricante)

Restaura el SSD al estado de fábrica.

### Herramientas oficiales:

| Marca      | Herramienta             | SO        |
| ---------- | ----------------------- | --------- |
| Samsung    | Magician                | Windows   |
| Crucial    | Storage Executive       | Win/Linux |
| Kingston   | SSD Manager             | Windows   |
| WD/SanDisk | Dashboard               | Win/macOS |
| Intel      | Memory and Storage Tool | Win/Linux |

## 13.2 Borrado con hdparm (Linux)

Pasos clave:

* Ver disco → `lsblk`, `fdisk -l`
* Ver capacidades → `hdparm -I /dev/sdX`
* Activar contraseña →
  `hdparm --user-master u --security-set-pass NULL /dev/sdX`
* Ejecutar borrado seguro →
  `hdparm --security-erase-enhanced NULL /dev/sdX`

> Riesgo: destruye TODO el contenido.

---

# 14. Gestión de un Caso Forense: Enfoques y Herramientas

## 14.1 Un único forense

Carpetas, txt, excel.
Sencillo y suficiente para casos pequeños.

## 14.2 Equipos forenses

Necesidad de sincronización y control.
Nube privada (Nextcloud, File Browser).

Herramientas profesionales:

* Oxygen Forensics
* Belkasoft
* MSAB XRY

OWLCULUS (open-source, con OSINT, gestión de casos)

---

# 15. El principio “iudex peritus peritorum”

Significado:
El juez es el **“perito de peritos”**.
El juez decide el valor final de la prueba pericial.

## 15.1 Implicaciones:

* El perito es auxiliar, no sustituye al juez.
* El juez puede aceptar o rechazar informes.
* La valoración se basa en la **sana crítica** (lógica, experiencia, objetividad).

## 15.2 Problemas actuales

* Jueces sin formación técnica profunda.
* Riesgo de aceptar informes poco rigurosos.
* Debate sobre aplicar filtros como en el modelo Daubert (EE. UU.).
