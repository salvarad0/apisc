# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json
 COPY package*.json ./

# Instala las dependencias
 RUN npm install

# Fix de error en module web3
# RUN npm run postinstall:ubuntu

# Copia el resto de la aplicación
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]
