FROM node:lts

WORKDIR /node/docusaurus/app/

COPY . .

RUN npm install
RUN npm run build
