FROM nginx:latest
LABEL AUTHOR=MRLI
LABEL EMAIL=1063052964@qq.com

VOLUME /usr/share/nginx/html/
VOLUME /etc/nginx/conf.d/default.conf

ENTRYPOINT service nginx start