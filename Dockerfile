# Usar imagen base de Nginx para servir archivos estáticos
FROM nginx:alpine

# Copiar todos los archivos del proyecto a la carpeta pública de nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
