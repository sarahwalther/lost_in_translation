const React = require('react');
let Saying = require('./Saying');
let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');

class MyFavorites extends React.Component {

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

  returnSaying() {
      return sayingStore.getSayings();
  }

  addSaying(newSaying) {
      sayingActions.addSaying({
          title: newSaying
      });
  }

  handleSubmit(e){
      e.preventDefault();
      var newSaying = {
        author: this.refs.author.getDOMNode().value,
        english_literal: this.refs.englishLiteral.getDOMNode().value,
        meaning: this.refs.meaning.getDOMNode().value,
        original_saying: this.refs.originalSaying.getDOMNode().value,
        language: this.refs.language.getDOMNode().value
        // key_words: this.refs.keyWords.getDOMNode().value
      }

      this.addSaying(newSaying);

      this.refs.author.getDOMNode().value = "";
      this.refs.englishLiteral.getDOMNode().value = "";
      this.refs.meaning.getDOMNode().value = "";
      this.refs.originalSaying.getDOMNode().value = "";
      this.refs.language.getDOMNode().value = "";
      // this.refs.keyWords.getDOMNode().value = "";
    }

  handleDelete(index, key){
      sayingActions.removeSaying(index, key);
  }

  render() {
    let thisSaying = this.state.sayings.map((currentSaying,index) => {
      return (
        <div>
          <Saying key={index} currentSaying={ currentSaying } onDelete={this.handleDelete.bind(this, currentSaying, item.key)}/>
        </div>
      )
    });

    return (
      <div>
         <h1>My Favorite Sayings</h1>

        <br />

        <table>
          <thead>
          <tr>
            <th>Saying</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            { thisSaying }
          </tbody>
        </table>
      </div>
    )
  }

  changeContent() {
      this.setState({
          saying: this.returnSaying()
      })
  }

}

module.exports = MyFavorites;
