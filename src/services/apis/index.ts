import axios, { AxiosInstance } from 'axios';

// import axios, { Method, AxiosResponse, AxiosInstance } from 'axios';
// import { IFCommonResponse } from 'src/interfaces/common/responseCommon';
// import Config from 'src/constants/config';

// export interface RequestConfig {
//   url: string;
//   method: Method;
//   data?: any;
//   params?: any;
//   isCustomErrorHandle?: boolean;
// }

// export interface Response {
//   response?: AxiosResponse<IFCommonResponse>;
//   error?: Error;
// }

// export const axiosClient = (config: string) => {
//   return axios.create({
//     baseURL: config,
//     withCredentials: true,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// let defaultErrorHandler = (error: Error) => alert(error.message);
// const setDefaultErrorHandler = (handler: (error: Error) => void) => {
//   defaultErrorHandler = handler;
// };
// /**
//  * axios リクエストインスタンスを生成する
//  * @param baseURL
//  * @returns
//  */
// const generateRequestClient = (baseURL: string) => {
//   const requestController = {
//     client: {} as AxiosInstance,
//     makeAxiosClient(config: string) {
//       this.client = axiosClient(config);
//     },
//     // リクエスト実行部分
//     async request(config: RequestConfig) {
//       try {
//         return { response: await this.client.request(config) };
//       } catch (error) {
//         if (defaultErrorHandler && !config.isCustomErrorHandle) {
//           defaultErrorHandler(error);
//         }
//         return { error };
//       }
//     },
//   };
//   type controllerType = typeof requestController;
//   const request: controllerType = Object.create(requestController);

//   request.makeAxiosClient(baseURL);
//   return request;
// };

// // client Axios Instance
// export const requestClient = generateRequestClient(
//   Config.CLIENT_REQUEST_BASE_URL
// );

class AxiosBase {
  axiosBaseURL: string;

  axiosCustomInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosBaseURL = baseURL;
    this.axiosCustomInstance = axios.create({
      baseURL: this.axiosBaseURL,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default AxiosBase;
