// You already have the methods imported
import { default as expect } from "expect";
import { getUser, getUsers } from "../users";

// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

// READ documentation

const users = require ("./data.js")
describe("getUserByUserName", () => {
    it('it should find a user by their username', () => { 
        const users = getUserByUserName('hpLover4')
        expect(users).toHaveProperty('username', 'hpLover4');
        expect(users).toHaveProperty("id", 1);
    });
    it("Should return undefined for non existend users", () => {
        const users = getUserByUserName("goosemontionless");
        expect(users).toBeUndefined(); 
    })
    });
    