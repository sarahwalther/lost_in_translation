const React = require('react');

class Saying extends React.Component {

  render() {
      return (
        <tr>
            <td>
              <p><strong>{this.props.englishLiteral}</strong></p>
              <p>{this.props.meaning}</p>
              <p>{this.props.equivalentEnglishVersion}</p>
              <p>{this.props.originalSaying}</p>
              <p>{this.props.language}</p>
            </td>
            <td><button className="btn-alert" onClick={this.props.onDelete}>X</button></td>
          </tr>
      )
  }
}

module.exports = Saying;




