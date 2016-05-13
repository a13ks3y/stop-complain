'use strict';
let getCurrentUser = () => {
    return {
        isAuth: false
    }
};
module.exports = {
    getState: () => {
        return {
            currentUser: getCurrentUser(),
            users: []
        }
    }
};