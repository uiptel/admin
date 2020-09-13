import config from './config';

const login = async ({username, password}) => {
    console.log(`username => ${username}, password => ${password}`);
    
    const { apiUrl } = config;
    const request = new Request(`${apiUrl}/auth/login`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    
    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
               throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ access_token }) => {
            localStorage.setItem('token', access_token);
        });
};

const logout = () => {
    localStorage.removeItem('token');
    return Promise.resolve();
};

const checkError = error => {
    console.error('checkError =>', error);

   /* if (status === 401 || status === 403) {
        localStorage.removeItem('token');
        return Promise.reject();
    }*/
    return Promise.resolve();
};

const checkAuth = () => {
    return localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject();
};

const authProvider = {
    login,
    checkError,
    checkAuth,
    logout,
    getPermissions: params => Promise.resolve(),
};

export default authProvider;
