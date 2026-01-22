## TAREA 1 – Instalación de AD DS, creación del Dominio y OUs (Windows Server 2019)

---

# 1️⃣ Preparación inicial del servidor

### Objetivo

Dejar el servidor listo para ser Controlador de Dominio.

### 1.1 Configurar IP estática

**Ruta exacta:**

```
Panel de control
→ Centro de redes y recursos compartidos
→ Cambiar configuración del adaptador
→ Clic derecho en Ethernet
→ Propiedades
→ Protocolo de Internet versión 4 (TCP/IPv4)
→ Propiedades
```

**Configurar:**

* IP: `192.168.X.1`
* Máscara: `255.255.255.0`
* Puerta de enlace: `192.168.X.1`
* DNS preferido: `192.168.X.1`

📸 **Captura obligatoria:** ventana de IPv4 configurada.

---

### 1.2 Cambiar nombre del servidor

**Ruta exacta:**

```
Configuración
→ Sistema
→ Acerca de
→ Cambiar nombre de este equipo
```

Ejemplo de nombre:

* `SRV-DC01`

Reiniciar el servidor.

📸 **Captura obligatoria:** ventana "Acerca de" con el nuevo nombre.

---

# 2️⃣ Instalación del rol AD DS

### Objetivo

Instalar Active Directory Domain Services.

**Ruta exacta:**

```
Administrador del servidor
→ Administrar
→ Agregar roles y características
```

**Asistente:**

1. Tipo de instalación → *Instalación basada en características o roles*
2. Servidor de destino → *Servidor local*
3. Roles → ☑ Servicios de dominio de Active Directory (AD DS)
4. Agregar características cuando lo solicite
5. Siguiente → Instalar

📸 **Captura obligatoria:** rol AD DS marcado antes de instalar.

---

# 3️⃣ Promoción a Controlador de Dominio

### Objetivo

Crear un dominio nuevo.

**Ruta exacta:**

```
Administrador del servidor
→ Notificación (bandera amarilla)
→ Promover este servidor a controlador de dominio
```

### 3.1 Configuración del dominio

Seleccionar:

* ☑ Agregar un nuevo bosque
* Dominio raíz: `empresaX.local`

Ejemplo:

* `techsol.local`

📸 **Captura obligatoria:** pantalla con el nombre del dominio.

---

### 3.2 Opciones del controlador de dominio

Configurar:

* Nivel funcional bosque: Windows Server 2016
* Nivel funcional dominio: Windows Server 2016
* ☑ Servidor DNS
* ☑ Catálogo global
* Contraseña DSRM (anotarla)

📸 **Captura obligatoria:** opciones de DC con DNS marcado.

---

### 3.3 Finalizar promoción

* Siguiente en todas las pantallas
* Ignorar advertencia DNS
* Instalar

El servidor se reiniciará automáticamente.

📸 **Captura obligatoria:** pantalla de comprobación previa o inicio de instalación.

---

# 4️⃣ Comprobaciones tras reinicio

### Objetivo

Verificar que el dominio funciona.

**Comprobar:**

```
Administrador del servidor
→ Herramientas
→ Usuarios y equipos de Active Directory
```

Debe aparecer el dominio creado.

📸 **Captura obligatoria:** consola ADUC mostrando el dominio.

---

# 5️⃣ Creación de Unidades Organizativas (OU)

### Objetivo

Crear la estructura lógica del dominio.

**Ruta exacta:**

```
Usuarios y equipos de Active Directory
→ Clic derecho sobre el dominio
→ Nuevo
→ Unidad organizativa
```

### OUs mínimas recomendadas

Crear:

* `OU_Usuarios`
* `OU_Grupos`
* `OU_Equipos`

Dentro de **OU_Usuarios**, crear:

* `RRHH`
* `IT`
* `Finanzas`
* `Ventas`

📸 **Captura obligatoria:** árbol completo de OUs.

---

# 6️⃣ Buenas prácticas (examen)

✔ No usar contenedores por defecto (Users, Computers)
✔ Usar nombres claros de OUs
✔ Justificar que las OUs permiten aplicar GPOs

---

# ✅ Checklist rápida para el examen

✔ IP estática configurada
✔ Nombre del servidor cambiado
✔ AD DS instalado
✔ Dominio creado
✔ DNS funcionando
✔ OUs creadas correctamente
