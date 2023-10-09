export const GRID_SIZE = 10;

export const UNCLICKED = 'UNCLICKED';
export const MISS = 'MISS';
export const HIT = 'HIT';
export const TOTAL = 'TOTAL';

export const SHIP_TYPES = {
    carrier: { size: 5, count: 1 },
    battleship: { size: 4, count: 1 },
    cruiser: { size: 3, count: 1 },
    destroyer: { size: 2, count: 1 },
    submarine: { size: 3, count: 1 },
}

export const LAYOUT = [
    { ship: 'carrier', positions: [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
    { ship: 'battleship', positions: [[5, 2], [5, 3], [5, 4], [5, 5]] },
    { ship: 'cruiser', positions: [[8, 1], [8, 2], [8, 3]] },
    { ship: 'submarine', positions: [[3, 0], [3, 1], [3, 2]] },
    { ship: 'destroyer', positions: [[0, 0], [1, 0]] },
]

export function getGridWithShips(){
    let grid: [[string?]] = [] as unknown as [[string]];

    for(let row=0; row < GRID_SIZE; row++){
        grid[row] = [];
        for(let col =0; col < GRID_SIZE; col++){
            grid[row][col] = UNCLICKED
        }
    }

    for(let item of LAYOUT){
        for(let position of item.positions){
            grid[position[0]][position[1]] = item.ship;
        }
    }

    return grid;
}