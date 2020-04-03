import React, {useState} from 'react';

const DataContext = React.createContext('');
const AuthContext = React.createContext('');

function Store({children}) {

    const [data, setData] = useState('');
    const [auth, setAuth] = useState('');

    return (
        <DataContext.Provider value={[data, setData]}>
          <AuthContext.Provider value={[auth, setAuth]} >
            {children}
          </AuthContext.Provider>
        </DataContext.Provider>
    )
}

export {Store, DataContext};
