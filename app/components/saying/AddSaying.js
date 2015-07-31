const React = require('react');
let sayingActions = require('../../actions/sayingActions');
let sayingStore = require('../../stores/sayingStore');


class AddSaying extends React.Component {

    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    addSaying(newSaying) {
        sayingActions.addSaying(newSaying);
    }

  handleSubmit(e){
    e.preventDefault();
    var newSaying = {
      author: this.refs.author.getDOMNode().value,
      englishLiteral: this.refs.englishLiteral.getDOMNode().value,
      meaning: this.refs.meaning.getDOMNode().value,
      originalSaying: this.refs.originalSaying.getDOMNode().value,
      equivalentEnglishVersion: this.refs.equivalentEnglishVersion.getDOMNode().value,
      language: this.refs.language.getDOMNode().value,
      keyWords: this.refs.keyWords.getDOMNode().value,
      likes: 0
    }

    this.addSaying(newSaying);

    this.refs.author.getDOMNode().value = "";
    this.refs.englishLiteral.getDOMNode().value = "";
    this.refs.meaning.getDOMNode().value = "";
    this.refs.originalSaying.getDOMNode().value = "";
    this.refs.language.getDOMNode().value = "";
    this.refs.equivalentEnglishVersion.getDOMNode().value = "";
    this.refs.keyWords.getDOMNode().value = "";
  }

  render(){
    return (
      <div>
        <form onSubmit={ this.handleSubmit } >
          <input type="text" ref="author" placeholder="Author" />
          <input type="text" ref="englishLiteral" placeholder="Literal English Translation" />
          <input type="text" ref="meaning" placeholder="Meaning" />
          <input type="text" ref="originalSaying" placeholder="Original Saying" />
          <input type="text" ref="language" placeholder="Language" />
          <input type="text" ref="equivalentEnglishVersion" placeholder="Equivalent English Version" />
          <input type="checkbox" ref="keyWords" name="key_words" value="frustration" />Frustration
          <input type="checkbox" ref="keyWords" name="key_words" value="lost" />Lost
          <input type="checkbox" ref="keyWords" name="key_words" value="confusion" />Confusion
          <br></br>
          <input type="checkbox" ref="keyWords" name="key_words" value="luck" />Luck
          <input type="checkbox" ref="keyWords" name="key_words" value="learning" />Learning
          <input type="checkbox" ref="keyWords" name="key_words" value="funny" />Funny
          <br></br><br></br>
          <input className="btn-alert" type="submit" />
        </form>
      </div>
    )
  }

}

module.exports = AddSaying;
