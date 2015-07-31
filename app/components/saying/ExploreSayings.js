const React = require('react');

let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');

let Like = require('./Like');

class ExploreSayings extends React.Component {

    constructor() {
        super();
        this.state = { sayings: [], liked: false };
        this.changeContent = this.changeContent.bind(this);
    }

    componentDidMount() {
        sayingStore.addChangeListener(this.changeContent);
        sayingActions.getSayings();
    }

    componentWillUnmount() {
        sayingStore.removeChangeListener(this.changeContent);
    }

    changeContent() {
        this.setState({
            sayings: this.returnSayings()
        })
    }

    returnSayings() {
        return sayingStore.getSayings();
    }

    nextSaying(){
        this.changeContent();
    }

    render() {

        let sayings = this.state.sayings.map((item,index) => {
            return (
                <div>
                    Likes: {item.likes}
                    <div>{item.author}:</div>
                    <strong>{item.englishLiteral}</strong>
                    <div>{item.meaning}</div>
                    <div>{item.equivalentEnglishVersion}</div>
                    <div>{item.originalSaying}</div>
                    <div>{item.language}</div>
                    <Like index={index} fbKey={item.key} />

                </div>
            )
        });

        let randomItem = sayings[Math.floor(Math.random()*sayings.length)];


        return (

            <div className="explore-container">
                <h1>Explore Sayings</h1>


                <br />

                <div className="explore-saying">

                        { randomItem }

                    <div id="next-button" onClick={this.nextSaying.bind(this)}><img src="/images/next.png"/></div>
                </div>



            </div>
        )
    }

}

module.exports = ExploreSayings;
