export function delete_cookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function writeCookie(c_name,value,expiredays){
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie= c_name + "=" +encodeURI(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

export function getCookie(c_name) {
  if (document.cookie.length>0){
    var c_start = document.cookie.indexOf(c_name + "=")
    if (c_start!=-1){
      c_start = c_start + c_name.length+1
      var c_end = document.cookie.indexOf(";",c_start)
      if (c_end == -1) c_end = document.cookie.length
      return decodeURI(document.cookie.substring(c_start,c_end))
    }
  }
  return null;
}

export function getUserId(){
  return getCookie('u_id');
}
