/** interface GetHostParams {
  purpose?: string;
}

export const getHost = ({ purpose }: GetHostParams = {}): string => {
  if (typeof window !== 'undefined') {
    let { host } = window.location;
    const apiUrlInLocalStorage = localStorage.getItem("GPTR_API_URL");
    
    const urlParams = new URLSearchParams(window.location.search);
    const apiUrlInUrlParams = urlParams.get("GPTR_API_URL");
    
    if (apiUrlInLocalStorage) {
      return apiUrlInLocalStorage;
    } else if (apiUrlInUrlParams) {
      return apiUrlInUrlParams;
    } else if (process.env.NEXT_PUBLIC_GPTR_API_URL) {
      return process.env.NEXT_PUBLIC_GPTR_API_URL;
    } else if (process.env.REACT_APP_GPTR_API_URL) {
      return process.env.REACT_APP_GPTR_API_URL;
    } else if (purpose === 'langgraph-gui') {
      return host.includes('localhost') ? 'http%3A%2F%2F127.0.0.1%3A8123' : `https://${host}`;
    } else {
      return host.includes('localhost') ? 'http://localhost:8000' : `https://${host}`;
    }
  }
  return '';
}; */


interface GetHostParams {
  purpose?: string;
}

export const getHost = ({ purpose }: GetHostParams = {}): string => {
  if (typeof window !== 'undefined') {
    let { host } = window.location;

    // 1. >>> PRIORITY FOR CLOUD RUN DEPLOYMENT <<<
    // Siempre verifica la variable de entorno primero.
    if (process.env.NEXT_PUBLIC_GPTR_API_URL) {
      return process.env.NEXT_PUBLIC_GPTR_API_URL;
    }
    
    // 2. Parámetros de URL (útil para sobreescribir temporalmente en desarrollo/pruebas)
    const urlParams = new URLSearchParams(window.location.search);
    const apiUrlInUrlParams = urlParams.get("GPTR_API_URL");
    if (apiUrlInUrlParams) {
      return apiUrlInUrlParams;
    }

    // 3. localStorage (útil para sobreescribir persistentemente en desarrollo/pruebas)
    const apiUrlInLocalStorage = localStorage.getItem("GPTR_API_URL");
    if (apiUrlInLocalStorage) {
      return apiUrlInLocalStorage;
    }

    // 4. Fallback a REACT_APP_GPTR_API_URL (si lo usas, menos común en Next.js)
    if (process.env.REACT_APP_GPTR_API_URL) {
      return process.env.REACT_APP_GPTR_API_URL;
    }

    // 5. Casos especiales o valores por defecto para desarrollo local
    if (purpose === 'langgraph-gui') {
      return host.includes('localhost') ? 'http%3A%2F%2F127.0.0.1%3A8123' : `https://${host}`;
    } else {
      // Este es el último recurso, para desarrollo local sin la variable de entorno
      return host.includes('localhost') ? 'http://localhost:8000' : `https://${host}`;
    }
  }
  return ''; // En entornos sin ventana (SSR en el servidor), devuelve vacío
};