// import axios from 'axios';

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   withCredentials: true,
// });

// // Interceptor para normalizar las respuestas
// api.interceptors.response.use(
//   (response) => {
//     let data = response.data;
    
//     // // Extraer arg1.data si existe
//     // if (data?.arg1?.data) {
//     //   data = data.arg1.data;
//     // }
//     // // Si solo tiene data
//     // else if (data?.data) {
//     //   data = data.data;
//     // }
    
//     response.data = data;
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );