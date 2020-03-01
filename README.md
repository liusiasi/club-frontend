首先安装依赖 执行
### `yarn`

运行项目 执行

### `yarn dev`

打包项目 执行

### `yarn dist`

运行这个项目会自动打开
http://localhost:8086/

需要请求数据接打开src->service->common.js
将url设置为http://admin.swczyc.com/stapi
```js
//export const urlPrefix = 'http://123.57.72.6:8443/shetuan_backend';
//export const urlPrefix = '/stapi';
export const urlPrefix = 'http://admin.swczyc.com/stapi';
```

项目演示地址
http://admin.swczyc.com/shetuanGw
