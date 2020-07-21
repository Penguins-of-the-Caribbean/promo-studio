import jwt from 'jsonwebtoken';

export default function CheckToken(){
    let dateNow = new Date();
    let token = sessionStorage.getItem('psAuth_token');
    let decodedToken = jwt.decode(token, {complete: true});

    if(decodedToken && new Date(decodedToken.payload.exp * 1000) > dateNow){
      return true;
    }else{
      return false;
    }
  }