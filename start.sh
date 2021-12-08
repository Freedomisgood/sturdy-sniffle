# 重新编译
yarn --registry=https://registry.npm.taobao.org/ && yarn build

# 删除容器
docker rm -f harbor.sucsoft.com:30002/app3/sucsoft-initializer &> /dev/null

# 创建新的latest镜像
docker build -t harbor.sucsoft.com:30002/app3/sucsoft-initializer .

# 启动容器
docker docker run --name cgf -p 3000:80 harbor.sucsoft.com:30002/app3/sucsoft-initializer
