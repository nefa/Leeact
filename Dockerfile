FROM ubuntu:14.04

MAINTAINER UFE Team <ufe@everymatrix.com>

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN sed 's/main$/main universe/' -i /etc/apt/sources.list

RUN add-apt-repository -y ppa:chris-lea/node.js

RUN apt-get update
RUN apt-get install -y nodejs build-essential git-core python
RUN npm install -g npm
RUN npm install -g gulp

ADD . /srv
WORKDIR /srv

RUN npm install -d
RUN gulp build --production

EXPOSE 8000
ENTRYPOINT ["/usr/bin/npm", "start", "--production"]
CMD []
