# Quechualingo - Landing Page 🦙

*¡Bienvenido al proyecto de Quechualingo!*  
Esta es una landing page desarrollada con *HTML, **Bootstrap* y *JavaScript* puro para presentar la plataforma educativa Quechualingo, enfocada en el aprendizaje del idioma quechua de forma divertida y gratuita.

---

## 📌 Funcionalidades

•⁠  ⁠✅ Frase motivadora para captar la atención.
•⁠  ⁠✅ Formulario de espera para recolectar correos.
•⁠  ⁠✅ Explicación breve sobre el proyecto.
•⁠  ⁠✅ Lista de características destacadas.
•⁠  ⁠✅ Diseño responsive con Bootstrap.
•⁠  ⁠✅ Código listo para conectar con Supabase o Google Sheets.

---

## 🧱 Tecnologías utilizadas
•⁠  Astro
•⁠  ⁠HTML5
•⁠  ⁠CSS3
•⁠  ⁠Bootstrap 5
•⁠  ⁠JavaScript (vanilla)
•⁠  ⁠Supabase (opcional) -> Optional to save waiting list

---

## 📁 Estructura del Proyecto

```
quechualingo/
│
├── public/                # Archivos estáticos (imágenes, favicon, etc.)
│   ├── favicon.svg
│   └── logo.png
│
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   │
│   ├── layouts/           # Layouts generales
│   │   └── BaseLayout.astro
│   │
│   ├── pages/             # Rutas (cada archivo .astro es una ruta)
│   │   ├── index.astro    # Página principal
│   │   ├── about.astro    # Página "Acerca de" (opcional)
│   │   └── contact.astro  # Página de contacto (opcional)
│   │
│   ├── styles/            # Archivos de estilo
│   │   └── global.css
│   │
│   └── utils/             # Funciones utilitarias (opcional si necesitas lógica)
│       └── helpers.ts
│
├── astro.config.mjs       # Configuración de Astro
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript (opcional pero recomendado)
└── README.md              # Descripción del proyecto
```

## 🏗️ Arquitectura del Proyecto

### Módulo Landing

#### 1. Capa de Presentación (presentation)
- **Components**: Componentes UI reutilizables
- **Styles**: Estilos CSS específicos del módulo

#### 2. Capa de Dominio (domain)
- **Models**: Definición de entidades y reglas de negocio

#### 3. Capa de Datos (data)
- **Repositories**: Manejo de datos y persistencia
- **Services**: Lógica de negocio y conexión con APIs

### Características del Módulo Landing
- Implementación de Clean Architecture
- Separación clara de responsabilidades
- Componentes modulares y reutilizables
- Integración con servicios externos (Supabase/Google Sheets)


---

## 🚀 ¿Qué incluye esta página?

### 🧭 Encabezado
Frase principal en una sola línea:
	⁠"¡Aprende quechua gratis, fácil y jugando!"

### 📬 Formulario de espera
Permite al usuario ingresar su correo para unirse a la lista de espera.

### 🧾 ¿Qué es Quechualingo?
Breve párrafo explicativo del propósito de la plataforma.

### 🧩 Características
•⁠  ⁠✅ Lecciones por niveles (1 al 10)
•⁠  ⁠✅ Vocabulario útil y expresiones cotidianas
•⁠  ⁠✅ Juegos interactivos y audio
•⁠  ⁠✅ Seguimiento personalizado
•⁠  ⁠✅ 100% gratuito

### 🔻 Footer
Mensaje de derechos reservados:  
⁠ ©️ 2025 Quechualingo. Todos los derechos reservados. ⁠

