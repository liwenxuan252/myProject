// 用户操作的接口处理
import axios from '@/axios';

export default {
  login(params) {
    return axios.post('/passport/login', params);
  },
};
