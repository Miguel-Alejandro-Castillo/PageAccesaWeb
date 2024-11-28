```markdown
# Proyecto de P�gina Web Est�tica

Este proyecto es una p�gina web est�tica construida con HTML, CSS, JavaScript y Bootstrap, y se despliega utilizando Docker y Nginx.

## Requisitos

- Docker
- Docker Compose

## Estructura del Proyecto

```
.
??? Dockerfile
??? docker-compose.yml
??? index.html
??? css/
?   ??? styles.css
??? js/
?   ??? scripts.js
??? ...
```

## Dockerfile

El `Dockerfile` utilizado para construir la imagen Docker:

```Dockerfile
# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos del proyecto al directorio donde Nginx sirve archivos est�ticos
COPY . /usr/share/nginx/html

# Abre el puerto 80 para el tr�fico HTTP
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
```

## docker-compose.yml

El archivo `docker-compose.yml` para definir y ejecutar el contenedor:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - .:/usr/share/nginx/html
```

## Pasos para Crear la Imagen y Realizar el Deploy

1. Clona este repositorio en tu m�quina local.
2. Navega al directorio del proyecto.
3. Construye la imagen Docker y levanta el contenedor utilizando Docker Compose:

   ```sh
   docker-compose up --build
   ```

4. Abre tu navegador web y visita `http://localhost` para ver tu p�gina web est�tica en funcionamiento.

## Notas

- Aseg�rate de que Docker y Docker Compose est�n instalados y funcionando correctamente en tu sistema.
- Si realizas cambios en los archivos de tu proyecto, Docker Compose los reflejar� autom�ticamente debido al volumen montado.

```

Este `README.md` proporciona una gu�a clara sobre c�mo construir la imagen Docker y desplegar tu aplicaci�n web est�tica utilizando Docker y Docker Compose.