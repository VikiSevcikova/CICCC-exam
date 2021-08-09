// n tiles, each tile has one letter tiles[i]
// return number of possible non-empty sequences of letters

function numberOfSequences(tiles){
    //choosed set object to have unique values
    let set = new Set();
    let sequences = getSequences(tiles, set, '');

    // console.log(sequences);
    return sequences.size;
}

function getSequences(tiles, set, currentString){
    if(!tiles) return set;
    console.log("tiles: "+tiles)
    console.log("currentstring: "+currentString)
    for(let i = 0; i < tiles.length; i++){
        let currentSequence = currentString + tiles[i];
        console.log("tiles[i]: "+tiles[i]);
        console.log("currentseq: "+currentSequence);
        set.add(currentSequence);
        //here I call the same function but with the string without current character tiles[i]
        getSequences(tiles.substring(0,i)+tiles.substring(i+1), set, currentSequence);
    }
    return set;
}

console.log(numberOfSequences('AAB'));
// console.log(numberOfSequences('AAABBC'));