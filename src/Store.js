import React, {useState} from 'react';

const paths = {
    components:{
        create: 'http://localhost:4000/component/create', 
        read: 'http://localhost:4000/component/read',
        update: 'http://localhost:4000/component/update',
        delete: 'http://localhost:4000/component/delete',
      },
      experiences:{
        create: 'http://localhost:4000/experience/create', 
        read: 'http://localhost:4000/experience/read',
        update: 'http://localhost:4000/experience/update',
        delete: 'http://localhost:4000/experience/delete',
      },
      markets:{
        create: 'http://localhost:4000/market/create', 
        read: 'http://localhost:4000/market/read',
        update: 'http://localhost:4000/market/update',
        delete: 'http://localhost:4000/market/delete',
      },
      offers:{
        create: 'http://localhost:4000/offer/create', 
        read: 'http://localhost:4000/offer/read',
        update: 'http://localhost:4000/offer/update',
        delete: 'http://localhost:4000/offer/delete',
      },
      ports:{
        create: 'http://localhost:4000/port/create', 
        read: 'http://localhost:4000/port/read',
        update: 'http://localhost:4000/port/update',
        delete: 'http://localhost:4000/port/delete',
      },
      ships:{
        create: 'http://localhost:4000/ship/create', 
        read: 'http://localhost:4000/ship/read',
        update: 'http://localhost:4000/ship/update',
        delete: 'http://localhost:4000/ship/delete',
      },
      // terms:{
      //   create: 'http://localhost:4000/terms/create', 
      //   read: 'http://localhost:4000/terms/read',
      //   update: 'http://localhost:4000/terms/update',
      //   delete: 'http://localhost:4000/terms/delete',
      // },
      users:{
        create: 'http://localhost:4000/user/create', 
        read: 'http://localhost:4000/user/read',
        update: 'http://localhost:4000/user/update',
        delete: 'http://localhost:4000/user/delete',
        login: 'http://localhost:4000/user/login',
      }
}


const PathsContext = React.createContext(paths);
const DataContext = React.createContext('');
const AuthContext = React.createContext('');

function Store({children}) {

    const [data, setData] = useState('');
    const [auth, setAuth] = useState('');

    return (
        <DataContext.Provider value={[data, setData]}>
            <PathsContext.Provider value={paths}>
              <AuthContext.Provider value={[auth, setAuth]} >
                {children}
              </AuthContext.Provider>
            </PathsContext.Provider>
        </DataContext.Provider>
    )
}

export {Store, PathsContext, DataContext};
