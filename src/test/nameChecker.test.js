// Import the js file to test
import { checkForInput } from '../client/js/nameChecker'
import { checkForURL } from '../client/js/nameChecker'

// // The describe() function takes two arguments - a string description, and a test suite as a callback function.
// // A test suite may contain one or more related tests
describe("Testing the input validation functionalities", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function checkForInput
    test('enter a string', () => {
        expect(checkForInput("Enter a Phrase")).toBe(true);
    })
    test('NOT enter a string', () => {
        expect(checkForInput("")).toBe(false);
    })

    // function checkForURL
    test('enter a valid http address', () => {
        expect(checkForURL("http://www.google.com")).toBe(true);
    })
    test('NOT enter a http address', () => {
        expect(checkForURL("I am a website")).toBe(false);
    })

});
