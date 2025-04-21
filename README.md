# Proyecto Hola Mundo con Certificados HTTPS

Este proyecto es una aplicación básica de Node.js que utiliza Express para crear un servidor HTTPS. La aplicación responde con "¡Hola Mundo! (HTTPS)" en la ruta raíz.

## Estructura del Proyecto

```
hola-mundo-certificados
├── src
│   ├── app.js          # Punto de entrada de la aplicación
├── package.json        # Archivo de configuración de npm
├── key.pem             # Clave privada para el servidor HTTPS
├── cert.pem            # Certificado para el servidor HTTPS
└── README.md           # Documentación del proyecto
```

## Requisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/git-comcomsis/hola-mundo-nodejs
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Asegúrate de tener los certificados:**

   Coloca los archivos `key.pem` y `cert.pem` en la raíz del proyecto. Estos archivos son necesarios para que el servidor HTTPS funcione correctamente.

## Scripts Disponibles

En el archivo `package.json` se han configurado los siguientes scripts:

- **Iniciar la aplicación en modo producción:**

  ```bash
  npm start
  ```

- **Iniciar la aplicación en modo desarrollo con Nodemon:**

  ```bash
  npm run dev
  ```

- **Administrar la aplicación con PM2:**

  Inicia la aplicación con PM2 para producción:

  ```bash
  npm run pm2:start
  ```

  Detén la aplicación con PM2:

  ```bash
  npm run pm2:stop
  ```

## Ejecución

### Modo Producción

Para ejecutar la aplicación en modo producción, utiliza:

```bash
npm start
```

### Modo Desarrollo

Para desarrollo, puedes usar Nodemon para reiniciar automáticamente el servidor al realizar cambios:

```bash
npm run dev
```

### Uso de PM2

PM2 es útil para administrar la aplicación en producción. Puedes iniciar la aplicación con:

```bash
npm run pm2:start
```

Y detenerla con:

```bash
npm run pm2:stop
```

## Certificados

Asegúrate de tener los archivos `key.pem` y `cert.pem` en la raíz del proyecto. Si no tienes certificados, puedes generarlos con OpenSSL.


Si utilizas OpenSSL, puedes generar un certificado autofirmado:

```bash
openssl req -nodes -new -x509 -keyout key.pem -out cert.pem -days 365
```

También pude usar: 

```bash
openssl genrsa -out key.pem 2048
openssl req -x509 -new -key key.pem -out cert.pem -days 365
```

## Notas

- Este proyecto es solo un ejemplo básico para demostrar el uso de HTTPS con Node.js y Express.
- No utilices los certificados generados con OpenSSL en producción. Para entornos reales, utiliza certificados emitidos por una autoridad certificadora (CA) confiable.