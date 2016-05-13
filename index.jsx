var ReactDOM = require('react-dom');
var Auth = require('./components/auth.jsx');
ReactDOM.render(
    <div className="main">
        <h1>Stop complain</h1>
        <Auth/>
    </div>
, document.getElementById('content'));
