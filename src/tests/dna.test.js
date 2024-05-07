const DNA = require ("./dna"); 
const isvalidDNA = require("./dnafunctions"); 

describe ('isvalidDNA', () => { 
    it('it should retrieve the correct user for a given string', () => { 
        const DNA = DNA[0]; 
        expect(DNA(1)).toEqual(DNA);
    });

