/**
 * returns array of cookies
 */
export const getCookies = () => {
  const cookies = document.cookie
  return cookies.split('; ')
}

export const getCookieValue = (cookieName) => {
  let cookies = getCookies();
  let cookie = '';
  for (let i = 0; i < cookies.length; i ++) {
    if (cookies[i].includes(cookieName)) {
      cookie = cookies[i]
      break;
    }
  }
  return cookie.replace(`${cookieName}=`, '')
}

export const setCookie = (label, value, expirationDate=new Date(9999, 12, 12)) => {
  document.cookie = `${label}=${value};expires=${expirationDate}`
}