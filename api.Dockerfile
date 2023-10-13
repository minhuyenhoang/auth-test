FROM node:18-alpine

RUN yarn

EXPOSE 3000

CMD [ "yarn", "run", "start" ]