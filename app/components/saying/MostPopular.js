const React = require('react');
let Saying = require('./Saying');
let sayingActions = require('../../actions/popularSayingActions');
let sayingStore = require('../../stores/sayingStore');

class MostPopular extends React.Component {

    constructor() {
        super();
        this.state = { sayings: [] };
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
        return sayingStore.getPopularSayings();
    }

    render() {

        let sayings = this.state.sayings.map((item,index) => {
            return (
                <div>
                    <h3>{item.englishLiteral}</h3>
                    <p>number of likes: {item.likes}</p>
                    <em>-{item.author}</em>
                    <hr />
                </div>
            )
        });

        return (
            <div className="container">
                <h1>Most Popular Sayings</h1>
                <hr />
                { sayings }


            </div>
        )
    }
}

module.exports = MostPopular;
