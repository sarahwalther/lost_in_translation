require('normalize.css/normalize.css');
require('./styles/main.scss');

const React = require('react');

// top level components for layouts
let Navigation = require('./components/Navigation');
let Home = require('./components/Home');
let Login = require('./components/login/Login');
let Account = require('./components/Account');
let Saying = require('./components/saying/Saying');
let AddSaying = require('./components/saying/AddSaying');
let MyFavorites = require('./components/saying/MyFavorites');
let ExploreSayings = require('./components/saying/ExploreSayings');
let LikeButton = require('./components/saying/Like')

class App extends React.Component {

    render() {

        let ui = null;

        switch(this.props.route) {

            case "home":
                ui = homeRoute;
                break;

            case "explore":
                ui = exploreRoute;
                break;

             case "newsaying":
                ui = newSayingRoute;
                break;

            case "myfavorites":
                ui = myFavoritesRoute;
                break;

            case "login":
                ui = loginRoute;
                break;

            case "account":
                ui = accountRoute;
                break;

            default:
                ui = homeRoute;
        }

        return ui ;

    }
}

let homeRoute = (
    <div>
        <Navigation />
        <Home />
    </div>
);

let exploreRoute = (
    <div>
        <Navigation />
        <ExploreSayings />
    </div>
);

let newSayingRoute = (
    <div>
        <Navigation />
        <AddSaying />
    </div>
);

let myFavoritesRoute = (
    <div>
        <Navigation />
        <MyFavorites />
    </div>
);


let loginRoute = (
    <div>
        <Navigation />
        <Login />
    </div>
);

let accountRoute = (
    <div>
        <Navigation />
        <Account />
    </div>
);

module.exports = App;
