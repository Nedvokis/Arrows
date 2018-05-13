// import apisauce from 'apisauce';
// import { MAIN_API_URL, CHAT_API_URL } from '../constants/urls';
// import ENDPOINTS from '../constants/endpoints';
// import { HTTP_STATUS_CODE, HTTP_STATUS } from '../constants/httpStatusCodes';
// import errors from '../utils/errors';
// import createTokenHeader from '../utils/createTokenHeader';

const create = () => {
  return {

  };
};

// const create = (baseURL = MAIN_API_URL) => {
//
//   const api = apisauce.create({
//     baseURL,
//     headers: {
//       'Cache-Control': 'no-cache',
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
//
//   if (__DEV__) {
//     api.addMonitor((response) => console.warn(`#API => ${response.config.method}`, response.config.url, response.data, response));
//   }
//
//   async function checkToken(token) {
//     const response = await api.post(ENDPOINTS.checkToken(), {}, createTokenHeader(token));
//     if (response.ok) {
//       return HTTP_STATUS_CODE[response.status];
//     } else {
//       if (response.status === 426) {
//         return HTTP_STATUS_CODE[response.status];
//       } else {
//         throw new errors.ApiError(`ENDPOINTS# ${ENDPOINTS.checkToken()}`, response);
//       }
//     }
//   }
//
//
//
//   return {
//
//   };
// };

export default {
  create,
};