#!/usr/bin/env python3
"""
Script para actualizar automáticamente las novedades de BAPE SACYL
Extrae información de la web oficial y genera el código JavaScript actualizado

Uso:
    python3 actualizar_novedades.py
"""

import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta
import json
import re

def extraer_convocatorias():
    """Extrae las convocatorias abiertas de la web de SACYL"""
    url = "https://www.saludcastillayleon.es/profesionales/es/procesos_selectivos/nuevo-procedimiento-bolsas-empleo/convocatorias-abiertas"
    
    try:
        print("🔍 Extrayendo información de SACYL...")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Buscar todas las convocatorias
        convocatorias = []
        items = soup.find_all('li')
        
        for item in items:
            link = item.find('a')
            if link and 'convocatorias-abiertas' in link.get('href', ''):
                titulo = link.get_text(strip=True)
                texto_completo = item.get_text(strip=True)
                
                # Extraer fecha si existe
                fecha_match = re.search(r'(\d{2}/\d{2}/\d{4})', texto_completo)
                fecha_str = fecha_match.group(1) if fecha_match else None
                
                # Extraer descripción
                descripcion = texto_completo.replace(titulo, '').strip()
                if fecha_str:
                    descripcion = descripcion.replace(fecha_str + ':', '').strip()
                
                convocatorias.append({
                    'titulo': titulo,
                    'descripcion': descripcion[:200] if descripcion else 'Consulta el portal oficial para más información.',
                    'fecha': fecha_str,
                    'url': 'https://www.saludcastillayleon.es' + link.get('href', '')
                })
        
        print(f"✅ Encontradas {len(convocatorias)} convocatorias")
        return convocatorias
        
    except Exception as e:
        print(f"❌ Error al extraer convocatorias: {e}")
        return []

def calcular_fechas_corte():
    """Calcula las próximas fechas de corte (9 de cada trimestre)"""
    hoy = datetime.now()
    fechas_corte = []
    
    # Meses de corte: marzo, junio, septiembre, diciembre
    meses_corte = [3, 6, 9, 12]
    
    for mes in meses_corte:
        # Calcular para este año
        fecha = datetime(hoy.year, mes, 9)
        if fecha > hoy:
            fechas_corte.append(fecha)
        
        # Calcular para el próximo año si es necesario
        if mes <= hoy.month:
            fecha_siguiente = datetime(hoy.year + 1, mes, 9)
            fechas_corte.append(fecha_siguiente)
    
    # Ordenar y tomar las 2 próximas
    fechas_corte.sort()
    return fechas_corte[:2]

def generar_novedades():
    """Genera el array de novedades combinando datos automáticos y manuales"""
    novedades = []
    id_counter = 1
    
    # 1. Añadir fechas de corte automáticas
    fechas_corte = calcular_fechas_corte()
    if fechas_corte:
        proxima_fecha = fechas_corte[0]
        dias_restantes = (proxima_fecha - datetime.now()).days
        
        urgencia = 'urgente' if dias_restantes <= 30 else 'general'
        
        novedades.append({
            'id': id_counter,
            'title': 'Próxima Fecha de Corte BAPE',
            'description': f'Recuerda actualizar tus áreas geográficas y méritos antes del {proxima_fecha.strftime("%d/%m/%Y")}. Todos los cambios deben estar registrados antes de las 23:59:59.',
            'category': urgencia,
            'dueDate': proxima_fecha.strftime('%Y-%m-%d')
        })
        id_counter += 1
    
    # 2. Añadir convocatorias de SACYL
    convocatorias = extraer_convocatorias()
    for conv in convocatorias[:5]:  # Limitar a 5 convocatorias más recientes
        # Calcular fecha de vencimiento (30 días desde hoy si no hay fecha específica)
        if conv['fecha']:
            try:
                fecha_obj = datetime.strptime(conv['fecha'], '%d/%m/%Y')
                # Si la fecha ya pasó, añadir 90 días para dar tiempo
                if fecha_obj < datetime.now():
                    fecha_obj = datetime.now() + timedelta(days=90)
                fecha_vencimiento = fecha_obj.strftime('%Y-%m-%d')
            except:
                fecha_vencimiento = (datetime.now() + timedelta(days=30)).strftime('%Y-%m-%d')
        else:
            fecha_vencimiento = (datetime.now() + timedelta(days=30)).strftime('%Y-%m-%d')
        
        novedades.append({
            'id': id_counter,
            'title': f'Convocatoria: {conv["titulo"]}',
            'description': conv['descripcion'],
            'category': 'convocatoria',
            'dueDate': fecha_vencimiento
        })
        id_counter += 1
    
    # 3. Añadir recordatorio de certificado digital (siempre útil)
    novedades.append({
        'id': id_counter,
        'title': 'Recordatorio: Certificado Digital',
        'description': 'Verifica la vigencia de tu certificado digital para poder acceder al portal BAPE sin problemas. Desde julio 2025 es obligatorio.',
        'category': 'general',
        'dueDate': '2025-07-01'
    })
    
    return novedades

def generar_codigo_javascript(novedades):
    """Genera el código JavaScript con las novedades"""
    codigo = "  // ========================================\n"
    codigo += "  // DATOS ESTÁTICOS - EDITAR AQUÍ\n"
    codigo += "  // ========================================\n"
    codigo += f"  // Última actualización: {datetime.now().strftime('%d/%m/%Y %H:%M')}\n"
    codigo += "  // Generado automáticamente con actualizar_novedades.py\n"
    codigo += "  const staticNews = [\n"
    
    for i, novedad in enumerate(novedades):
        codigo += "    {\n"
        codigo += f"      id: {novedad['id']},\n"
        codigo += f"      title: '{novedad['title']}',\n"
        codigo += f"      description: '{novedad['description']}',\n"
        codigo += f"      category: '{novedad['category']}',\n"
        codigo += f"      dueDate: '{novedad['dueDate']}'\n"
        codigo += "    }" + ("," if i < len(novedades) - 1 else "") + "\n"
    
    codigo += "  ];\n"
    
    return codigo

def main():
    print("=" * 60)
    print("🔄 ACTUALIZADOR DE NOVEDADES BAPE SACYL")
    print("=" * 60)
    print()
    
    # Generar novedades
    novedades = generar_novedades()
    
    # Generar código JavaScript
    codigo_js = generar_codigo_javascript(novedades)
    
    print()
    print("=" * 60)
    print("📋 CÓDIGO JAVASCRIPT GENERADO")
    print("=" * 60)
    print()
    print(codigo_js)
    print()
    print("=" * 60)
    print("📝 INSTRUCCIONES:")
    print("=" * 60)
    print("1. Copia el código JavaScript de arriba")
    print("2. Abre el archivo script.js")
    print("3. Busca la sección 'DATOS ESTÁTICOS - EDITAR AQUÍ'")
    print("4. Reemplaza el array 'staticNews' con el código generado")
    print("5. Guarda el archivo")
    print("6. Sube los cambios a GitHub")
    print()
    print(f"✅ Total de novedades generadas: {len(novedades)}")
    print()
    
    # Guardar en archivo para fácil copia
    with open('novedades_generadas.txt', 'w', encoding='utf-8') as f:
        f.write(codigo_js)
    
    print("💾 El código también se ha guardado en: novedades_generadas.txt")
    print()

if __name__ == "__main__":
    main()
