import Cookie from 'js-cookie';

// 设置cookie
export function setCookie(userInfo) {
  const userArr = Object.entries(userInfo);
  for (let i = 0; i < userArr.length; i += 1) {
    Cookie.set(userArr[i][0], userArr[i][1]);
  }
}

// 获取cookie的值
export function getUserCookie() {
  return {
    username: Cookie.get('username'),
    email: Cookie.get('email'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
  };
}

// 删除cookie的值
export function removeUserCookie() {
  Cookie.remove('username');
  Cookie.remove('email');
  Cookie.remove('appkey');
  Cookie.remove('role');
  return true;
}
