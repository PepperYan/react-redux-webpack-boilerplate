import Request from '../../utils/request'
export const NEWCOMPONENTLIST = "NEWCOMPONENTLIST"

export function fetchList(){
  return dispatch => {
    var data = [1,2,3,4,5,6,7];

    // Request({
    //   url: '/canteen-orders/api/v1/orders/',
    //   method:"post",
    //   body:data
    // }, function(response){
    //   dispatch(list(data))
    // });

    dispatch(list(data))
  }
}

export function list(list){
  return {
    type:NEWCOMPONENTLIST,
    list
  }
}
