import request from './request';

export default function getBannerApi() {
  return request({
    url: '/banner',
    method: 'get',
    // params: {
    //   type: 'movie',
    //   source: 'index',
    // },
  });
}
