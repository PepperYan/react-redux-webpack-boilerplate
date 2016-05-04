import Request from '../../utils/request'
// import { Schema, arrayOf, normalize } from 'normalizr'
import CALL_API from './CALL_API'
import { isRSAA, validateRSAA } from './validation'

/**
* 该中间件遵循RSAA 标准
* 使用方法 在action处定义
*/
async function callApi(endpoint, args) {
  var data;
  if(args.url){
    console.error("请不要在headers定义url");
  }
  try{
    data = await Request(Object.assign({},args,{url:endpoint}));
  } catch(e) {
    console.error('请求失败,rejected');
  }
  return data;
}

// 在RSAA上额外添加一个headers
// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => async action => {
  const callAPI = action[CALL_API];

  // Do not process actions without a [CALL_API] property
  if (!isRSAA(action)) {
    return next(action);
  }

  let { endpoint } = callAPI
  // const { schema, types } = callAPI
  const { method, body, credentials, bailout, types, headers} = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  // if (!schema) {
  //   throw new Error('Specify one of the exported Schemas.')
  // }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  //修改,使用payload把data包起来, 把RSAA的body转成data
  return callApi(endpoint, { method, data: body, credentials, types, ...headers}).then(
    response => next(actionWith({
      payload: response.payload? response.payload : response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
