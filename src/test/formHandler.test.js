// Import the js file to test
import { handleSubmit } from '../client/js/formHandler'
import { handleSubmit2 } from '../client/js/formHandler'
import {createLanguageTable, appendLanguage, createCategoryTable, appendCategory} from '../client/js/formHandler'
import { onBlur,onFocus } from '../client/js/formHandler'

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionalities exist", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.

    // function handleSubmit
    test('verify handleSubmit exist', () => {
        expect(handleSubmit).toBeDefined();
    })

    // function handleSubmit2
    test('verify handleSubmit2 exist', () => {
        expect(handleSubmit2).toBeDefined();
    })

    // function createLanguageTable
    test('verify createLanguageTable exist', () => {
        expect(createLanguageTable).toBeDefined();
    })

    // function appendLanguage
    test('verify appendLanguage exist', () => {
        expect(appendLanguage).toBeDefined();
    })

    // function createCategoryTable
    test('verify createCategoryTable exist', () => {
        expect(createCategoryTable).toBeDefined();
    })

    // function appendCategory
    test('verify appendCategory exist', () => {
        expect(appendCategory).toBeDefined();
    })

    // function onBlur
    test('verify onBlur exist', () => {
        expect(onBlur).toBeDefined();
    })

    // function onFocus
    test('verify onFocus exist', () => {
        expect(onFocus).toBeDefined();
    })

});