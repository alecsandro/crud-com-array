FROM node:15.8.0

WORKDIR /usr/app/

COPY package*.json .
RUN apt update && apt install yarn -y
RUN apt install git -y 
# RUN git clone https://github.com/alecsandro/crud-com-array.git

RUN npm install


COPY . .

EXPOSE 3000

CMD ["yarn","dev"]
