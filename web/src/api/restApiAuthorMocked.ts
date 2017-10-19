import delay from "./delay";
import {IAuthor} from "../data/interfaces";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
    {
        id: "cory-house",
        firstName: "Cory",
        lastName: "House"
    },
    {
        id: "scott-allen",
        firstName: "Scott",
        lastName: "Allen"
    },
    {
        id: "dan-wahlin",
        firstName: "Dan",
        lastName: "Wahlin"
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
    return author.firstName.toLowerCase() + "-" + author.lastName.toLowerCase();
};

export function getAllAuthors() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Object.assign([], authors));
        }, delay);
    });
}

export function saveAuthor(author) {
    author = Object.assign({}, author); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate server-side validation
            const minAuthorNameLength = 3;
            if (author.firstName.length < minAuthorNameLength) {
                reject(`First Name must be at least ${minAuthorNameLength} characters.`);
            }

            if (author.lastName.length < minAuthorNameLength) {
                reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
            }

            if (author.id) {
                const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
                authors.splice(existingAuthorIndex, 1, author);
            } else {
                //Just simulating creation here.
                //The server would generate ids for new authors in a real app.
                //Cloning so copy returned is passed by value rather than by reference.
                author.id = generateId(author);
                authors.push(author);
            }

            resolve(author);
        }, delay);
    });
}

export function deleteAuthor(authorId: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const indexOfAuthorToDelete = authors.findIndex((author: IAuthor) => {
                return author.id === authorId;
            });
            authors.splice(indexOfAuthorToDelete, 1);
            resolve();
        }, delay);
    });
}
