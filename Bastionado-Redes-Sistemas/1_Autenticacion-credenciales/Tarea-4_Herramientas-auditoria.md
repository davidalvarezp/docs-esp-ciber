# 🟦 TAREA 4

## Ejercicio 1-9

## Herramientas de auditoría

Incluye:

* **Purple Knight**
* **PingCastle**
* **Forest Druid**
  (+ Extra Security Compliance Toolkit)

---

# 1️⃣ PURPLE KNIGHT

## 🎯 Objetivo

Detectar un **IOE crítico**, corregirlo y demostrar que queda solucionado.

---

## 1.1 Ejecutar Purple Knight

1. Copia Purple Knight en el **Controlador de Dominio**
2. Ejecuta:

```
PurpleKnight.exe
```

(o PowerShell como administrador si es versión script)

3. Espera a que termine el análisis

---

## 1.2 Localizar un IOE crítico (ROJO)

Busca un IOE **crítico (rojo)**
❌ **NO uses el del caso práctico del profesor**

Ejemplos válidos típicos:

* SMB Signing disabled
* NTLMv1 enabled
* LDAP signing not required
* Weak Kerberos settings
* LLMNR enabled

📸 **Captura obligatoria**
→ IOE en rojo claramente visible.

---

## 1.3 Corregir el IOE (ejemplo: SMB Signing)

📍 **Ruta**

```
Administración de directivas de grupo
→ Default Domain Policy
→ Editar
→ Configuración del equipo
→ Configuración de Windows
→ Configuración de seguridad
→ Directivas locales
→ Opciones de seguridad
```

Configurar:

* **Microsoft network client: Digitally sign communications (always)** → Habilitado
* **Microsoft network server: Digitally sign communications (always)** → Habilitado

Forzar políticas:

```
gpupdate /force
```

📸 **Captura**
→ Política habilitada.

---

## 1.4 Reejecutar Purple Knight

1. Ejecuta Purple Knight de nuevo
2. Comprueba el IOE

📸 **Captura obligatoria**
→ El mismo IOE ahora en **VERDE**.

---

# 2️⃣ PINGCASTLE

## 🎯 Objetivo

Detectar una **anomalía**, corregirla y demostrar que desaparece.

---

## 2.1 Ejecutar PingCastle

1. Copia PingCastle al DC
2. Ejecuta:

```
PingCastle.exe
```

3. Opción:

```
1 → Health Check
```

Se genera informe HTML.

---

## 2.2 Localizar una anomalía

Busca una **anomalía clara**, por ejemplo:

* NTLMv1 allowed
* Unsecure LDAP
* Too many Domain Admins
* Password never expires
* SMB not signed

📸 **Captura obligatoria**
→ Sección de la anomalía con:

* Regla anterior
* Regla detectada
* Regla posterior

---

## 2.3 Corregir la anomalía (ejemplo: Password never expires)

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ Usuario afectado
→ Propiedades
→ Pestaña Cuenta
```

Desmarcar:

* ❌ La contraseña nunca expira

Aceptar.

📸 **Captura**
→ Propiedades corregidas.

---

## 2.4 Reejecutar PingCastle

1. Ejecutar PingCastle otra vez
2. Abrir nuevo informe

📸 **Captura obligatoria**
→ La anomalía **ya no aparece** en el listado.

---

# 3️⃣ FOREST DRUID

## 🎯 Objetivo

Detectar y eliminar una **relación peligrosa con Tier 0**.

---

## 3.1 Ejecutar Forest Druid

1. Ejecuta Forest Druid en el DC
2. Analiza los resultados

Busca objetos **Tier 0**:

* Domain Admins
* Enterprise Admins
* Administrators
* Controladores de dominio

---

## 3.2 Identificar relación peligrosa

Ejemplos comunes:

* Usuario normal miembro de Domain Admins
* Grupo no crítico con permisos sobre DC
* Herencia indebida

📸 **Captura obligatoria**
→ Objeto Tier 0 y la relación peligrosa.

---

## 3.3 Eliminar la relación

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ Grupo Domain Admins
→ Propiedades
→ Pestaña Miembros
```

Eliminar:

* Usuario/grupo indebido

Aceptar.

📸 **Captura**
→ Grupo corregido.

---

## 3.4 Comprobar con Forest Druid

1. Ejecutar Forest Druid de nuevo
2. Verificar resultado

📸 **Captura obligatoria**
→ Relación Tier 0 **eliminada**.

---

# ⭐ EJERCICIO EXTRA (+2 puntos)

## Microsoft Security Compliance Toolkit

---

## Extra 1️⃣ Comparar con línea base

1. Abrir **Microsoft Security Compliance Toolkit**
2. Seleccionar:

   * Producto: Windows Server 2019
   * Baseline: Security Baseline
3. Comparar con el sistema

📸 **Captura**
→ Resultado del análisis inicial.

---

## Extra 2️⃣ Aplicar una mejora

Ejemplo:

* Habilitar auditoría avanzada
* Endurecer políticas de contraseñas
* Deshabilitar protocolos inseguros

📍 Ruta típica:

```
Administración de directivas de grupo
→ Default Domain Policy
→ Configuración de seguridad
```

Aplicar mejora.

---

## Extra 3️⃣ Recomparar

1. Ejecutar comparación otra vez

📸 **Captura**
→ Mejora reflejada en el resultado.

---

# ✅ FIN TAREA 4 – CHECKLIST FINAL

✔ Purple Knight:

* IOE detectado
* IOE corregido
* IOE validado

✔ PingCastle:

* Anomalía detectada
* Anomalía corregida
* Anomalía desaparecida

✔ Forest Druid:

* Relación Tier 0 detectada
* Relación eliminada
* Comprobación final

✔ Extra:

* Baseline comparada
* Mejora aplicada
* Resultado mejorado
