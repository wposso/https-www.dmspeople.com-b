# =====================================
# 📦 Etapa de construcción
# =====================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias (sin las devDependencies)
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# =====================================
# 🚀 Etapa final (más liviana)
# =====================================
FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario desde la etapa anterior
COPY --from=builder /app /app

# Exponer el puerto que usa tu app (Railway lo sobrescribe, pero ayuda localmente)
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
