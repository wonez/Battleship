import {GRID_SIZE} from "../const";
import Cell from "./Cell";

const Grid = () => {


    return (
        <div className={"grid"}>
            {Array.from(Array(GRID_SIZE).keys()).map(row => {
                return Array.from(Array(GRID_SIZE).keys()).map(col => {
                    return (
                        <Cell row={row} col={col} />
                    )
                })
            })}
        </div>
    )
}

export default Grid;