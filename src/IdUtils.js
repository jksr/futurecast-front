const alphaNumericRegex = /^[a-z0-9]*$/;
const numericRegex = /^[0-9]*$/;


export function isPdbId(id){
    if(id.length<4||id.length>6){
        return false
    }
    if(id.length===4){
        return alphaNumericRegex.test(id);
    }
    else{
        return alphaNumericRegex.test(id.slice(0,4)) 
            && numericRegex.test(id.slice(4));
    }
}
export function isJobId(id){
    if(id.length!==15){
        return false;
    }
    if(!id.startsWith('j_')){
        return false;
    }
    return alphaNumericRegex.test(id.slice(2));
}

export function isValidId(id){
    return isJobId(id) || isPdbId(id);
}