const setAuth = (user = null) => {
        // set user to localstorage
        if(user) {
            localStorage.setItem('user',JSON.stringify(user));
        } else {
            localStorage.removeItem();
        }
}

const getAuth = () => {
    // set user to localstorage
    let user = localStorage.getItem('user');
    if(user) {
        return JSON.parse(user);
    } 
    return null;
}

export default {
        setAuth,
        getAuth
}


