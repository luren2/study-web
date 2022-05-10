// 本地测试地址
// const devBaseURL = "http://localhost:3000";
// const proBaseURL = "http://localho st:3000";

// 已经部署到服务器上的地址
const devBaseURL = 'http://123.207.32.32:9001/';
const proBaseURL = 'http://123.207.32.32:9001/';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
