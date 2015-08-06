/**
 * Created by Thomas on 5/6/15.
 */
const React = require('react');

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            toggleIsOpen: false
        };
    }

    handleToggle(e){
        e.preventDefault();
        this.setState({
            toggleIsOpen: !this.state.toggleIsOpen
        });
    }

    otherhandleToggle(e){
        e.preventDefault();
        this.setState({
            othertoggleIsOpen: !this.state.othertoggleIsOpen
        });
    }

    render(){

        var styles = {
            content: {
                display: this.state.toggleIsOpen ? "block" : "none"
            },
            other: {
                display: this.state.othertoggleIsOpen ? "block" : "none"
            }
        };

        return (
            <div className="container">
                <h1>Sayings Around The World</h1>

                <section>
                    <article>
                        Find sayings from different countries and languages. See their literal translation and intended meaning.
                    </article>
                </section>

                <hr/>
                <div>
                    <p>Don't play the offended liversausage.</p>
                    <div>
                        <a href='#' onClick={this.handleToggle.bind(this)}>Original Saying</a>
                        <div style={styles.content}>
                            Spiel doch nicht die beleidigte Leberwurst.
                        </div>
                    </div>
                    <div>
                        <a href='#' onClick={this.otherhandleToggle.bind(this)}>Meaning</a>
                        <div style={styles.other}>
                            Don't get offended so easily.
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

module.exports = Home;
