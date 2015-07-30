const React = require('react');

let likeActions = require('../../actions/likeActions');

class LikeButton extends React.Component {

  constructor(){
    super();
    this.state = { liked: false };
    // this.handleClick = handleClick.bind(this);
    // this.changeContent = this.changeContent.bind(this);
  }

  // handleClick(e) {
  //   this.setState({liked: !this.state.liked});
  //   // likeActions.addLike(this)
  // }

  handleClick(event) {
    this.setState({liked: !this.state.liked});
  }



  render() {
    var cssSelector = this.state.liked ? '' : 'likeButton';
    return (
      <p className={cssSelector} onClick={this.handleClick}>
        💚 Favorite
      </p>
    );
  }
}


module.exports = LikeButton;
