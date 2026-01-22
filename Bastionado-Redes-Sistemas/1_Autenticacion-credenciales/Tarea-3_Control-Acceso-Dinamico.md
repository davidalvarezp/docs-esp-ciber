# 🟦 TAREA 3

## Ejercicio 1-8

## Control de Acceso Dinámico (DAC)

---

# 0️⃣ Requisitos previos (haz esto primero)

## 0.1 Instalar File Server Resource Manager (FSRM)

📍 **Ruta**

```
Administrador del servidor
→ Administrar
→ Agregar roles y características
```

🛠 Asistente:

* Instalación basada en roles
* Servidor local
* **Servicios de archivo y almacenamiento**
* **Servicios de archivos**
* ☑ **Administrador de recursos del servidor de archivos**
* Instalar

📸 **Captura**
→ Rol FSRM marcado.

---

# 1️⃣ Crear carpeta compartida

📍 **Ruta**

```
Explorador de archivos
→ Disco C:
```

🛠 Crear carpeta:

```
C:\Informes
```

(No compartas aún, DAC va por NTFS)

📸 **Captura**
→ Carpeta C:\Informes creada.

---

# 2️⃣ Crear Propiedad de Recurso (TipoInforme)

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Centro de administración de Active Directory
```

---

## 2.1 Crear propiedad

📍

```
ADAC
→ Dynamic Access Control
→ Resource Properties
→ New → Resource Property
```

🛠 Configurar:

* Nombre: `TipoInforme`
* Descripción: Tipo de informe
* Valores permitidos:

  * `Tecnico`
  * `Financiero`
* ☑ Permitir clasificación manual

Guardar.

📸 **Captura**
→ Propiedad TipoInforme con valores.

---

# 3️⃣ Crear archivos y clasificar manualmente

📍 **Ruta**

```
C:\Informes
```

🛠 Crear archivos:

* `InformeTecnico.txt`
* `InformeFinanciero.txt`

---

## 3.1 Clasificar manualmente

📍 **Ruta**

```
Clic derecho archivo
→ Propiedades
→ Pestaña Clasificación
```

Asignar:

* InformeTecnico.txt → `TipoInforme = Tecnico`
* InformeFinanciero.txt → `TipoInforme = Financiero`

Aceptar.

📸 **Captura**
→ Clasificación aplicada a cada archivo.

---

# 4️⃣ Grupos usados para DAC

Usa **grupos existentes del dominio**, por ejemplo:

* `G_IT` → Informes Técnicos
* `G_Finanzas` → Informes Financieros

📸 **Captura**
→ Propiedades de cada grupo.

---

# 5️⃣ Crear Claim Types

## 5.1 Claim Type de Usuario – Country

📍 **Ruta**

```
ADAC
→ Dynamic Access Control
→ Claim Types
→ New → Claim Type
```

🛠 Configurar:

* Nombre: `CT-Country`
* Tipo: **Usuario**
* Atributo AD: `country`
* Valores sugeridos:

  * `ES`
  * (opcional) `FR`
* ☑ Requerido

Guardar.

📸 **Captura**
→ Claim Type CT-Country.

---

## 5.2 Claim Type de Equipo – Sistema Operativo

📍 **Ruta**

```
ADAC
→ Claim Types
→ New → Claim Type
```

🛠 Configurar:

* Nombre: `CT-SO`
* Tipo: **Equipo**
* Atributo AD: `operatingSystem`
* Valor:

  * `Windows 10`
* ☑ Requerido

Guardar.

📸 **Captura**
→ Claim Type CT-SO.

---

# 6️⃣ Crear Central Access Rule (CAR)

📍 **Ruta**

```
ADAC
→ Dynamic Access Control
→ Central Access Rules
→ New → Central Access Rule
```

---

## 6.1 Configuración de la CAR

Nombre:

* `CAR-Informes`

---

### Condición 1 – Informes Técnicos

🛠 Regla:

```
Si TipoInforme == Tecnico
AND Usuario pertenece a G_IT
AND CT-Country == ES
AND CT-SO == Windows 10
→ Permitir acceso
```

---

### Condición 2 – Informes Financieros

🛠 Regla:

```
Si TipoInforme == Financiero
AND Usuario pertenece a G_Finanzas
AND CT-Country == ES
AND CT-SO == Windows 10
→ Permitir acceso
```

Guardar.

📸 **Captura**
→ CAR completa con todas las condiciones.

---

# 7️⃣ Crear Central Access Policy (CAP)

📍 **Ruta**

```
ADAC
→ Central Access Policies
→ New → Central Access Policy
```

🛠 Configurar:

* Nombre: `CAP-Informes`
* Agregar la regla:

  * `CAR-Informes`

Guardar.

📸 **Captura**
→ CAP con la CAR asociada.

---

# 8️⃣ Aplicar la CAP mediante GPO

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Administración de directivas de grupo
```

