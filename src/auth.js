export const Autenticando = {
    isAuthenticated: false,
    authenticate(argumento){
        Autenticando.isAuthenticated = true;
    },
    signout(argumento){
        Autenticando.isAuthenticated = false;
    }
};
