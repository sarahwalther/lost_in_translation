let React = require('react');
let TestUtils = require('react/lib/ReactTestUtils');
let AddSaying = require('../app/components/saying/AddSaying');

describe('AddSaying Component', () => {
    let component = TestUtils.renderIntoDocument(<AddSaying />);

    describe('on form submit', () => {

        let form = TestUtils.scryRenderedDOMComponentsWithTag(component, 'form');
        let authorInput = React.findDOMNode(component.refs.author);
        let englishLiteralInput = React.findDOMNode(component.refs.englishLiteral);
        let keyWordsInput = React.findDOMNode(component.refs.keyWords);
        let meaningInput = React.findDOMNode(component.refs.meaning);

        beforeEach( () => {
            spyOn(component, "addSaying");
        });

        it('calls addSaying function with a new saying object', () => {
            // Set up test object.
            let inputObject = { author: 'A Saying', englishLiteral: 'Blah Blah', meaning: '', originalSaying: '', equivalentEnglishVersion: '', language: '', keyWords: 'funny', likes: 0 };
            // console.log(input.refs)
            // type into form what we want to set up.
            authorInput.value = "A Saying";
            englishLiteralInput.value = "Blah Blah";
            keyWordsInput.value = "funny";
            meaningInput.value = "";

            TestUtils.Simulate.submit(form[0]);
            expect(component.addSaying).toHaveBeenCalled();
            expect(component.addSaying).toHaveBeenCalledWith(inputObject);
            expect(component.addSaying.calls.mostRecent().args).toEqual([jasmine.any(Object)]);

        });

        it('clears the input box', () => {
            // input.value = "A Saying";
            authorInput.value = "A Saying";
            englishLiteralInput.value = "Blah Blah";
            keyWordsInput.value = "funny";
            meaningInput.value = "";

            TestUtils.Simulate.submit(form[0]);
            expect(authorInput.value).toEqual("");
        });

    });
});
