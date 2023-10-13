FROM node:18-alpine

RUN yarn

EXPOSE 5173

CMD [ "yarn", "dev" ]