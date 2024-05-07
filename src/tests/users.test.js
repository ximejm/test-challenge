// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

const getUser = require ("./data.js")
describe("getUser", () => {
    it('it should find a user by their username', () => { 
        const users = getUser('hpLover4')
        expect(users).toHaveProperty('username', 'hpLover4');
        expect(users).toHaveProperty("id", 1);
    });
    it("Should return undefined for non existend users", () => {
        const users = getUser("goosemontionless");
        expect(users).toBeUndefined(); 
    })
    });
const getUsers = require ("./data.js")
describe("getUser", () => {
    it('it should find a user by their id', () => { 
        const users = getUsers[2]
        expect(users).toHaveProperty('id', '3');
    });
    it("Should return undefined for non existend users", () => {
        const users = getUsers("non existend");
        expect(users).toBeUndefined(); 
    })
    });