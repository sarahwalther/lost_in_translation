const React = require('react');
let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');
let Like = require('./Like');

class SayingContainer extends React.Component {

    constructor() {
        super();
        this.state = { sayings: [] };
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

    returnSayings() {
        return sayingStore.getSayings();
    }

    addSaying(newSaying) {
        sayingActions.addItem({
            title: newSaying
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newSaying = this.refs.newSaying.getDOMNode().value;
        if(newSaying !== "") {
            this.addItem(newSaying);
        }
        this.refs.newSaying.getDOMNode().value = "";
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }

    handleDelete(index, key){
        sayingActions.removeSaying(index, key);
    }

    render() {

        let sayings = this.state.sayings.map((item,index) => {
            return (
                <div>
                    <div>{item.title.author}:</div>
                    <strong>{item.title.englishLiteral}</strong>
                    <div>{item.title.meaning}</div>
                    <div>{item.title.equivalentEnglishVersion}</div>
                    <div>{item.title.originalSaying}</div>
                    <div>{item.title.language}</div>

                </div>
            )
        });

        let randomItem = sayings[Math.floor(Math.random()*sayings.length)];

        let test = function() { return <Like/> };
        let index = 1;
        let item = 2;
        var cssSelector = this.state.liked ? 'likeButton' : '';
        return (

            <div className="explore-container">
                <h1>Explore Sayings</h1>


                <br />

                <div className="explore-saying">
                        { randomItem }
                        <Like handleClick={this.handleClick}/>
                </div>



            </div>
        )
    }

    changeContent() {
        // debugger;
        this.setState({
            sayings: this.returnSayings()
        })
    }

}

module.exports = SayingContainer;
