let React = require('react');
let TestUtils = require('react/lib/ReactTestUtils');
let ExploreSayings = require('../app/components/saying/ExploreSayings');

describe('ExploreSayings Component', () => {

    let component = TestUtils.renderIntoDocument(<ExploreSayings />);

    it('renders', () => {
        expect(component).toBeTruthy()
    });

    it('holds an array in state.sayings', () => {
        let sayings = component.state.sayings;
        expect(sayings).toEqual(jasmine.any(Array));
    });

    it('holds all the likes', () => {
        let likes = React.findDOMNode(component.refs.likes);
        expect(likes).toBeDefined();
    })

    it('has state', () => {
        expect(component.state).toBeDefined();
    });

});

