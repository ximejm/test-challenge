const DNA = ["CTAG", "CAGT", "CGTA", "CATG"]
  
function isvalidDNA (DNA) { 
    if (DNA === "") {
        return false; 
    }
    
    for (let i=0; i<DNA.length; i++) {
        if (DNA[i] !== 'C' && DNA[i] !== 'T' && DNA[i] !== 'A' && DNA[i] !== 'T')
        return false; 
    }
    return true; 
    }
    console.log(isvalidDNA("CTAG")); 
    console.log(isvalidDNA("CTXG"));
    console.log(isvalidDNA("ctag"));
    console.log(isvalidDNA(""));
    
    module.exports = {isvalidDNA}; 
    
module.exports = {DNA}