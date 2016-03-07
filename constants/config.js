var config = {
  location: '10.108.10.179',
  port: '3010',
  // location: '10.108.1.207',
  // port:'8888',
  service: "/canteen-orders",
  prefix: 'api',
  version: 'v1'
}

//http://localhost:3010/automall/api/v1
export default function baseUrl(service) {
  return
  `http://${config.location}:${config.port}${service ? service : config.service}/${config.prefix}/${config.version}`
}
