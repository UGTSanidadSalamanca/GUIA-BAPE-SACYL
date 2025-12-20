# 📘 Guía Rápida BAPE SACYL

Aplicación web informativa sobre la Bolsa Abierta y Permanente (BAPE) del Servicio de Salud de Castilla y León (SACYL).

**Desarrollada por:** UGT Sanidad Salamanca  
**Tipo:** Aplicación web estática (HTML, CSS, JavaScript)

## 🎯 Características

### Secciones disponibles:

1. **Acceso BAPE** - Información sobre el proceso de inscripción
2. **Puntuación** - Baremo de méritos y simulador de puntos
3. **Llamamientos** - Tipos de nombramientos y estrategias de disponibilidad
4. **Penalizaciones** - Régimen sancionador y causas justificadas
5. **Novedades** - Fechas importantes y convocatorias actualizadas

### Funcionalidades:

- ✅ **100% estática** - Funciona en GitHub Pages sin servidor
- ✅ **Responsive** - Adaptada a móviles, tablets y escritorio
- ✅ **Simulador de puntos** - Calcula tu puntuación estimada
- ✅ **Novedades actualizables** - Sistema semi-automático de actualización
- ✅ **Diseño moderno** - Interfaz limpia con los colores de UGT

## 🚀 Despliegue

### GitHub Pages

1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `/ (root)`
4. Guarda y espera unos minutos
5. Tu app estará disponible en `https://tuusuario.github.io/nombre-repo`

### Servidor local (desarrollo)

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node.js (si tienes instalado)
npx http-server

# Luego abre: http://localhost:8000
```

## 🔄 Actualizar Novedades

Para actualizar las novedades con información de la web oficial de SACYL:

```bash
# 1. Ejecutar el script
python3 actualizar_novedades.py

# 2. Copiar el código generado de novedades_generadas.txt

# 3. Pegar en script.js en la sección "DATOS ESTÁTICOS"

# 4. Subir a GitHub
git add script.js
git commit -m "Actualizar novedades"
git push
```

Ver [README_ACTUALIZADOR.md](README_ACTUALIZADOR.md) para más detalles.

## 📁 Estructura del proyecto

```
GUIA-BAPE-SACYL/
├── index.html              # Página principal
├── script.js               # Lógica de la aplicación
├── style.css               # Estilos personalizados
├── actualizar_novedades.py # Script de actualización
├── README.md               # Este archivo
└── README_ACTUALIZADOR.md  # Documentación del actualizador
```

## 🛠️ Tecnologías

- **HTML5** - Estructura
- **CSS3** + **Tailwind CSS** - Estilos
- **JavaScript (React)** - Interfaz interactiva
- **React Router** - Navegación entre secciones
- **Lucide Icons** - Iconografía
- **Python** - Script de actualización

## 📞 Contacto

**UGT Sanidad Salamanca**  
📍 Edificio 1 del Hospital Virgen Vega, semisótano  
   P.º de San Vicente, 58, 182  
   37007 Salamanca

📧 sanidad.salamanca@ugt-sp.ugt.org  
📞 923 29 11 00 – Ext. 55598  
📱 637 585 924

## 📄 Licencia

Esta aplicación tiene carácter informativo y es mantenida por UGT Sanidad Salamanca.

## 🔗 Enlaces útiles

- [Portal BAPE SACYL](https://www.saludcastillayleon.es/profesionales/es/bolsa)
- [Acceso a la aplicación BAPE](https://bolsaabierta.saludcastillayleon.es/)
- [Convocatorias abiertas](https://www.saludcastillayleon.es/profesionales/es/procesos_selectivos/nuevo-procedimiento-bolsas-empleo/convocatorias-abiertas)

---

**Nota:** Esta guía es informativa y no sustituye la normativa oficial. Consulta siempre el portal oficial de SACYL para información actualizada.
