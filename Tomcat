FROM ubuntu:latest
RUN apt-get -y update && apt-get -y upgrade
RUN apt-get -y install openjdk-8-jdk wget unzip
RUN mkdir /usr/local/tomcat
RUN wget https://downloads.apache.org/tomcat/tomcat-8/v8.5.61/bin/apache-tomcat-8.5.61.zip && unzip apache*
RUN cp -Rv apache-tomcat-* /usr/local/tomcat/
EXPOSE 8080
RUN cd /usr/local/tomcat/apache-tomcat-8.5.61/bin/
RUN chmod +x /usr/local/tomcat/apache-tomcat-8.5.61/bin/catalina.sh

CMD ["run"]
ENTRYPOINT ["bash","/usr/local/tomcat/apache-tomcat-8.5.61/bin/catalina.sh"]
