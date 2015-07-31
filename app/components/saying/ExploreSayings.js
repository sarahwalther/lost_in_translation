const React = require('react');

let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');

let Like = require('./Like');

class SayingContainer extends React.Component {

    constructor() {
        super();
        this.state = { sayings: [], liked: false };
        this.handleSubmit = this.handleSubmit.bind(this);
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

    addSaying(newSaying) {
        sayingActions.addItem({
            saying: newSaying
        });
    }


    handleClick(event) {

        this.setState({liked: !this.state.liked});
    }

    handleSubmit(e) {
        e.preventDefault();
        let newSaying = this.refs.newSaying.getDOMNode().value;
        if(newSaying !== "") {
            this.addItem(newSaying);
        }
        this.refs.newSaying.getDOMNode().value = "";
    }


    handleDelete(index, key){
        sayingActions.removeSaying(index, key);
    }

    render() {

        let sayings = this.state.sayings.map((item,index) => {
            return (
                <div>
                    Likes: {item.saying.likes}
                    <div>{item.saying.author}:</div>
                    <strong>{item.saying.englishLiteral}</strong>
                    <div>{item.saying.meaning}</div>
                    <div>{item.saying.equivalentEnglishVersion}</div>
                    <div>{item.saying.originalSaying}</div>
                    <div>{item.saying.language}</div>
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
                </div>



            </div>
        )
    }

}

module.exports = SayingContainer;
