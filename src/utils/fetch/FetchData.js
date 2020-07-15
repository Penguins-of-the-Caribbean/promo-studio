import axios from 'axios';
import tokenConfig from '../config/token/tokenConfig';

export default function (){

    return {
        fetchAllData: (cb)=> {
            axios.all([
                axios.get('http://localhost:4000/component/read', tokenConfig()),
                axios.get('http://localhost:4000/experience/read', tokenConfig()),
                axios.get('http://localhost:4000/market/read', tokenConfig()),
                axios.get('http://localhost:4000/offer/read', tokenConfig()),
                axios.get('http://localhost:4000/port/read', tokenConfig()),
                axios.get('http://localhost:4000/ship/read', tokenConfig())
            ])
            .then(axios.spread((components, experiences, markets, offers, ports, ships)=>{
                cb({
                    components: components.data,
                    experiences: experiences.data,
                    markets: markets.data,
                    offers: offers.data,
                    ports: ports.data,
                    ships: ships.data
                });
            }))
            .catch((error)=> {
                return error;
            });
        },
        fetchComponentData: {
            create: (data)=>{
                axios.post('http://localhost:4000/component/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/component/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/component/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/component/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/component/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error
                })
            }
        },
        fetchExperienceData: {
            create: (data)=> {
                axios.post('http://localhost:4000/experince/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: (cb)=> {
                axios.get('http://localhost:4000/experience/read', tokenConfig())
                .then((res)=>{
                    cb({experiences: res.data})
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/experience/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/experience/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=>{
                axios.delete('http://localhost:4000/experience/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error
                })
            }
        },
        fetchMarketData: {
            create: (data)=> {
                axios.post('http://localhost:4000/market/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/market/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/market/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/market/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/market/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            }
        },
        fetchOfferData: {
            create: (data)=> {
                axios.post('http://localhost:4000/offer/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/offer/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/offer/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/offer/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/offer/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            }
        },
        fetchPortData: {
            create: (data)=> {
                axios.post('http://localhost:4000/port/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/port/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/port/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/port/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/port/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            }
        },
        fetchShipData: {
            create: (data)=> {
                axios.post('http://localhost:4000/ship/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/ship/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/ship/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/ship/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/ship/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            }
        },
        fetchTermsData: {
            create: (data)=> {
                axios.post('http://localhost:4000/terms/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/terms/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            readSingle: (id)=> {
                axios.get('http://localhost:4000/terms/read/'+id, tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/terms/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/terms/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            }
        },
        fetchUserData: {
            create: (data)=> {
                axios.post('http://localhost:4000/user/create', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            read: ()=> {
                axios.get('http://localhost:4000/user/read', tokenConfig())
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            update: (data)=> {
                axios.post('http://localhost:4000/user/update', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            delete: (data)=> {
                axios.delete('http://localhost:4000/user/delete', tokenConfig(), data)
                .then((res)=>{
                    return res.data;
                })
                .catch((error)=>{
                    return error;
                })
            },
            login: (data, cb)=>{
                if(data.email && data.password){
                    axios.post('http://localhost:4000/user/login', {email: data.email, password: data.password})
                    .then((res)=>{
                      if(res.data.auth === true){
                        sessionStorage.setItem('psAuth_token', res.data.token);
                        cb();
                      }else if(res.data.auth === false){
                        console.log(res.data.message);
                      }
                    })
                    .catch((error)=>{
                        console.log(error.message)
                      return error;
                    });
                  }else{
                      return {error: 'Email or password not valid'}
                  }
            }
        }
    }

}