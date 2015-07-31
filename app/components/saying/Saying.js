const React = require('react');

class Saying extends React.Component {

  render() {
      return (
        <tr>
            <td>{this.props.englishLiteral}</td>
            <td><button className="btn-alert" onClick={this.props.onDelete}>X</button></td>
          </tr>
      )
  }
}

module.exports = Saying;




