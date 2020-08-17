# Use an official node runtime as a parent image
FROM node:latest

RUN mkdir -p /app/src

WORKDIR /app/src

# Install dependencies
COPY package.json .

RUN npm install

# Add rest of the client code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]