FROM mysql:latest


WORKDIR /app/mysql

ENV MYSQL_DATABASE messageAll

COPY my.cnf /etc/mysql/

CMD ["mysqld"]

EXPOSE 3306
