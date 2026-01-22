# 🟦 TAREA 1

## Ejercicios 1-4 y 1-5

## Autenticación en Dominios Windows

---

# 1️⃣ Preparación inicial del servidor

## 1.1 Configurar IP estática

📍 **Ruta exacta**

```
Panel de control
→ Centro de redes y recursos compartidos
→ Cambiar configuración del adaptador
→ Clic derecho en Ethernet
→ Propiedades
→ Protocolo de Internet versión 4 (TCP/IPv4)
→ Propiedades
```

🛠 **Configurar**

* Dirección IP: `192.168.X.1`
* Máscara: `255.255.255.0`
* Puerta de enlace: `192.168.X.1`
* DNS preferido: `192.168.X.1`

Aceptar todo.

📸 **Captura**
→ Ventana de configuración IPv4 con la IP puesta.

---

## 1.2 Cambiar nombre del servidor

📍 **Ruta**

```
Configuración
→ Sistema
→ Acerca de
→ Cambiar nombre de este equipo
```

🛠 **Nombre**

* `SRV-DC01`

Aceptar → **Reiniciar**

📸 **Captura**
→ Pantalla “Acerca de” con el nombre cambiado.

---

# 2️⃣ Instalación de Active Directory Domain Services (AD DS)

📍 **Ruta**

```
Administrador del servidor
→ Administrar
→ Agregar roles y características
```

🛠 **Asistente**

1. Instalación basada en roles o características
2. Servidor local
3. Roles:

   * ☑ **Servicios de dominio de Active Directory**
4. Agregar características
5. Siguiente → Instalar

📸 **Captura**
→ Rol AD DS marcado antes de instalar.

---

# 3️⃣ Promoción a Controlador de Dominio (crear dominio)

📍 **Ruta**

```
Administrador del servidor
→ Bandera amarilla
→ Promover este servidor a controlador de dominio
```

---

## 3.1 Crear dominio nuevo

🛠 Seleccionar:

* ☑ **Agregar un nuevo bosque**
* Nombre del dominio:

  * `empresaX.local`
    (ejemplo: `redcorp.local`)

📸 **Captura**
→ Pantalla con el nombre del dominio.

---

## 3.2 Opciones del DC

🛠 Configurar:

* Nivel bosque: **Windows Server 2016**
* Nivel dominio: **Windows Server 2016**
* ☑ Servidor DNS
* ☑ Catálogo global
* Contraseña DSRM (cualquiera, anótala)

📸 **Captura**
→ Pantalla de opciones del DC con DNS marcado.

---

## 3.3 Finalizar

* Siguiente en todo
* Ignorar aviso DNS
* Instalar
* El servidor se reinicia

📸 **Captura**
→ Pantalla de comprobación previa o instalación.

---

# 4️⃣ Comprobación del dominio

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ Usuarios y equipos de Active Directory
```

Debe aparecer tu dominio.

📸 **Captura**
→ Consola ADUC mostrando el dominio.

---

# 5️⃣ Creación de Unidades Organizativas (OU)

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ Clic derecho sobre el dominio
→ Nuevo
→ Unidad organizativa
```

---

## 5.1 OUs principales (crear estas)

* `OU_Usuarios`
* `OU_Grupos`
* `OU_Equipos`

---

## 5.2 OUs de departamentos

Dentro de **OU_Usuarios**, crear:

* `IT`
* `RRHH`
* `Finanzas`
* `Ventas`

📸 **Captura**
→ Árbol completo de OUs.

---

# 6️⃣ Creación de grupos de seguridad

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ OU_Grupos
→ Clic derecho
→ Nuevo
→ Grupo
```

🛠 **Crear 4 grupos**

* `G_IT`
* `G_RRHH`
* `G_Finanzas`
* `G_Ventas`

🛠 **Configuración**

* Ámbito: **Global**
* Tipo: **Seguridad**

📸 **Captura**
→ Propiedades de un grupo (pestaña General).

---

# 7️⃣ Creación de usuarios

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ OU_Usuarios
→ (Departamento)
→ Clic derecho
→ Nuevo
→ Usuario
```

---

## 7.1 Usuarios mínimos (ejemplo válido)

| Usuario  | OU       |
| -------- | -------- |
| LuisIT   | IT       |
| AnaRRHH  | RRHH     |
| MartaFin | Finanzas |
| JuanVen  | Ventas   |
| SaraIT   | IT       |

🛠 Durante la creación:

* Definir contraseña
* ❌ Desmarcar “Cambiar contraseña al iniciar” (opcional)

📸 **Captura**
→ Usuario creado dentro de su OU.

---

# 8️⃣ Asociar usuarios a grupos

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ OU_Grupos
→ Doble clic en el grupo
→ Pestaña Miembros
→ Agregar
```

🛠 Ejemplo:

* `G_IT` → LuisIT, SaraIT
* `G_RRHH` → AnaRRHH

📸 **Captura**
→ Pestaña Miembros con usuarios visibles.

---

# 9️⃣ Creación de equipos (objetos AD)

📍 **Ruta**

```
Usuarios y equipos de Active Directory
→ OU_Equipos
→ Clic derecho
→ Nuevo
→ Equipo
```

🛠 **Ejemplos**

* `PC-LUISIT`
* `PC-ANARRHH`
* `PC-MARTAFIN`
* `PC-JUANVEN`
* `PC-SARAIT`

📸 **Captura**
→ OU_Equipos con los equipos creados.

---

# 🔟 Instalación del rol DHCP

📍 **Ruta**

```
Administrador del servidor
→ Administrar
→ Agregar roles y características
```

🛠

* ☑ **Servidor DHCP**
* Agregar características
* Instalar

📸 **Captura**
→ Rol DHCP marcado.

---

# 1️⃣1️⃣ Autorizar servidor DHCP

📍 **Ruta**

```
Administrador del servidor
→ Herramientas
→ DHCP
```

🛠

* Clic derecho en el servidor
* **Autorizar**
* Esperar
* **Actualizar**

Debe verse **flecha verde**.

📸 **Captura**
→ Servidor DHCP autorizado.

---

# 1️⃣2️⃣ Crear ámbito DHCP

📍 **Ruta**

```
DHCP
→ IPv4
→ Clic derecho
→ Ámbito nuevo
```

🛠 **Configuración**

* Nombre: `Ambito_Empresa`
* IP inicio: `192.168.X.10`
* IP final: `192.168.X.50`
* Máscara: `255.255.255.0`
* Puerta de enlace: `192.168.X.1`
* DNS: `192.168.X.1`
* Activar ámbito: **Sí**

📸 **Captura**
→ Resumen del ámbito activo.

---

# ✅ FIN TAREA 1 – CHECKLIST FINAL

✔ Dominio creado
✔ OUs organizadas
✔ Usuarios creados
✔ Grupos creados
✔ Usuarios en grupos
✔ Equipos creados
✔ DHCP instalado
✔ DHCP autorizado
✔ Ámbito activo
