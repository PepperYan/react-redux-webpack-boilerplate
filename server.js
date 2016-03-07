var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = new(require('express'))();
var port = 3010;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/dist', express.static(path.join(__dirname, 'static/css/alte')));
// app.use('/carts',express.static(path.join(__dirname,'static/index.html')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/static/index.html')
    // res.redirect('/carts');
    // res.redirect('static/index.html/cart');
});

var httpProxy = require('http-proxy');
//代理到后端服务
var proxy = new httpProxy.createProxyServer({});
// 代理中间件，只代理url包含/api的请求
app.use(function(req, res, next) {
  if (req.url.match(new RegExp('^\/canteen-orders\/api\/'))) {
    console.log('proxy to: 10.108.10.174');
    proxy.web(req, res, {
      target: 'http://10.108.1.198:8888'
    }, function(err) {
      console.error(err);
    });
  } else if (req.url.match(new RegExp('^\/canteen-restaurants\/api\/'))) {
    console.log('proxy to: 10.108.10.174');
    proxy.web(req, res, {
      target: 'http://10.108.1.198:8887'
    }, function(err) {
      console.error(err);
    });
  } else {
    next();
  }
});


//增加数据返回
app.get("/data/orders", function(req, res) {
  res.sendFile(__dirname + '/data/orders.json')
});
app.get("/data/restaurants", function(req, res) {
  res.sendFile(__dirname + '/data/restaurants.json')
});
app.post("/data/order", function(req, res) {
  console.log('/data/order');
  console.log(req.body);
  console.log(req.query);
  res.status(200).json(req.body);
})


app.get("/health", function(req, res) {
  console.log('健康检查');
  res.status(200).send("OK");
})

app.get("/automall/api/v1/products", function(req, res) {
  console.log('掉进借口了');
  var data = [{
    "name": "iphone 6S",
    "price": 5800,
    "desc": "64G version",
    "id": 0,
    'inventory': 10,
    'headImg': 'http://www.material-ui.com/images/ok-128.jpg'
  }, {
    "name": "华为 荣耀7",
    "price": 2000,
    "desc": "豪华版",
    "id": 1,
    'inventory': 22,
    'headImg': 'http://www.material-ui.com/images/ok-128.jpg'
  }, {
    "name": "三星 GALAXY NOTE 5",
    "price": 4555,
    "desc": "最新机型哦",
    "id": 2,
    'inventory': 5,
    'headImg': 'http://www.material-ui.com/images/ok-128.jpg'
  }];
  // res.set('Content-Type', 'application/json');
  // res.send({data:data});
  res.type('json').json({
    payload: data
  });
})


app.post("/automall/api/v1/users/:userid/orders", function(req, res) {
  console.log('掉进/api/orders');
  console.log(req.body);
  res.status(200).json(req.body);
})


app.post("/automall/api/v1/users/:userid/carProducts", function(req, res) {
  console.log('掉进/api/cart接口了');
  console.log(req.body);
  res.status(200).json(req.body);
})

app.get("/automall/api/v1/users/:userid/carProducts", function(req, res) {
  var data = {
    "payload": [{
      "id": 1,
      "name": "宝马X6/2015款 xDrive35i 尊享型",
      "price": 1040000.3,
      "inventory": "12",
      "desc": "基本参数：任何购车问题请拨打：400-897-3770",
      "tags": ["50w+", "bmw"],
      "thumb": "http://car0.autoimg.cn/carnews/2014/11/3/224X168_0_q87_20141103200817538-111.jpg"
    }]
  };
  res.status(200).json(data);
})

app.post("/automall/api/v1/users", function(req, res) {
  console.log('掉进/api/users');
  console.log(req.body);
  console.log(req.body.name);
  res.status(200).json({
    payload: {
      "id": 1,
      "name": 'hengtuo',
      "mobile": "1356666666",
      "balance": "1000"
    }
  });
});


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})
