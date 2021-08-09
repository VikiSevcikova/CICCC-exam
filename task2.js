// n gardens labeled from 1 to n and an array paths where paths[i] = [xi yi] describes a bidirectional path between garden xi to yi
// choose a flower type for each garden such that, for any 2 gardens connected, they have different flowers
// return an array answer, where answer[i] is the type of the flower in the (i+1)th garden
// flower types are 1,2,3,4

// n= 3; paths= [[1,2],[2,3],[3,1]] -> they are in circle, so in each garden flower type has to be different
// n=4; paths= [[1,2],[3,4]] -> two and two gardens are connected, 1st and 2nd and then the 3rd and 4th, 
//                              so just the flowers in 1st and 2nd garden cannot be the same, also 3rd and 4th must have different flowers,
//                              but for example 1st and 3rd can have same type, because they are not connected

// answer has length of n

function getFlowerTypes2(n,paths){
    let answer = new Array(n);
    let map = {};
  
    for(let i = 0; i < n; i++){
        map[i+1] = new Set();
    }

    //I created map where each garden has value set of values, that it is connected with
    for(let path of paths){
        map[path[0]] = map[path[0]].add(path[1]);
        map[path[1]] = map[path[1]].add(path[0]);
    }
    console.log(map);

    //then I loop through the map and for each garden created an array of flowers, where I set the values to 0 so they are available, index+1 is the type of the flower
    for(let garden in map){
        let nextGardens = map[garden];

        let flowers = [0,0,0,0];
        //checked the answer of the current neighbour if the flower type is set, if yes then we get the value from the answer[g-1], and -1 which is the index of the flower and set it to 1
        for(let g of Array.from(nextGardens)){
            if(answer[g-1] !== null){
                flowers[answer[g-1]-1] = 1;
            }
        }
        //then I get the first index of the flower, that has value 0 and add index+1 (type of the flower) to the corresponding garden's answer
        let index = flowers.findIndex((flower) => flower === 0);
        answer[garden-1] = index+1;
    }

    return answer;
}

// let n = 3;
// let paths = [[1,2],[2,3],[3,1]];

// let n = 4;
// let paths = [[1,2],[3,4]];

let n = 4;
let paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]];
console.log(getFlowerTypes2(n, paths));