# Proyecto Music Store - Los Tecnonautas

Aplicación e-commerce de instrumentos musicales desarrollada en React, donde los usuarios pueden navegar por categorías, ver detalles de productos y simular una experiencia de compra.

# Tecnologías
- React 19
- Firebase Firestore
- React Router
- Ant Design
- Lucide React

## Estado del Proyecto

**Entrega Final:**  
- Navegación por rutas.
- Listado y detalle dinámico desde Firestore.
- Carrito con Context.
- Widget de carrito.
- Checkout funcional.
- Límites de stock y mensajes.
- Guardado de ventas en Firestore.
- Ticket de compra.
- Estilos con Ant Design + CSS.
- Documentación completa.

### Firebase
El proyecto utiliza Firebase Firestore como base de datos en la nube.  
Desde Firestore se obtienen todos los productos del catálogo y se registran las órdenes generadas en el checkout.

## Componentes Principales

### Componentes Contenedores
Manejan estado, efectos y lógica de obtención de datos:
- **ItemListContainer.jsx** → Obtiene productos desde Firestore y filtra por categoría.
- **ItemDetailContainer.jsx** → Obtiene un producto por `id` desde Firestore.

### Componentes de Presentación
Encargados de la parte visual:
- **ItemList.jsx** → Renderiza la grilla de instrumentos.  
- **ItemDetail.jsx** → Muestra la información detallada de un instrumento y permite seleccionar cantidad para agregar al carrito.  
- **NavBar.jsx**, **CartWidget.jsx**, **Footer.jsx**, **NotFound.jsx**, entre otros.

## Estructura del Proyecto
```
public/
  img/
src/
  components/
    pages/
      CartPage.jsx
      CheckoutPage.jsx
      ContactoPage.jsx
      DetalleInstrumentoPage.jsx
      HomePage.jsx
      InstrumentosPage.jsx
    CartWidget.jsx
    Footer.jsx
    Header.jsx
    ItemDetail.jsx
    ItemDetailContainer.jsx
    ItemList.jsx
    ItemListContainer.jsx
    Main.jsx
    NavBar.jsx
    NotFound.jsx
  context/
    CarritoProvider.jsx
  hooks/
    useCarrito.jsx
  utils/
    FirebaseConfig.js
    FuncionesApi.js
  App.css
  App.jsx
  index.css
  main.jsx
  ```

## Navegación y Rutas

Implementada con **React Router**:

- `/` → Inicio
- `/instrumentos` → Catálogo Completo
- `/instrumento/:id` → Detalle de un instrumento específico
- `/instrumentos/:categoria` -> Filtro por Categorías
- `/cart` → Carrito de Compras
- `/checkout` → Finalización de Compra
- `/contacto` → Contacto
- `*` → Página **404 Not Found**

## Principales Funcionalidades

- Catálogo de instrumentos con filtro por categorías.
- Detalle de producto con selector de cantidad y control de stock.
- Carrito de compras persistente con suma de unidades y total.
- Checkout con formulario y ticket de compra.
- Guardado de ventas en Firestore.
- Navegación con React Router.
- Estilos modernos con Ant Design y CSS personalizado.
- Página 404 personalizada.

## Instalación y Uso
1. Clonar el repositorio
``` bash
git clone https://github.com/maximilianoAttanasio/Proyecto-Music-Store.git
```
2. Instalar Dependencias
``` bash
npm install
```
o
``` bash
npm i
```
3. Ejecutar el Proyecto
``` bash
npm run dev
```

## Demo Online
Puedes ver el proyecto en Vercel desde [este link](https://proyecto-music-store-r6nfbyk4y-maxs-projects-25d9bad8.vercel.app)