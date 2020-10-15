module.exports = function toReadable (number) {
    var triplet = new Array();
    let y = number;
    for (let i = 0; i < 3; i++) {
        triplet[i] = y % 10;
        y = Math.floor(y / 10);
    }
    
    let result = createReadable(triplet);
    result = result.trim();

    return result;

}

function createReadable(triplet) {
    let result = '';
    const digitArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const difficultNumArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decadesArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (triplet[0] === 0 && triplet[1] === 0 && triplet[2] === 0)
        return 'zero';

    if (triplet[2] != 0) {
        result += digitArray[triplet[2]] + ' hundred';
    }
    if (triplet[1] != 0 && triplet[1] != 1) {
        result += ' ' + decadesArray[triplet[1]];    
        if (triplet[0] != 0) {
            result += ' ' + digitArray[triplet[0]];
        } 
    } else {
        if (triplet[1] === 1)
            result += ' ' + difficultNumArray[triplet[0]];
        else
            if (triplet[0] != 0) {
                result += ' ' + digitArray[triplet[0]];
            } 
    }

    return result; 
}
