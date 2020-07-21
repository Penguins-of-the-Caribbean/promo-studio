export default function LogoutUser(){
  sessionStorage.removeItem('psAuth_token');
  return '/'
}