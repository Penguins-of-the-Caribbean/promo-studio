export default function logoutUser(){
  sessionStorage.removeItem('psAuth_token');
  return '/'
}