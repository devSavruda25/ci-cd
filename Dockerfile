# # Use full Debian-based Node.js image
# FROM node:18

# WORKDIR /Demoserver

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "start"]


FROM ubuntu:22.04

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY server.js server.js

RUN npm install

ENTRYPOINT [ "node", "server.js" ]