---

## 8.1 Crear GPO DAC

1. Clic derecho en el dominio
2. **Crear GPO en este dominio y vincularlo aquí**
3. Nombre:

   * `GPO-DAC`

📸 **Captura**
→ GPO creado.

---

## 8.2 Configurar GPO DAC

📍

```
Editar GPO-DAC
→ Configuración del equipo
→ Directivas
→ Configuración de Windows
→ Configuración de seguridad
→ Central Access Policies
```

🛠:

* Seleccionar `CAP-Informes`
* Habilitar

📸 **Captura**
→ CAP aplicada en la GPO.

---

# 9️⃣ Activar DAC en la carpeta

📍 **Ruta**

```
C:\Informes
→ Clic derecho
→ Propiedades
→ Seguridad
→ Avanzado
→ Central Policy
```

🛠:

* Aplicar `CAP-Informes`
* Aceptar

📸 **Captura**
→ Política central aplicada a la carpeta.

---

# 🔟 Clasificación automática con FSRM

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Administrador de recursos del servidor de archivos
```

---

## 10.1 Regla Técnico

📍

```
Classification Management
→ Classification Rules
→ Create Classification Rule
```

🛠:

* Nombre: `Auto-Tecnico`
* Propiedad: `TipoInforme`
* Valor: `Tecnico`
* Contenido contiene:

  * tecnico
  * soporte
  * sistema
  * hardware

Guardar.

---

## 10.2 Regla Financiero

🛠:

* Nombre: `Auto-Financiero`
* Propiedad: `TipoInforme`
* Valor: `Financiero`
* Contenido contiene:

  * financiero
  * presupuesto
  * contabilidad
  * importe

Guardar.

📸 **Captura**
→ Ambas reglas FSRM.

---

## 10.3 Ejecutar clasificación

📍

```
Classification Management
→ Run Classification With All Rules Now
```

---

## 10.4 Crear archivos automáticos

En `C:\Informes` crear:

* `AutoTecnico.txt` → texto con “sistema hardware tecnico”
* `AutoFinanciero.txt` → texto con “presupuesto contabilidad”

📸 **Captura**
→ Archivos clasificados automáticamente.

---

# 1️⃣1️⃣ Pruebas de acceso (ACCESO EFECTIVO)

📍 **Ruta**

```
C:\Informes
→ Clic derecho archivo
→ Propiedades
→ Seguridad
→ Acceso efectivo
```

---

## Casos OBLIGATORIOS

✔ Acceso permitido:

* Usuario correcto
* Grupo correcto
* country = ES
* Windows 10

❌ Acceso denegado:

* Usuario con country ≠ ES
* Usuario desde Windows 11
* Usuario fuera del grupo
* Archivo mal clasificado
* Archivo clasificado automáticamente

📸 **Captura**
→ Acceso efectivo mostrando:

* Condición que permite
* Condición que bloquea

---

# ✅ FIN TAREA 3 – CHECKLIST FINAL

✔ Propiedad TipoInforme creada
✔ Clasificación manual y automática
✔ Claim Types usuario y equipo
✔ CAR completa
✔ CAP creada
✔ GPO aplicada
✔ DAC activo en carpeta
✔ Acceso efectivo probado
