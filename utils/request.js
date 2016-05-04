import $ from 'jquery'


/*
*  request args ,jquery ajax的args
*  { url, method, header, data ...}
*/
function Request(args){

  if(!args.url){
    console.error("url不能为空");
    return;
  }

  var baseConfig = {
    'Content-Type':'application/json'
  }

  //如果用户没设置下面两个属性则自动设置,如果有设置,将被用户的设置覆盖
  if(args.credentials && args.credentials != 'include'){
    delete args.credentials
    baseConfig.xhrFields = {
      withCredentials: true
    }
    baseConfig.crossDomain = true
  }

  const finalConfig = Object.assign({}, baseConfig, args)

  return new Promise((resolve,reject) => {
    $.ajax(finalConfig).then(
      (data,xhr) =>{
        resolve(data)
      },
      (err) => {
        reject(err)
      })
  })

}


export default Request
