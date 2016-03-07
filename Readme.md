# react-webpack-boilerplate

## 背景
**react-webpack-boilerplate** 是一个基于`webpack`的以`React`和`Redux`为骨干框架的前端架构

## 主旨
希望使用者可以经过此项目更加深入理解`React`的思想以及如何组合使用包括`Redux`在内的众多框架. 该项目只是非常简单的demo项目,用户可以通过直接修改该项目免去很多配置上的麻烦.

## 如何使用
下载此项目, 然后使用`npm i`安装依赖.
如要使用`webpack`打包成production包,请安装`webpack`编译套件

详情请参考:
[webpack官方文档](http://webpack.github.io)

## Why us
>前端技术近年来发展神速, commonjs订立,nodejs的发展,移动端的需求都加快了前端技术的更新速度. 从module化,到MVC,MVVM.技术栈更新非常快,同时也不断涌现新的问题

`React`作为新兴技术, 建立了全新的思维去构造前端应用: 摒弃传统MVC模式, 组件化开发应用, 数据驱动UI等概念.

详情参考: [React官方文档](http://facebook.github.io/react/)

同时作为应用状态的,facebook推荐的架构`Flux`也走到前台来:
![MacDown Screenshot](https://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

详情参考: [Flux官方文档](http://facebook.github.io/flux/)

本项目使用了React+Redux(一个flux架构的实现)作为基础架构,并使用webpack进行应用构建方案. 意在使应用易于组件化(复用),以及更好管理大型项目复杂的状态变更(状态变化追踪).使得开发者进行开发的时候更为清晰.

该项目使用了组件库: AdminLTE

ALTE为Bootstrap的一套皮肤, 所以引入了react-bootstrap组件库
详情参考: [react-bootstrap官方文档](https://react-bootstrap.github.io/)
详情参考: [AdminLTE官方文档](https://almsaeedstudio.com/)

## 目录结构
	--react-webpack-boilerplate

		|_ components (React Components)
		|_ constants
		|_ containers (React Pages)
		|_ models
			  |_ actions   (Redux actions)
		    |_ reducers	(Redux reducers)
				|_ store		(Redux Store)
		|_ static		(html&index.jsx&css/less)
		|_ static-dist (production)
		|_ tests (unit test)

## 相关技术
* React
* Redux
* Webpack
* es6
* nodejs
* react-bootstrap
* AdminLTE
* karma/mocha
