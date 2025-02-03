# Usa Node.js 18 como base
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente al contenedor
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
