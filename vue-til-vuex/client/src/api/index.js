import createAxiosInstance from '@api/axios/'

const setCommonExceptionHandler = error => console.log('setCommonExceptionHandler', error)

const createReq = config =>
  createAxiosInstance({ ...config })
    .then(res => {
      console.log('AXIOS REQUEST SUCCESS', res)
      return res
    })
    .catch(error => {
      console.log('AXIOS REQUEST ERROR', error)
      return Promise.reject({
        error: error,
        handler: setCommonExceptionHandler
      })
    })
// promise reject 사용 방법
// Promise.reject(
//     new Error('fail')
//     )
//     .then(function() {
//     // not called
//   }, function(error) {
//     console.error(error); // Stacktrace
//   }
// );

export { createReq }
