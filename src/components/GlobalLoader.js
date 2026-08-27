export function GlobalLoader() {
  // 1. Bloquear el scroll del body al instanciar el loader
  document.body.classList.add('hidden-snack');

  // 2. Inyectar los estilos CSS exactos y añadir el estilo para "Cargando..."
  if (!document.getElementById('global-loader-styles')) {
    const style = document.createElement('style');
    style.id = 'global-loader-styles';
    style.textContent = `
      /* Asegurar que el body no tenga scroll mientras carga */
      body.hidden-snack {
          overflow: hidden;
      }

      #global-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out, visibility 0.5s ease-out;
          opacity: 1;
          visibility: visible;
      }

      #global-loader.loader-hidden {
          opacity: 0;
          visibility: hidden;
      }

      .smiley-container {
          text-align: center;
      }

      .smiley-text {
          font-size: 5rem;
          font-weight: bold;
          color: black;
          display: block; /* Cambiado a block para que el texto baje automáticamente */
          margin-bottom: 1.5rem; /* Separación con la palabra Cargando... */
          animation: happyPulse 1.5s infinite ease-in-out;
          font-family: sans-serif;
      }
      
      /* Estilos para el texto de carga */
      .loading-text {
          font-family: sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: black;
          letter-spacing: 0.5px;
      }

      @keyframes happyPulse {
          0% {
              transform: scale(1) rotate(0deg);
              opacity: 0.8;
          }
          50% {
              transform: scale(1.2) rotate(5deg);
              opacity: 1;
          }
          100% {
              transform: scale(1) rotate(0deg);
              opacity: 0.8;
          }
      }
    `;
    document.head.appendChild(style);
  }

  // 3. Crear el contenedor principal
  const loader = document.createElement('div');
  loader.id = 'global-loader';

  // 4. Crear el contenedor interno (smiley-container)
  const container = document.createElement('div');
  container.className = 'smiley-container';

  // 5. Crear el elemento de la cara animada
  const smiley = document.createElement('div');
  smiley.className = 'smiley-text';
  smiley.textContent = ':D';

  // 6. Crear el elemento de texto "Cargando..."
  const text = document.createElement('div');
  text.className = 'loading-text';
  text.textContent = 'Cargando...';

  // 7. Ensamblar la estructura
  container.appendChild(smiley);
  container.appendChild(text);
  loader.appendChild(container);

  // 8. Método para ocultar el loader y restaurar el scroll
  loader.hide = () => {
    loader.classList.add('loader-hidden');
    
    // Quitar la clase del body para devolver el scroll
    document.body.classList.remove('hidden-snack');
    
    setTimeout(() => {
      if (loader.parentNode) {
        loader.remove();
      }
    }, 500);
  };

  return loader;
}