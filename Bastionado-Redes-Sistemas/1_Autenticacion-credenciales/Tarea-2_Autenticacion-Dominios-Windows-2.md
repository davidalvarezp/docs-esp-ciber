# 🟦 TAREA 2

## Ejercicios 1-6 y 1-7

## Autenticación en Dominios Windows – 2

---

# 1️⃣ Grupos restringidos (administradores locales)

## 🎯 Objetivo

Controlar **quién es administrador local** en los equipos mediante GPO.

---

## 1.1 Crear grupos para administración local

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ OU_Grupos
→ Clic derecho
→ Nuevo
→ Grupo
```

🛠 Crear estos grupos:

* `G-Admins-Dominio`
* `G-Admins-IT`

🛠 Configuración:

* Ámbito: **Global**
* Tipo: **Seguridad**

📸 **Captura**
→ Propiedades de un grupo.

---

## 1.2 Crear GPO para grupos restringidos

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Administración de directivas de grupo
```

1. Clic derecho sobre el dominio
2. **Crear un GPO en este dominio y vincularlo aquí**
3. Nombre:

   * `GPO-Grupos-Restringidos`

📸 **Captura**
→ GPO creado y vinculado.

---

## 1.3 Configurar grupos restringidos

📍 **Ruta**

```
Administración de directivas de grupo
→ GPO-Grupos-Restringidos
→ Editar
```

```
Configuración del equipo
→ Directivas
→ Configuración de Windows
→ Configuración de seguridad
→ Grupos restringidos
```

---

### Grupo restringido 1 (Dominio)

1. Clic derecho → **Agregar grupo**
2. Escribir: `Administrators`
3. En **Miembros de este grupo**:

   * Agregar `G-Admins-Dominio`
4. Aceptar

---

### Grupo restringido 2 (Departamento IT)

1. Clic derecho → **Agregar grupo**
2. Grupo: `Administrators`
3. En **Miembros de este grupo**:

   * Agregar `G-Admins-IT`

📸 **Captura**
→ Ventana de Grupos restringidos con grupos añadidos.

---

# 2️⃣ Usuarios protegidos (Protected Users)

## 🎯 Objetivo

Proteger credenciales de usuarios críticos.

---

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ Contenedor Users
```

1. Doble clic en **Protected Users**
2. Pestaña **Miembros**
3. Agregar **2 usuarios** (ejemplo):

   * LuisIT
   * AnaRRHH

Aceptar.

📸 **Captura**
→ Grupo Protected Users con miembros.

---

# 3️⃣ Políticas de autenticación y silos (Kerberos 2h)

## 🎯 Objetivo

Limitar autenticación y duración del ticket Kerberos.

---

## 3.1 Crear política de autenticación

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Centro de administración de Active Directory
```

---

1. Dominio → **Authentication Policies**
2. **New → Authentication Policy**
3. Nombre:

   * `AP-Usuarios-Criticos`
4. Configurar:

   * Ticket Kerberos máximo: **2 horas**
5. Guardar

📸 **Captura**
→ Propiedades de la Authentication Policy.

---

## 3.2 Crear silo de autenticación

📍 **Ruta**

```
ADAC
→ Dominio
→ Authentication Policy Silos
```

1. **New → Authentication Policy Silo**
2. Nombre:

   * `SILO-Criticos`
3. Asociar:

   * Authentication Policy creada
4. Usuarios permitidos:

   * Añadir **1 usuario** (ejemplo: LuisIT)
5. Equipos permitidos:

   * Añadir equipos Windows 10
6. Guardar

📸 **Captura**
→ Silo con usuarios y equipos asignados.

---

# 4️⃣ Habilitar Credential Guard y Remote Credential Guard

## 🎯 Objetivo

Proteger credenciales en memoria.

---

## 4.1 Crear GPO de seguridad

📍 **Ruta**

```
Administración de directivas de grupo
→ Clic derecho en el dominio
→ Crear GPO en este dominio y vincularlo aquí
```

Nombre:

* `GPO-Credential-Guard`

📸 **Captura**
→ GPO creado.

---

## 4.2 Configurar Credential Guard

📍 **Ruta**

```
Editar GPO-Credential-Guard
→ Configuración del equipo
→ Directivas
→ Plantillas administrativas
→ Sistema
→ Device Guard
```

1. Abrir **Activar seguridad basada en virtualización**
2. Habilitado
3. Seleccionar:

   * Credential Guard habilitado
4. Aceptar

---

## 4.3 Remote Credential Guard

📍 **Ruta**

```
Configuración del equipo
→ Plantillas administrativas
→ Sistema
→ Credenciales delegadas
```

1. **Restringir delegación de credenciales**
2. Habilitar
3. Seleccionar **Remote Credential Guard**

📸 **Captura**
→ Políticas habilitadas.

---

# 5️⃣ Deshabilitar LLMNR

📍 **Ruta**

```
GPO-Credential-Guard
→ Editar
→ Configuración del equipo
→ Plantillas administrativas
→ Red
→ Cliente DNS
```

1. **Desactivar resolución de nombres multihomed (LLMNR)**
2. **Habilitado**

📸 **Captura**
→ Política LLMNR deshabilitada.

---

# 6️⃣ Deshabilitar NetBIOS sobre TCP/IP

📍 **Ruta**

```
Panel de control
→ Centro de redes
→ Cambiar configuración del adaptador
→ Ethernet
→ Propiedades
→ IPv4
→ Propiedades
→ Avanzadas
→ WINS
```

Seleccionar:

* ☑ **Deshabilitar NetBIOS sobre TCP/IP**

Aceptar todo.

📸 **Captura**
→ Pestaña WINS con NetBIOS deshabilitado.

---

# 7️⃣ Mitigar SMB Relay

📍 **Ruta**

```
GPO-Credential-Guard
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

📸 **Captura**
→ Opciones de seguridad SMB firmadas.

---

# 8️⃣ Forzar políticas

En servidor y clientes:

```
gpupdate /force
```

---

# ✅ FIN TAREA 2 – CHECKLIST FINAL

✔ Grupos restringidos creados
✔ GPO aplicada
✔ Usuarios en Protected Users
✔ Silo de autenticación creado
✔ Kerberos limitado a 2 horas
✔ Credential Guard activo
✔ LLMNR deshabilitado
✔ NetBIOS deshabilitado
✔ SMB Relay mitigado
