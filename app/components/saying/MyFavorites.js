const React = require('react');
let Saying = require('./Saying');
let sayingActions = require('../../actions/favoriteSayingsActions');
let sayingStore = require('../../stores/sayingStore');


class MyFavorites extends React.Component {

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

      return sayingStore.getFavoriteSayings();
  }



  handleDelete(index, key){
      sayingActions.removeSaying(index, key);
  }

  render() {

    let thisSaying = this.state.sayings.map((item, index) => {

        return (

             <Saying key={index}
             englishLiteral={item.englishLiteral}
             meaning={item.meaning}
             originalSaying={item.originalSaying}
             equivalentEnglishVersion={item.equivalentEnglishVersion}
             language={item.language}
             onDelete={this.handleDelete.bind(this, index, item.key)}/>
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

}

module.exports = MyFavorites;
