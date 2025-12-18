# Use Node 18 runtime
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy your server file and public assets
COPY server.js ./
COPY public ./public

# Expose port
EXPOSE 3000

# Run the server
CMD ["node", "server.js"]
