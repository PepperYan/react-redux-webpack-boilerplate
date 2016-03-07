import aja from 'aja'

/*
*  request args
*  { url, method, header, data ...}
*/
function Request(args,onSuccess,onFail){

  if(!args.url){
    console.error("url不能为空");
    return;
  }

  const ajaxObj = initRequest();

  for(var key in args){
    ajaxObj[key](args[key]);
  }

  ajaxObj
    .on("success",onSuccess)
    .on("error",onFail || function(){})
    .go();
}

function initRequest(){
  var initialAjaxObj = aja().type('json')
  return initialAjaxObj;
}

export default Request
