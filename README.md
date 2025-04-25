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

•⁠  ⁠HTML5
•⁠  ⁠Bootstrap 5
•⁠  ⁠JavaScript (vanilla)

---

## 📁 Estructura de carpetas

quechualingo-landing/ │ ├── index.html # Página principal ├── css/ │ └── styles.css # Estilos personalizados (si deseas) ├── js/ │ └── main.js # Funciones JS para manejo del formulario └── README.md # Este archivo

yaml
Copiar
Editar

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

---

## 🔌 Conexión con Supabase (opcional)

1.⁠ ⁠Crea un proyecto en [https://supabase.io](https://supabase.io)
2.⁠ ⁠Crea una tabla llamada ⁠ espera ⁠ con:
   - ⁠ id ⁠ (int o UUID, auto-incremental)
   - ⁠ email ⁠ (text)
   - ⁠ fecha ⁠ (timestamp, default: now())
3.⁠ ⁠Usa ⁠ fetch() ⁠ en ⁠ main.js ⁠ para enviar el correo:

```js
async function enviarCorreo(email) {
  const response = await fetch('https://TU-PROYECTO.supabase.co/rest/v1/espera', {
    method: 'POST',
    headers: {
      'apikey': 'TU_API_KEY_PUBLICA',
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ email: email })
  });

  if (response.ok) {
    alert('¡Gracias por unirte a Quechualingo!');
  } else {
    alert('Hubo un problema, inténtalo nuevamente.');
  }
}
