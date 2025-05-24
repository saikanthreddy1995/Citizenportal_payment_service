# Use an official Node.js image
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Build the frontend
RUN npm run build

# Use a simple web server to serve static files
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
