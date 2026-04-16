# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copier les fichiers package
COPY package*.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier TOUT le reste du projet
COPY . .

# Build de l'application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Installer serve
RUN npm install -g serve

# Copier le build depuis le stage builder
COPY --from=builder /app/build ./build

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["serve", "-s", "build", "-l", "3000"]
