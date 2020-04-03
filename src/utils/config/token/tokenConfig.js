export default function(){
    return {headers: {"Authorization": `Bearer ${sessionStorage.getItem('psAuth_token')}`}}
}