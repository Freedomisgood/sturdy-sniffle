FROM nginx:latest
LABEL AUTHOR=MRLI
LABEL EMAIL=1063052964@qq.com

COPY dist/  /usr/share/nginx/html/
COPY nginx/default.conf  /etc/nginx/conf.d/default.conf

RUN echo 'echo init ok!!'