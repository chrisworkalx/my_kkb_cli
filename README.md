# 生成一个cli工具

## kkb 为cli名称

```如何测试cli有效性
cd 本项目环境
npm link 创建一个link
npx kkb init 项目名称
npx kkb refresh 是将拉取到的项目自动化生成页面和路由信息

如本次项目中的hello 是通过kkb创建的
流程如下
 npx kkb init hello
 cd hello/src/views
 touch User.vue
 echo 一些内容 >>> User.vue
 npx kkb refresh
```
