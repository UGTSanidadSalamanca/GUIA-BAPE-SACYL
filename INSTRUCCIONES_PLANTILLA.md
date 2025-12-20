# 📋 GUÍA PARA RELLENAR LA PLANTILLA DE CATEGORÍAS BAPE

## 📁 Archivo: plantilla_categorias_bape.csv

Este archivo CSV puede abrirse con Excel, Google Sheets o cualquier editor de hojas de cálculo.

---

## 📊 COLUMNAS DEL EXCEL

### 1. **ID** (Número)
- Número único para cada categoría
- Empieza en 7 (ya hay 6 categorías)
- Incrementa de 1 en 1: 7, 8, 9, 10...

### 2. **CATEGORIA** (Texto)
- Nombre completo de la categoría profesional
- Siempre en MAYÚSCULAS
- Ejemplos:
  * TÉCNICO EN CUIDADOS AUXILIARES DE ENFERMERÍA
  * MÉDICO DE FAMILIA
  * TRABAJADOR SOCIAL
  * FARMACÉUTICO

### 3. **ESTADO** (Texto - opciones limitadas)
Elige UNA de estas 5 opciones (escribe exactamente como aparece):
- **abierta** → Inscripción activa
- **cerrada** → No admite inscripciones
- **documentacion** → Fase de presentación de documentos
- **reclamacion** → Periodo de alegaciones
- **definitiva** → Lista definitiva publicada

### 4. **ULTIMO_CORTE** (Año)
- Año del último corte realizado
- Solo el año: 2024 o 2025
- Ejemplo: `2024`

### 5. **FECHA_CORTE** (Fecha)
- Fecha exacta del último corte
- Formato: DD/MM/YYYY
- Ejemplo: `15/03/2025`

### 6. **DESCRIPCION** (Texto)
- Descripción oficial de la resolución
- Copia el texto exacto de la web de SACYL
- Ejemplos comunes:
  * "Publicada Resolución por la que se concede plazo para la presentación de la documentación acreditativa de requisitos y méritos"
  * "Publicada Resolución por la que se procede a la publicación de la relación definitiva de las personas candidatas"

### 7. **CORTES_HISTORICOS** (Texto especial)
- Lista de cortes anteriores
- **Formato:** `Año|Fecha|Estado`
- **Para múltiples cortes:** Separar con punto y coma (;)

**Ejemplos:**
```
Un solo corte:
2024|15/03/2025|En fase de documentación

Múltiples cortes:
2024|15/03/2025|En fase de documentación;2022|10/05/2023|Lista definitiva publicada;2020|05/12/2021|Lista definitiva publicada
```

---

## ✅ EJEMPLO COMPLETO DE UNA FILA

| ID | CATEGORIA | ESTADO | ULTIMO_CORTE | FECHA_CORTE | DESCRIPCION | CORTES_HISTORICOS |
|----|-----------|--------|--------------|-------------|-------------|-------------------|
| 7 | TÉCNICO EN CUIDADOS AUXILIARES DE ENFERMERÍA | documentacion | 2024 | 15/03/2025 | Publicada Resolución por la que se concede plazo para la presentación de la documentación acreditativa de requisitos y méritos | 2024\|15/03/2025\|En fase de documentación;2022\|10/05/2023\|Lista definitiva publicada |

---

## 🔍 DÓNDE ENCONTRAR LA INFORMACIÓN

### Web oficial de SACYL:
https://www.saludcastillayleon.es/profesionales/es/procesos_selectivos/nuevo-procedimiento-bolsas-empleo/convocatorias-abiertas

En cada categoría encontrarás:
- Nombre de la categoría
- Fecha de la última resolución
- Estado actual (documentación, lista definitiva, etc.)
- Enlaces a cortes anteriores

---

## 📝 PASOS PARA RELLENAR

1. **Abre el archivo CSV** con Excel o Google Sheets
2. **Ve a la web de SACYL** y busca cada categoría
3. **Rellena cada fila** con los datos de una categoría
4. **Guarda el archivo** cuando termines
5. **Envíamelo** y yo lo convertiré automáticamente a código JavaScript

---

## ⚠️ IMPORTANTE

- **No cambies los nombres de las columnas** (primera fila)
- **Respeta el formato de fechas:** DD/MM/YYYY
- **Usa exactamente los estados válidos:** abierta, cerrada, documentacion, reclamacion, definitiva
- **En CORTES_HISTORICOS usa el separador |** (barra vertical) entre campos
- **Para múltiples cortes usa ;** (punto y coma)

---

## 🆘 AYUDA

Si tienes dudas sobre alguna categoría:
- Déjala en blanco
- Pon "REVISAR" en la columna DESCRIPCION
- Yo la completaré después

---

## 📤 CUANDO TERMINES

Guarda el archivo y dime que está listo. Yo:
1. Leeré el CSV
2. Generaré el código JavaScript automáticamente
3. Lo añadiré a script.js
4. ¡Listo! Tendrás las 28+ categorías en la app
