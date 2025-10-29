# Proyecto Music Store - Los Tecnonautas

Aplicación e-commerce de instrumentos musicales desarrollada en React, donde los usuarios pueden navegar por categorías, ver detalles de productos y simular una experiencia de compra.

## Estado del Proyecto

**Segunda Entrega: Navegación por rutas**  
Se implementó **React Router** y carga dinámica de datos mediante **fetch**.

## Componentes Principales

### Componentes Contenedores
Manejan estado, efectos y lógica de obtención de datos:
- **ItemListContainer.jsx** → Obtiene la lista de instrumentos desde un archivo JSON y permite filtrar por categoría.  
- **ItemDetailContainer.jsx** → Obtiene los datos de un instrumento específico según el parámetro `id` de la URL.

### Componentes de Presentación
Encargados de la parte visual:
- **ItemList.jsx** → Renderiza la grilla de instrumentos.  
- **ItemDetail.jsx** → Muestra la información detallada de un instrumento y permite seleccionar cantidad para agregar al carrito.  
- **NavBar.jsx**, **CartWidget.jsx**, **Footer.jsx**, **NotFound.jsx**, entre otros.

## Navegación y Rutas

Implementada con **React Router**:

- `/` → Catálogo general  
- `/instrumentos` → Lista completa de instrumentos  
- `/instrumento/:id` → Detalle de un instrumento específico  
- `*` → Página **404 Not Found**

Además, se incluye un filtro por categorías:
- Cuerdas  
- Percusión  
- Teclados  
- Amplificadores  
- Audio  
- Viento  

## Funcionalidades Implementadas

- Navegación entre vistas con **React Router**
- Uso de **fetch** simulando una API local (`/data/instrumentos.json`)
- Filtrado dinámico por categorías
- Vista en detalle con contador de unidades
- Mensaje de confirmación al agregar al carrito
- Página de error 404 personalizada
