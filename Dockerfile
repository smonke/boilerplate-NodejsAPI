FROM pierone.stups.zalan.do/pathfinder/alpine-node:6.3.1-1

MAINTAINER sonja.moenkemeyer@gmx.de
ADD /dist/ /api/dist
ADD /package.json /api/package.json
# ADD /scm-source.json /scm-source.json
WORKDIR /api

RUN npm install
CMD npm run serve
EXPOSE 8080