FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json antes para instalar dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos restantes do projeto
COPY . .

# Constrói o projeto
RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]