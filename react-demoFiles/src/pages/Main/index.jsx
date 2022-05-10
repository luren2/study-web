import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import getBannerApi from '@/services/api';

export default function Main() {
  getBannerApi().then((res) => {
    console.log(res);
  });

  // axios
  //   .request({
  //     url: '/search_tags?type=movie&source=index',
  //     method: 'get',
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   });

  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
}
