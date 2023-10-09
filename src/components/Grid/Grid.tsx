import {getGridWithShips, GRID_SIZE, HIT, MISS, TOTAL, UNCLICKED} from "../../const";
import Cell from "../Cell/Cell";
import styles from './Grid.module.css';
import {SHIP_TYPES, LAYOUT} from "../../const";
import {useState} from "react";

type Ship = 'carrier' | 'battleship' | 'cruiser' | 'destroyer' | 'submarine'

const Grid = () => {

    const [grid, setGrid] = useState(getGridWithShips());

    const [_, setHits] = useState({
        carrier: SHIP_TYPES.carrier.size,
        battleship: SHIP_TYPES.battleship.size,
        cruiser: SHIP_TYPES.cruiser.size,
        destroyer: SHIP_TYPES.destroyer.size,
        submarine: SHIP_TYPES.submarine.size,
    })

    const handleCellClick = (row: number, col: number) => {
        setGrid((prev) => {
            let newPrev = [...prev];
            newPrev[row] = [...newPrev[row]];

            if(grid[row][col] !== UNCLICKED && grid[row][col] !== MISS){
                const ship = newPrev[row][col];

                newPrev[row][col] = `${ship}${HIT}`;
            } else {
                newPrev[row][col] = MISS;
            }

            return newPrev as [[(string | undefined)?]];
        })

        const ship = grid[row][col];

        setHits(prevHits => {
            let newHits = {...prevHits};

            newHits[ship as Ship] = newHits[ship as Ship] - 1;

            if(newHits[ship as Ship] === 0) {
                setTimeout(() => {
                    checkForTotal(ship as string, row)
                }, 200)
            }

            return newHits
        })
    }

    const checkForTotal = (ship: string, row: number) => {

        const layout = LAYOUT.find(l => l.ship === ship);

        setGrid((prev) => {
            let newPrev = [...prev];
            newPrev[row] = [...newPrev[row]];

            for(let cord of layout?.positions || []){
                newPrev[cord[0]][cord[1]] = `${ship}${TOTAL}`
            }

            return newPrev as [[(string | undefined)?]];
        })
    }

    return (
        <>
            <div className={styles.grid}>
                {Array.from(Array(GRID_SIZE).keys()).map(row => {
                    return Array.from(Array(GRID_SIZE).keys()).map(col => {
                        return (
                            <Cell key={`${row}-${col}`} handleCellClick={() => handleCellClick(row, col)} value={grid[row][col] as string} />
                        )
                    })
                })}
            </div>
        </>
    )
}

export default Grid;