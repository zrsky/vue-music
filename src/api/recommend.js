import originJsonp from '../common/js/jsonp.js';
import {commonParam,options} from '../api/config.js';

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({},commonParam,{
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  });
  return originJsonp(url,data,options);
}
