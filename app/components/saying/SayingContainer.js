const React = require('react');
let Saying = require('./Saying');
let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');

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
            saying: newSaying
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

    handleDelete(index, key){
        sayingActions.removeSaying(index, key);
    }

    render() {

        let sayings = this.state.sayings.map((item,index) => {
            return (
                <Saying key={index} item={ item } onDelete={this.handleDelete.bind(this, index, item.key)}/>
            )
        });

        return (
            <div className="container">
                <h1>Sayings</h1>

                <form onSubmit={this.handleSubmit}>
                    <input ref="newItem" type="text" placeholder="New item" />
                    <button className="btn-action">Submit</button>
                </form>
                <br />

                <table>
                    <thead>
                        <tr>
                            <th>Saying</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { sayings }
                    </tbody>
                </table>


            </div>
        )
    }

    changeContent() {
        this.setState({
            sayings: this.returnSayings()
        })
    }

}

module.exports = SayingContainer;
