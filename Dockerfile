FROM arm32v7/debian:buster-slim

MAINTAINER info@jeedom.com

COPY install/install.sh /tmp/
USER root
RUN sh /tmp/install.sh

COPY install/OS_specific/Docker/init.sh /root/
CMD ["sh", "/root/init.sh"]
