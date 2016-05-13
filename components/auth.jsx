'use strict';
let React = require('react');
module.exports = Auth;
class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: !!props.isAuth
        }
    }
    static getTitle(isAuth) {
        return isAuth ? 'You already authorized' : 'Auth please'
    }
    render() {
        console.log('render auth component');
        return <div className="modal">
            <div className="modal__body">
                <div className="modal__body__title">
                    { Auth.getTitle(this.state.isAuth) }
                </div>
                <div className="modal__body__form">
                    <div className="modal__body__form__line">
                        <label htmlFor="login">Login</label>
                        <input type="password"/>
                    </div>
                </div>
            </div>
        </div>
    }
}
