git pull

yarn --registry=https://registry.npm.taobao.org/ && yarn build

#删除容器
docker rm -f demo1 &> /dev/null

#启动容器
docker run -d --restart=on-failure:5\
    -p 8080:80 \
    -v $PWD/dist:/usr/share/nginx/html \
    --name demo1 nginx
    
# docker run -d -p 8080:80 -v /home/mutou/nginx/conf.d:/etc/nginx/conf.d  -v /home/mutou/nginx/html:/usr/share/nginx/html nginx