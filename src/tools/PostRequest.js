import { BasePort } from './BasePort.js';
import { BaseUrl } from './BaseUrl.js';

export const LoginRequest = `${BaseUrl}${BasePort}/users/login`; //登录请求
export const RegisterRequest = `${BaseUrl}${BasePort}/users/register`; //注册请求