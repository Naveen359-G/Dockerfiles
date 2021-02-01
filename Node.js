FROM ubuntu:16.04
RUN apt-get update && apt-get -y install sudo
RUN sudo apt-get install curl python-software-properties -y
RUN curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
RUN apt-get install nodejs -y
COPY ./Node.js /Node.js
COPY ./main.js /main.js
EXPOSE 8081
CMD [ "node","/main.js" ]
