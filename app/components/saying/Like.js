const React = require('react');
let sayingActions = require('../../actions/sayingActions');

class LikeButton extends React.Component {

  constructor() {
    // super();
    this._changeContent = this._changeContent.bind(this);
  }

  _changeContent() {
    sayingActions.addLike(this.props.index, this.props.fbKey);
  }

  render() {
    return (
      <p className="likeButton" onClick={this._changeContent}>
        💚 Favorite
      </p>
    );
  }
}


module.exports = LikeButton;
