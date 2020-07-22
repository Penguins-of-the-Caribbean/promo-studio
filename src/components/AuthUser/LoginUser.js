import fetchData from '../../utils/fetch/FetchData'

export default function loginUser(email, password, history){
    fetchData().fetchUserData.login({email: email, password: password}, ()=>{
        history.push('/dashboard');
    });
}