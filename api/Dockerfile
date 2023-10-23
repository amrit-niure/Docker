# LAYER CACHING
# When we change the source code of the file.This first docker file caches the layer just upto the workdir /app and executes from strach after that layer , but we dont need to re-execute the RUN npm install layer because we  have not changed the depencendies . so in order to cache the RUN npm install command we first copy the package.json file and run RUN npm install command which helps docker to reconized it as a cache because the dependencies is not changed and makes the process faseter , if we change the dependencies the docker recognizes the change and doesnot caches the npm install command.

# FROM node:17-alpine

# WORKDIR /app

# COPY . .

# RUN npm install

# EXPOSE 5000

# CMD ["npm","start"]


FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]