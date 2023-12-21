const mock_input: string = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;


function replaceGalaxiesWithNumber(input: string): [string, number]{
    let i = 0;
    while(input.indexOf("#") !== -1){
        input = input.replace("#", i);
        i ++;
    }
    return [input, i];
}

function findEmptyRows(input: string): number[]{
    let ret = [];
    let i = 0;
    for(const row of input.split("\n")){
        if(row.match(/\d/g) === null ){
            ret.push(i);
        }
        i++;
    }
    return ret;
}

function extractCol(input: string, idx: number): string{
    let ret = "";
    const rowLength = input.indexOf("\n") + 1;
    for(let i = idx; i < input.length; i += rowLength){
        ret += input.charAt(i)
    }
    return ret;
}

function findEmptyColumns(input: string): number[]{
    const numberOfCols = input.indexOf("\n");
    const ret: number[] = [];
    for(let i = 0; i < numberOfCols - 1; i ++){
        if(extractCol(input, i).match(/\d/g) === null){
            ret.push(i);
        }
    }
    return ret;
}

function getGalaxyCoordinates(universe: string, galaxy: number): [number, number]{
    const dist = universe.indexOf(galaxy.toString());
    const numberOfCols = universe.indexOf("\n") + 1;
    return [dist % numberOfCols, Math.floor(dist / numberOfCols)]
}

function isBetween(x: number, minOrMax1: number, minOrMax2: number): boolean{
    if(minOrMax1 == minOrMax2){
        return false;
    }
    if(minOrMax1 > minOrMax2){
        return isBetween(x, minOrMax2, minOrMax1);
    }
    const min_ = minOrMax1;
    const max_ = minOrMax2;
    return min_ < x && x < max_;
}

function distanceBetweenGalaxies(universe: string,
                                 galaxy1: number,
                                 galaxy2: number,
                                 expandedRows: number[],
                                 expandedColumns: number[]){
    const [g1x, g1y] = getGalaxyCoordinates(universe, galaxy1);
    const [g2x, g2y] = getGalaxyCoordinates(universe, galaxy2);
    expandedRows.filter(x => isBetween(x, g1x, g2x)).length
    return Math.abs(g1x - g2x)
        + Math.abs(g1y - g2y)
        + expandedRows.filter(x => isBetween(x, g1x, g2x)).length
        + expandedColumns.filter(x => isBetween(x, g1y, g2y)).length
}

const [universe, nbrGalaxies] = replaceGalaxiesWithNumber(mock_input)
console.log(universe)
console.log("ho lala")

const expandedRows = findEmptyRows(universe);
const expandedColumns = findEmptyColumns(universe);
console.log(expandedColumns)
console.log(expandedRows)
// console.log(distanceBetweenGalaxies(universe, 4, 8, expandedRows, expandedColumns));
// console.log(distanceBetweenGalaxies(universe, 0, 6, expandedRows, expandedColumns));
console.log(distanceBetweenGalaxies(universe, 2, 5, expandedRows, expandedColumns));
// console.log(distanceBetweenGalaxies(universe, 7, 8, expandedRows, expandedColumns));


console.log("fenni")
