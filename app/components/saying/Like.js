const React = require('react');
let sayingActions = require('../../actions/sayingActions');
let authUtils = require('../../utils/authUtils');

let loggedIn = authUtils.isLoggedIn();
let uid = (loggedIn && loggedIn.uid);

class LikeButton extends React.Component {

  constructor() {
    // super();
    this._changeContent = this._changeContent.bind(this);
  }

  _changeContent() {
    sayingActions.addLike(this.props.index, this.props.fbKey, uid);
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
