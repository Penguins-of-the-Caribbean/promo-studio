import jwt from 'jsonwebtoken'

export default function AuthUser() {

  let dateNow = new Date();
  let token = sessionStorage.getItem('psAuth_token');
  let decodedToken = jwt.decode(token, {complete: true});

  return decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow ? true : false ;
  
}
