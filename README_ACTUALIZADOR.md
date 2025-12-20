# 🔄 Actualizador de Novedades BAPE SACYL

Este script extrae automáticamente información de la web oficial de SACYL y genera el código JavaScript actualizado para la sección de Novedades.

## 📋 Requisitos

El script necesita las siguientes librerías de Python:

```bash
pip install requests beautifulsoup4
```

## 🚀 Uso

### Paso 1: Ejecutar el script

```bash
python3 actualizar_novedades.py
```

### Paso 2: Copiar el código generado

El script mostrará en pantalla el código JavaScript generado y también lo guardará en `novedades_generadas.txt`.

### Paso 3: Actualizar script.js

1. Abre el archivo `script.js`
2. Busca la sección que dice `// DATOS ESTÁTICOS - EDITAR AQUÍ`
3. Reemplaza todo el array `staticNews` con el código generado
4. Guarda el archivo

### Paso 4: Subir a GitHub

```bash
git add script.js
git commit -m "Actualizar novedades BAPE"
git push
```

## 🎯 ¿Qué extrae el script?

El script genera automáticamente:

1. **Fechas de corte trimestrales** (9 de marzo, junio, septiembre, diciembre)
   - Calcula automáticamente las próximas fechas
   - Las marca como "urgente" si faltan menos de 30 días

2. **Convocatorias abiertas** desde la web oficial de SACYL
   - Extrae hasta 5 convocatorias más recientes
   - Incluye título y descripción
   - Categoriza automáticamente como "convocatoria"

3. **Recordatorios importantes**
   - Certificado digital
   - Otras novedades relevantes

## 📝 Personalización

Si quieres añadir novedades personalizadas además de las automáticas, edita la función `generar_novedades()` en el script.

## ⚠️ Notas importantes

- El script requiere conexión a internet para acceder a la web de SACYL
- Si SACYL cambia la estructura de su web, el script puede necesitar ajustes
- Se recomienda ejecutar el script semanalmente o cuando sepas que hay nuevas convocatorias

## 🆘 Solución de problemas

### Error: "No module named 'requests'"
```bash
pip install requests beautifulsoup4
```

### Error: "No se pueden extraer convocatorias"
- Verifica tu conexión a internet
- La web de SACYL puede estar temporalmente no disponible
- Contacta con el desarrollador si el problema persiste

## 📞 Soporte

Para dudas o problemas, contacta con UGT Sanidad Salamanca.
