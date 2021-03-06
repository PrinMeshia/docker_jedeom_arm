FROM arm32v7/debian:buster-slim

MAINTAINER info@jeedom.com

COPY install/install.sh /tmp/
RUN sudo chmod +x /tmp/install.sh
RUN sh /tmp/install.sh

COPY install/OS_specific/Docker/init.sh /root/
RUN sudo chmod +x /root/init.sh
CMD ["sh", "/root/init.sh"]
